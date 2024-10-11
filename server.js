const express = require('express');
const connectDB = require('./db/db');
const cron = require('node-cron');
const cryptoRoutes = require('./routes/crypto.routes')
const fetchCryptoData = require('./jobs/fetchCryptoData');

const app = express();
const PORT = process.env.PORT || 4000;

// Connect to MongoDB
connectDB();

// Schedule the background job to run every 2 hours
cron.schedule('0 */2 * * *', fetchCryptoData);

// Routes
app.use('/api', cryptoRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Initial data fetch
fetchCryptoData();