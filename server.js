import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
const mongoUrl = process.env.MONGO_URL;
const dbName = process.env.DB_NAME || 'ridaldb';

let mongoConnected = false;

if (!mongoUrl) {
  console.warn('⚠️  MONGO_URL not configured - using in-memory database');
} else {
  mongoose.connect(mongoUrl, {
    dbName: dbName,
  })
  .then(() => {
    console.log(`✅ Connected to MongoDB - Database: ${dbName}`);
    mongoConnected = true;
  })
  .catch((err) => {
    console.warn(`⚠️  MongoDB Connection Error: ${err.message}`);
    console.warn('💾 Using in-memory storage instead');
    mongoConnected = false;
  });
}

// Order Schema
const orderSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  companyName: String,
  streetAddress: String,
  apartment: String,
  city: String,
  country: String,
  postcode: String,
  notes: String,
  shippingAddress: {
    firstName: String,
    lastName: String,
    companyName: String,
    streetAddress: String,
    apartment: String,
    city: String,
    country: String,
    postcode: String,
  },
  paymentId: String,
  amount: Number,
  items: Array,
  paymentMethod: String,
  status: String,
  orderedAt: {
    type: Date,
    default: Date.now
  }
});

const Order = mongoose.model('Order', orderSchema);

// In-memory storage (fallback when MongoDB is not available)
let ordersInMemory = [];

// Routes

// Health check
app.get('/api/health', (req, res) => {
  res.json({ 
    message: 'Server is running ✅', 
    database: dbName,
    mongoConnected: mongoConnected,
    storage: mongoConnected ? 'MongoDB' : 'In-Memory'
  });
});

// Create order
app.post('/api/orders/create', async (req, res) => {
  try {
    const orderData = req.body;
    
    // Validate required fields
    if (!orderData.email || !orderData.firstName || !orderData.paymentId) {
      return res.status(400).json({ 
        success: false, 
        message: 'Missing required fields' 
      });
    }

    if (mongoConnected) {
      // Save to MongoDB
      const order = new Order(orderData);
      const savedOrder = await order.save();
      console.log('✅ Order saved to MongoDB:', savedOrder._id);
      
      res.json({
        success: true,
        message: 'Order saved successfully to MongoDB',
        orderId: savedOrder._id,
        paymentId: savedOrder.paymentId,
        amount: savedOrder.amount
      });
    } else {
      // Save to in-memory (temporary storage)
      const orderId = 'ORD-' + Date.now();
      const orderWithId = { _id: orderId, ...orderData };
      ordersInMemory.push(orderWithId);
      
      console.log('✅ Order saved to in-memory storage:', orderId);
      
      res.json({
        success: true,
        message: 'Order saved successfully (temporary storage)',
        orderId: orderId,
        paymentId: orderData.paymentId,
        amount: orderData.amount,
        warning: 'MongoDB not connected - order stored temporarily'
      });
    }
  } catch (error) {
    console.error('❌ Error saving order:', error);
    res.status(500).json({
      success: false,
      message: 'Error saving order',
      error: error.message
    });
  }
});

// Get all orders (admin)
app.get('/api/orders', async (req, res) => {
  try {
    if (mongoConnected) {
      const orders = await Order.find().sort({ orderedAt: -1 });
      res.json({
        success: true,
        total: orders.length,
        source: 'MongoDB',
        orders: orders
      });
    } else {
      res.json({
        success: true,
        total: ordersInMemory.length,
        source: 'In-Memory (temporary)',
        orders: ordersInMemory
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching orders',
      error: error.message
    });
  }
});

// Get order by ID
app.get('/api/orders/:id', async (req, res) => {
  try {
    if (mongoConnected) {
      const order = await Order.findById(req.params.id);
      if (!order) {
        return res.status(404).json({
          success: false,
          message: 'Order not found'
        });
      }
      res.json({
        success: true,
        source: 'MongoDB',
        order: order
      });
    } else {
      const order = ordersInMemory.find(o => o._id === req.params.id);
      if (!order) {
        return res.status(404).json({
          success: false,
          message: 'Order not found'
        });
      }
      res.json({
        success: true,
        source: 'In-Memory',
        order: order
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching order',
      error: error.message
    });
  }
});

// Get orders by email
app.get('/api/orders/email/:email', async (req, res) => {
  try {
    if (mongoConnected) {
      const orders = await Order.find({ email: req.params.email }).sort({ orderedAt: -1 });
      res.json({
        success: true,
        total: orders.length,
        source: 'MongoDB',
        orders: orders
      });
    } else {
      const orders = ordersInMemory.filter(o => o.email === req.params.email);
      res.json({
        success: true,
        total: orders.length,
        source: 'In-Memory',
        orders: orders
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching orders',
      error: error.message
    });
  }
});

// Update order status
app.put('/api/orders/:id/status', async (req, res) => {
  try {
    const { status } = req.body;
    
    if (mongoConnected) {
      const order = await Order.findByIdAndUpdate(
        req.params.id,
        { status: status },
        { new: true }
      );
      
      if (!order) {
        return res.status(404).json({
          success: false,
          message: 'Order not found'
        });
      }

      res.json({
        success: true,
        message: 'Order status updated in MongoDB',
        order: order
      });
    } else {
      const order = ordersInMemory.find(o => o._id === req.params.id);
      if (!order) {
        return res.status(404).json({
          success: false,
          message: 'Order not found'
        });
      }
      
      order.status = status;
      
      res.json({
        success: true,
        message: 'Order status updated in memory',
        order: order
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error updating order',
      error: error.message
    });
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`\n🚀 Server running on http://localhost:${PORT}`);
  console.log(`📊 API Base URL: http://localhost:${PORT}/api`);
  console.log(`💾 Database: ${dbName}`);
  console.log('\n📝 Available Endpoints:');
  console.log('   GET  /api/health              - Server status');
  console.log('   POST /api/orders/create       - Create new order');
  console.log('   GET  /api/orders              - Get all orders');
  console.log('   GET  /api/orders/:id          - Get order by ID');
  console.log('   GET  /api/orders/email/:email - Get orders by email');
  console.log('   PUT  /api/orders/:id/status   - Update order status\n');
});
