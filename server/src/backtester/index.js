import Candlestick from "../models/candlestick/index.js";
import Historical from "../historical/index.js";
import SimpleStrategy from "../strategy/simple.js";
import randomstring from "randomstring";
import Postion from "../models/position/index.js";
import colors from "colors";
import { MongoClient } from "mongodb";
import { MONGO_CONNECTION_STRING } from "../../config/index.js";
import { Factory } from "../strategy/index.js";

class Backtester {
  constructor({ start, end, interval, product, client, strategyType }) {
    this.startTime = start;
    this.endTime = end;
    this.interval;
    this.product = product;
    this.client = new MongoClient(MONGO_CONNECTION_STRING);
    this.historical = new Historical({
      start,
      end,
      interval,
      product,
    });
    this.strategyType = strategyType;
  }
  async start() {
    try {
      const history = await this.historical.getData();
      this.strategy = Factory(this.strategyType, {
        onBuySignal: (x) => {
          this.onBuySignal(x);
        },
        onSellSignal: (x) => {
          this.onSellSignal(x);
        },
      });
      await Promise.all(
        history.map((stick, index) => {
          const sticks = history.slice(0, index + 1);
          return this.strategy.run({
            sticks,
            time: stick.startTime,
          });
        })
      );
      const positions = this.strategy.getPositions();
      positions.forEach((p) => {
        p.print();
      });
      const total = positions.reduce((r, p) => {
        return r + p.profit();
      }, 0);
      const prof = `${total}`;
      const colored = total > 0 ? colors.green(prof) : colors.red(prof);
      const connection = await this.client.connect();
      const date = new Date();
      const botProfitData = {
        profit: total,
        date,
      };
      const profitData = await connection
        .db("mereo")
        .collection("botData")
        .insertOne(botProfitData);
      console.log(`Total: ${colored}`);
    } catch (error) {
      console.log(error);
    }
  }
  async onBuySignal({ price, time }) {
    const id = randomstring.generate(20);
    this.strategy.positionOpened({
      price,
      time,
      size: 1.0,
      id,
    });
  }
  async onSellSignal({ price, size, time, position }) {
    this.strategy.positionClosed({
      price,
      time,
      size,
      id: position.id,
    });
  }
}

export default Backtester;
