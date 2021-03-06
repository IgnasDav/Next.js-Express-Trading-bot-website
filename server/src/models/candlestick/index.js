class Candlestick {
  constructor({
    low,
    high,
    close,
    open,
    price,
    interval,
    startTime = new Date(),
    volume,
  }) {
    this.startTime = startTime;
    this.interval = interval;
    this.open = open;
    this.close = close;
    this.high = high;
    this.low = low;
    this.volume = volume;
    // this.state = close ? "closed" : "open";
  }

  average() {
    return (this.close + this.high + this.low) / 3;
  }
}
export default Candlestick;
