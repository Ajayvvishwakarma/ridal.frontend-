# 🚀 Garix E-Commerce - Complete Setup Guide

## 📋 Project Overview
This is a full-stack e-commerce application with:
- **Frontend**: React + Vite (Modern UI with Tailwind CSS)
- **Backend**: Express.js + MongoDB (Order management & payments)
- **Payment Gateway**: Razorpay (Google Pay, Phone Pay, Paytm, UPI, etc.)

---

## 🔧 Installation & Setup

### 1. **Environment Configuration**

Create or update these environment files:

#### `.env` (Frontend Configuration)
```env
# Razorpay Payment Gateway
VITE_RAZORPAY_KEY=rzp_test_SlGUVouMgw7Wnx

# MongoDB Database
VITE_MONGO_URL=mongodb+srv://ajayvishwakrma2021:Ajay%40123@cluster0.2q0ubzj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
VITE_DB_NAME=ridal
VITE_API_URL=http://localhost:5000/api
```

#### `.env.server` (Backend Configuration)
```env
PORT=5000
MONGO_URL=mongodb+srv://ajayvishwakrma2021:Ajay%40123@cluster0.2q0ubzj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
DB_NAME=ridal
NODE_ENV=development
```

### 2. **Install Dependencies**

```bash
# Install all required packages
npm install

# Packages installed:
# Frontend: react, react-dom, react-router-dom, razorpay
# Backend: express, cors, mongoose, dotenv
# Dev: vite, tailwindcss, eslint, concurrently
```

### 3. **Start the Application**

#### Option A: Run Frontend Only
```bash
npm run dev
# Server starts at http://localhost:5173
```

#### Option B: Run Backend Only
```bash
npm run server
# Server starts at http://localhost:5000
```

#### Option C: Run Both Frontend & Backend (Recommended)
```bash
npm run dev:all
# Frontend: http://localhost:5173
# Backend: http://localhost:5000
```

---

## 💳 Payment System Setup

### Razorpay Credentials
- **Test Key ID**: `rzp_test_SlGUVouMgw7Wnx`
- **Test Secret**: `gdntEtwftcZYM2ZvvelLqxRV`

### Payment Methods Available
When users click "Place Order" with Razorpay selected:
- 💳 Google Pay
- 📱 Phone Pay
- 🏦 Paytm
- ✓ UPI (Unified Payments Interface)
- 💰 Net Banking (All major banks)
- 💳 Credit/Debit Cards

### Test Payment Details
To test payments in Razorpay test mode:
- **Any amount** is accepted
- Use test card: `4111 1111 1111 1111`
- Any future expiry date
- Any 3-digit CVV

---

## 🗄️ MongoDB Database

### Collections
Your MongoDB database (`ridal`) will have:

#### `orders` Collection
```json
{
  "_id": "ObjectId",
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "phone": "1234567890",
  "streetAddress": "123 Main St",
  "city": "New York",
  "country": "USA",
  "postcode": "10001",
  "items": [...],
  "amount": 200,
  "paymentId": "pay_xxxxx",
  "paymentMethod": "razorpay",
  "status": "completed",
  "orderedAt": "2026-05-04T10:30:00Z"
}
```

---

## 🎯 API Endpoints

### Health Check
```bash
GET http://localhost:5000/api/health
```

### Order Management
```bash
# Create new order (called automatically after payment)
POST http://localhost:5000/api/orders/create
Content-Type: application/json

# Get all orders
GET http://localhost:5000/api/orders

# Get order by ID
GET http://localhost:5000/api/orders/:id

# Get orders by email
GET http://localhost:5000/api/orders/email/john@example.com

# Update order status
PUT http://localhost:5000/api/orders/:id/status
Content-Type: application/json
{
  "status": "shipped"
}
```

---

## 📱 Frontend Features

### Pages Implemented
✅ **Home Page** - Landing page with hero section  
✅ **Shop Page** - Product listing with filters & cart  
✅ **Cart Page** - Review items, apply coupons  
✅ **Checkout Page** - Billing, shipping, payment methods  
✅ **Contact Page** - Contact form & business info  
✅ **About Page** - Company information  
✅ **Services Page** - Service listing  
✅ **Booking Page** - Appointment booking  
✅ **Tracking Page** - Order tracking  

### Payment Flow
1. User adds items to cart on Shop page
2. Clicks "Checkout" button
3. Fills billing & shipping details
4. Selects "Razorpay Payment Gateway"
5. Clicks "Place Order"
6. Razorpay payment modal opens
7. User completes payment
8. Order automatically saved to MongoDB
9. Confirmation sent to user email

---

## 🛠️ Development Tips

### Hot Reload
Both frontend and backend support hot reload:
- **Frontend**: Changes in `src/` automatically reload
- **Backend**: Changes in `server.js` require restart

### Debugging
```bash
# Frontend errors: Check browser console (F12)
# Backend errors: Check terminal output

# MongoDB connection issues:
# 1. Verify internet connection
# 2. Check MongoDB Atlas IP whitelist (add 0.0.0.0/0)
# 3. Verify credentials in .env file
```

### Testing Payment
1. Go to http://localhost:5173/checkout
2. Fill in fake billing details
3. Select "Razorpay Payment Gateway"
4. Click "Place Order"
5. In Razorpay modal, select your preferred payment method
6. Use test credentials (see above)
7. Payment will be processed and order saved to MongoDB

---

## 📊 Production Deployment

### Before Going Live
1. **Update Razorpay keys** (use live keys from dashboard)
2. **Update MongoDB URI** (use production cluster)
3. **Update API_URL** (use production server URL)
4. **Enable HTTPS** (required for payments)
5. **Set NODE_ENV=production**

### Environment Variables for Production
```env
# .env (Production)
VITE_RAZORPAY_KEY=rzp_live_YOUR_LIVE_KEY
VITE_API_URL=https://api.yourdomain.com/api

# .env.server (Production)
PORT=5000
NODE_ENV=production
MONGO_URL=mongodb+srv://user:pass@cluster.mongodb.net/ridal?retryWrites=true&w=majority
```

---

## 🐛 Troubleshooting

### Frontend Issues
- **Port 5173 already in use**: Change port in `vite.config.js`
- **Razorpay key error**: Verify key in `.env` file
- **API connection error**: Ensure backend is running on port 5000

### Backend Issues
- **MongoDB connection error**: 
  - Check internet connection
  - Verify credentials in `.env.server`
  - Add IP 0.0.0.0/0 to MongoDB Atlas whitelist
- **Port 5000 already in use**: Change PORT in `.env.server`
- **CORS error**: Backend allows all origins by default

### Payment Issues
- **401 Unauthorized**: Razorpay key not configured properly
- **Payment modal not opening**: Check browser console for errors
- **Order not saving**: Ensure backend is running

---

## 📞 Support
For more details:
- **Razorpay Docs**: https://razorpay.com/docs
- **MongoDB Docs**: https://docs.mongodb.com
- **React Docs**: https://react.dev
- **Express Docs**: https://expressjs.com

---

## ✅ Checklist Before Launch

- [ ] Frontend dependencies installed (`npm install`)
- [ ] Backend dependencies installed
- [ ] `.env` file created with all variables
- [ ] `.env.server` file created with all variables
- [ ] MongoDB URI verified and accessible
- [ ] Razorpay test keys configured
- [ ] Both servers running successfully
- [ ] Payment flow tested end-to-end
- [ ] Orders saving to MongoDB
- [ ] All pages responsive & working

---

**🎉 You're all set! Your e-commerce platform is ready to process payments and save orders to MongoDB!**
