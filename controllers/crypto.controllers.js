const Crypto = require('../models/crypto.models')

exports.getStats = async (req,res) => {
    const { coin } = req.query;
    try {

        const latestData = await Crypto.findOne({ coin }).sort({ timestamp: -1 });
        
        if (!latestData) {
          return res.status(404).json({ error: 'Data not found for the specified coin' });
        }

        res.json({
          price: latestData.price,
          marketCap: latestData.marketCap,
          "24hChange": latestData.change24h
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

exports.getDeviation = async (req,res) => {
    const { coin } = req.query;
    try {
        
        const data = await Crypto.find({ coin }).sort({ timestamp: -1 }).limit(100);
        if (data.length === 0) {
          return res.status(404).json({ error: 'No data found for the specified coin' });
        }
        
        const prices = data.map(item => item.price);
        const mean = prices.reduce((sum, price) => sum + price, 0) / prices.length;
        const squaredDifferences = prices.map(price => Math.pow(price - mean, 2));
        const variance = squaredDifferences.reduce((sum, sqDiff) => sum + sqDiff, 0) / prices.length;
        const standardDeviation = Math.sqrt(variance);
        
        res.json({ deviation: standardDeviation });

    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
}