//CoinBase client
import { client } from "../helpers/client.js";

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
