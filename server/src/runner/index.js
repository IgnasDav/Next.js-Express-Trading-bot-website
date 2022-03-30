import Historical from "../historical/index.js";
import colors from "colors/safe";
class Runner {
  constructor({ start, end, interval, product, strategyType }) {
    this.startTime = start;
    this.endTime = end;
    this.interval = interval;
    this.product = product;
    this.historical = new Historical({
      start,
      end,
      interval,
      product,
    });
    this.strategyType = strategyType;
    this.startegy = Factory.create(this.strategyType, {
      onBuySignal: (x) => {
        this.onBuySignal(x);
      },
      onSellSignal: (x) => {
        this.onSellSignal(x);
      },
    });
  }
  printPostions() {
    const positions = this.startegy.getPositions();
    positions.forEach((p) => {
      p.print();
    });
  }
  printProfit() {
    const postions = this.startegy.getPositions();
    const total = postions.reduce((r, p) => {
      return r + p.profit();
    }, 0);
    const prof = `${total}`;
    const colored = total > 0 ? colors.green(prof) : colors.red(prof);
    console.log(`Total: ${colored}`);
  }
  async start() {}
  async onBuySignal(data) {}
  async onSellSignal(data) {}
}

export default Runner;
