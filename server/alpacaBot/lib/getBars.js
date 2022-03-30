import fetch from "fetch";
import { ALPACA_API_KEY, ALPACA_SECRET_KEY } from "../../config/index.js";
const getBars = async ({ symbol, start, end }) => {
  try {
    const response = await fetch(
      `https://data.alpaca.markets/v1/bars/minute?symbols=${symbol}&start=${start}&end=${end}`,
      {
        headers: {
          "APCA-API-KEY-ID": ALPACA_API_KEY,
          "APCA-API-SECRET-KEY": ALPACA_SECRET_KEY,
        },
      }
    );
    return response.json();
  } catch (error) {
    console.log(error);
  }
};

export default getBars;
