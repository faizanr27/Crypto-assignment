# Crypto Stats App

This is a Node.js application that fetches and stores cryptocurrency data (Bitcoin, Matic, and Ethereum) from the CoinGecko API and provides endpoints to retrieve stats and the standard deviation of price data. It also schedules background jobs to fetch cryptocurrency data every 2 hours using `cron`.

## Features

- Fetches cryptocurrency data for Bitcoin, Matic, and Ethereum every 2 hours
- Stores price, market cap, and 24-hour price change percentage in a MongoDB database
- Provides APIs to retrieve the latest stats and calculate the standard deviation of recent prices

## Technologies Used

- **Node.js**: Javascript Runtime Environment
- **Express**: Backend framework
- **MongoDB**: Database to store cryptocurrency data
- **Mongoose**: ODM for MongoDB
- **Axios**: To fetch data from CoinGecko API
- **node-cron**: To schedule recurring background tasks

## Endpoints

### 1. Fetch Stats
Returns the latest stats for a specific coin.

**URL**: `/api/stats?coin=coinid`
**sample endpoint**: `https://crypto-assignment-84xg.onrender.com/api/stats?coin=bitcoin`

**Method**: `GET`

**Query Parameters**:
- `coin`: (string) The name of the cryptocurrency (e.g., `bitcoin`, `matic-network`, `ethereum`).

**Response**:
```json
{
  "price": 28500.32,
  "marketCap": 530000000,
  "24hChange": -0.52
}
```
### 2. Fetch Standard Deviation
Returns the standard deviation of the price over the last 100 data points for a specific coin.

**URL**: `/api/deviation?coin=coinid`
**sample endpoint**: `https://crypto-assignment-84xg.onrender.com/api/deviation?coin=bitcoin`

**Method**: `GET`

**Query Parameters**:
- `coin`: (string) The name of the cryptocurrency (e.g., `bitcoin`, `matic-network`, `ethereum`).

**Response**:
```json
{
  "deviation": 100.5
}
```

## Setup and Installation
### Prerequisites
- Node.js (version 14 or higher)
- MongoDB (running locally or through a cloud service like MongoDB Atlas)
- CoinGecko API (No authentication required)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/faizanr27/Crypto-assignment.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Crypto-assignment
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create a .env file in the root of your project and add your MongoDB connection string:
   ```bash
   MONGODB_URI=your-mongodb-uri
   PORT=5000
   ```
5. Run the application:
   ```bash
   npm start
   ```
 <h5>The server will run on http://localhost:5000.</h5>

## Folder Structure
```bash

.
├── controllers        # API controller functions
│   └── crypto.controllers.js
├── db                 # MongoDB connection logic
│   └── db.js
├── jobs               # Background job functions
│   └── fetchCryptoData.js
├── models             # Mongoose schemas
│   └── crypto.models.js
├── routes             # API routes
│   └── crypto.routes.js
├── .env               # Environment variables (e.g., MongoDB URI)
├── .gitignore         # Ignored files
├── package.json       # NPM dependencies and scripts
├── README.md          # This file
└── server.js          # Entry point of the application


```
