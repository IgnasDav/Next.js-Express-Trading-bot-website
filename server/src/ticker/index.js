import CoinbasePro from "coinbase-pro";
import {
  COINBASE_PRO_WSS,
  COINBASE_SECRET,
  COINBASE_PASSPHRASE,
  COINBASE_API_KEY,
} from "../../config/index.js";
class Ticker {
  constructor({ product, onTick, onError }) {
    this.product = product;
    this.onTick = onTick;
    this.onError = onError;
    this.running = false;
  }
  start() {
    this.running = true;
    this.client = new CoinbasePro.WebsocketClient(
      [this.product],
      COINBASE_PRO_WSS,
      null,
      { channels: ["ticker", "heartbeat"] }
    );
    this.client.on("message", async (data) => {
      if (data.type === "ticker") {
        await this.onTick(data);
      }
    });
    this.client.on("error", (err) => {
      this.onError(err);
      this.client.connect();
    });
    this.client.on("close", () => {
      if (this.running) {
        this.client.connect();
      }
    });
  }
  stop() {
    this.running = false;
    this.client.close();
  }
}

export default Ticker;
