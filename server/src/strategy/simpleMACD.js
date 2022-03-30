import Strategy from "./strategy";
import tulind from "tulind";

class SimpleMACD extends Strategy {
  async run({ sticks, time }) {
    const prices = sticks.map((stick) => stick.average());

    const shortPeriod = 12;
  }
}
