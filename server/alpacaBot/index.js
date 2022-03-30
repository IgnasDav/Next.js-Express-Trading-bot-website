import { ALPACA_API_KEY, ALPACA_SECRET_KEY } from "../config/index.js";
import getDownTrendingStock from "./lib/getDownTrendingStock.js";
import getBars from "./lib/getBars.js";
import getAccountValue from "./lib/getAccountValue.js";
import { buyMarket, sellStop, sellLimit } from "./lib/order.js";

const init = async () => {
  const symbol = await getDownTrendingStock();
  const checkAndOrder = async () => {
    const oneMinuteMs = 60000;
    const now = new Date();
    const start = new Date(now - 2 * oneMinuteMs).toISOString();
    const end = new Date(now - oneMinuteMs).toISOString();
    console.log("Checking bars", end, start);
    const bars = await getBars({ symbol, start, end });

    const bar1 = bars[symbol[0]];
    const bar2 = bars[symbol[1]];
    if (
      bar1 &&
      bar2 &&
      bar1.c < bar1.o &&
      bar2.c > bar2.o &&
      bar2.c > bar1.o &&
      bar2.o < bar1.c &&
      bar2.v > bar1.v
    ) {
      const willingToSpend = getAccountValue() * 0.1;
      const amt = Math.floor(willingToSpend / bar2.c);
      const purchase = await buyMarket({ symbol, amt });
      sellStop({ symbol, price: bar1.l, amt });

      const profitTarget = (purchase.price - bar1.l) * 2 + purchase.price;
      sellLimit({ symbol, price: profitTarget, amt });
    }
    checkAndOrder();
    setInterval(checkAndOrder, 60 * 1000);
  };
};

export default init;
