class Trade {
  constructor({ price, time, size }) {
    this.price = price;
    this.time = time;
    this.size = size;
  }
  close({ price, time, size }) {
    this.state = "closed";
  }
}
export default Trade;
