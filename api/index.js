import express from 'express';
import cors from 'cors';
import { storage } from '../server/storage';
import { insertContactSchema } from '../shared/schema';

// Create Express app
const app = express();
app.use(express.json());
app.use(cors({ origin: true, credentials: true }));

// Simple health check
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'ok',
    message: 'API is working',
    timestamp: new Date().toISOString()
  });
});

// Simple test endpoint
app.get('/api/test', (req, res) => {
  res.status(200).json({ message: 'Test API is working' });
});

// Handle POST requests
app.post('/api/contact-simple', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Request received',
    data: req.body
  });
});

// Export the Express app as a serverless function
export default app;
