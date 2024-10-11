const axios = require('axios')
const Crypto = require('../models/crypto.models')
// Background job to fetch and store crypto data
async function fetchCryptoData() {
    const coins = ['bitcoin', 'matic-network', 'ethereum'];
    for (const coin of coins) {
      try {
        const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${coin}`);
        const data = response.data;
        console.log(response.data)
        
        await Crypto.create({
          coin: coin,
          price: data.market_data.current_price.usd,
          marketCap: data.market_data.market_cap.usd,
          change24h: data.market_data.price_change_percentage_24h
        });
        
        console.log(`Data fetched and stored for ${coin}`);
      } catch (error) {
        console.error(`Error fetching data for ${coin}:`, error);
      }
    }
  }

  module.exports = fetchCryptoData