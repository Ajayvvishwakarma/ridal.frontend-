import { defineConfig } from 'vite';

export default defineConfig(({ mode }) => {
  return defineConfig({
    // ... existing plugins and resolves ...
    
    // ADD THIS BLOCK: Explicitly configure JSX support for .js files
    esbuild: {
      target: 'es2015',
      jsx: "react/jsx", // Tell Babel to compile JSX files as React components
      jsxsStringOptions: {
          jsxImportSource: 'react',
          throwIfNamespace: !1 // Allow import React from 'react'
      }
    },
  });
