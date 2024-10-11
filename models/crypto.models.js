const mongoose = require('mongoose');

const CryptoSchema = new mongoose.Schema({
    coin: String,
    price: Number,
    marketCap: Number,
    change24h: Number,
    timestamp: { type: Date, default: Date.now }
  });
  
  const Crypto = mongoose.model('Crypto', CryptoSchema);

  module.exports = Crypto