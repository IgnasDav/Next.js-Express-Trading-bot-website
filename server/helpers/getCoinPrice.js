import { Client } from "coinbase";
import { API_KEY, API_SECRET } from "../config/index.js";
const client = new Client({
  apiKey: API_KEY,
  apiSecret: API_SECRET,
  strictSSL: false,
});

export default function getCoinPrice(currency = "EUR", coin = "BTC") {
  return new Promise((resolve, reject) => {
    client.getBuyPrice(
      { currencyPair: `${coin}-${currency}` },
      function (err, obj) {
        if (err) {
          reject(err);
        } else {
          resolve(obj.data.amount);
        }
      }
    );
  });
}
