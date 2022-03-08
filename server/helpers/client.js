import { Client } from "coinbase";
import { API_KEY, API_SECRET } from "../config/index.js";
export const client = new Client({
  apiKey: API_KEY,
  apiSecret: API_SECRET,
  strictSSL: false,
});
