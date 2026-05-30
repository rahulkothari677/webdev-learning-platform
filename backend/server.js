const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS with support for credentials/token authorization
app.use(cors({
  origin: '*', // We can restrict this to the Vercel URL later in production
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'x-auth-token']
}));

// Body Parser Middleware
app.use(express.json());

// Database Connection
const mongoURI = process.env.MONGODB_URI;
if (!mongoURI) {
  console.warn("WARNING: MONGODB_URI is not set in environment variables. Database operations will fail.");
} else {
  mongoose.connect(mongoURI)
    .then(() => console.log('MongoDB connection successful.'))
    .catch(err => console.error('MongoDB connection error:', err));
}

// Simple healthcheck endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'active', time: new Date() });
});

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/progress', require('./routes/progress'));
app.use('/api/ai', require('./routes/ai'));

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
