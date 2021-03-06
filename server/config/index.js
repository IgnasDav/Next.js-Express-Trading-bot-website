"use strict";

import dotenv from "dotenv";

dotenv.config();

export const MONGO_CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING;
export const PORT = process.env.PORT;
export const API_KEY = process.env.API_KEY;
export const API_SECRET = process.env.API_SECRET;
export const COINBASE_API_KEY = process.env.COINBASE_PRO_API_KEY;
export const COINBASE_PASSPHRASE = process.env.COINBASE_PRO_PASSPHRASE;
export const COINBASE_SECRET = process.env.COINBASE_PRO_API_SECRET;
export const BINANCE_API_KEY = process.env.BINANCE_API_KEY;
export const BINANCE_SECRET_KEY = process.env.BINANCE_SECRET_KEY;
export const ALPACA_API_KEY = process.env.ALPACA_API_KEY;
export const ALPACA_SECRET_KEY = process.env.ALPACA_SECRET_KEY;
export const COINBASE_PRO_WSS = process.env.COINBASE_PRO_WSS;
