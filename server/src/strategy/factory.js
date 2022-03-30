import Simple from "./simple.js";
import MACD from "./simpleMACD.js";

export default function (type, data) {
  switch (type) {
    case "macd":
      return new MACD(data);
    case "simple":
      return new Simple(data);
    default:
      return new MACD(data);
  }
}
