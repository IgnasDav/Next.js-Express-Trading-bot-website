"use strict";
import { createServer } from "http";
import cors from "cors";
import init from "./alpacaBot/index.js";
import { program } from "commander";
import {
  COINBASE_API_KEY,
  COINBASE_PASSPHRASE,
  COINBASE_SECRET,
  MONGO_CONNECTION_STRING,
  PORT,
} from "./config/index.js";
import express from "express";
import { Server } from "socket.io";
import { MongoClient } from "mongodb";
import joi from "joi";
import CoinbasePro from "coinbase-pro";
import Historical from "./src/historical/index.js";
import Backtester from "./src/backtester/index.js";
//Helpers
import getCoinPrice from "./getCoinPrice/index.js";

const now = new Date();
const yesterday = new Date(now.getTime() - 24 * 60 * 60 * 1e3);

function toDate(val) {
  return new Date(val * 1e3);
}

program
  .version("1.0.0")
  .option(
    "-i, --interval [interval]",
    "Interval in seconds for candlesticks",
    300
  )
  .option("-p, --product [product]", "Product identifier", "ETH-EUR")
  .option(
    "-s, --start [start]",
    "Start time in unix seconds",
    toDate,
    yesterday
  )
  .option("-e, --end [end]", "End time in unix seconds", toDate, now)
  .parse(process.argv);

const app = express();
app.use(cors());
app.use(express.json());

const httpServer = createServer(app);
const io = new Server(httpServer);
const client = new MongoClient(MONGO_CONNECTION_STRING);
const apiURI = "https://api.pro.coinbase.com";
export const publicClient = new CoinbasePro.PublicClient();
const authedClient = new CoinbasePro.AuthenticatedClient(
  COINBASE_API_KEY,
  COINBASE_SECRET,
  COINBASE_PASSPHRASE,
  apiURI
);
io.on("connection", (socket) => {});

const product = "ETH-EUR";

const getHistoricalRates = async () => {
  const results = await publicClient.getProductHistoricRates(product, {
    granularity: 300,
  });
  console.log(results[results.length - 1]);
  //Time: 1646763900
  //Low: 2374.54
  //High: 2387.89
  //Open: 2376.54
  //Close: 2385.84
  //Volume: 102.60513238
};
// getHistoricalRates();

const interval1 = setInterval(async () => {
  const coinData = await getCoinPrice();
  const schema = joi.number().required();
  const isValid = schema.validate(coinData);
  if (isValid.error) {
    console.log(isValid.error.details[0].message);
  } else {
    const connection = await client.connect();
    const btc = await connection
      .db("mereo")
      .collection("btc")
      .insertOne({ coinData });
  }
  io.emit("receive-BTCPrice", coinData);
}, 900000);
const interval2 = setInterval(async () => {
  const coinData = await getCoinPrice("EUR", "ETH");
  const schema = joi.number().required();
  const isValid = schema.validate(coinData);
  if (isValid.error) {
    console.log(isValid.error.details[0].message);
  } else {
    const connection = await client.connect();
    const eth = await connection
      .db("mereo")
      .collection("eth")
      .insertOne({ coinData });
  }
  io.emit("receive-ETHPrice", coinData);
}, 900000);
const interval3 = setInterval(async () => {
  const coinData = await getCoinPrice("EUR", "USDT");
  const schema = joi.number().required();
  const isValid = schema.validate(coinData);
  if (isValid.error) {
    console.log(isValid.error.details[0].message);
  } else {
    const connection = await client.connect();
    const usdt = await connection
      .db("mereo")
      .collection("usdt")
      .insertOne({ coinData });
  }
  io.emit("receive-USDTPrice", coinData);
}, 900000);
const interval4 = setInterval(async () => {
  const coinData = await getCoinPrice("EUR", "ADA");
  const schema = joi.number().required();
  const isValid = schema.validate(coinData);
  if (isValid.error) {
    console.log(isValid.error.details[0].message);
  } else {
    const connection = await client.connect();
    const ada = await connection
      .db("mereo")
      .collection("ada")
      .insertOne({ coinData });
  }
  io.emit("receive-ADAPrice", coinData);
}, 900000);
const interval5 = setInterval(async () => {
  const connection = await client.connect();
  const ada = await connection.db("mereo").collection("ada").find({}).toArray();
  const btc = await connection.db("mereo").collection("btc").find({}).toArray();
  const eth = await connection.db("mereo").collection("eth").find({}).toArray();
  const usdt = await connection
    .db("mereo")
    .collection("usdt")
    .find({})
    .toArray();
  io.emit("receive-coinData", { ada, btc, eth, usdt });
}, 900000);

app.get("/getBTCData", async (req, res) => {
  try {
    const BTCPrice = await getCoinPrice();
    res.send({ success: true, BTCPrice });
  } catch (error) {
    res.status(500).send({ success: false, error: "Internal server error" });
  }
});
app.get("/getADAData", async (req, res) => {
  try {
    const ADAPrice = await getCoinPrice("EUR", "ADA");
    res.send({ success: true, ADAPrice });
  } catch (error) {
    res.status(500).send({ success: false, error: "Internal server error" });
  }
});
app.get("/getETHData", async (req, res) => {
  try {
    const ETHPrice = await getCoinPrice("EUR", "ETH");
    res.send({ success: true, ETHPrice });
  } catch (error) {
    res.status(500).send({ success: false, error: "Internal server error" });
  }
});
app.get("/getUSDTData", async (req, res) => {
  try {
    const USDTPrice = await getCoinPrice("EUR", "USDT");
    res.send({ success: true, USDTPrice });
  } catch (error) {
    res.status(500).send({ success: false, error: "Internal server error" });
  }
});
app.get("/getCoinData", async (req, res) => {
  try {
    const connection = await client.connect();
    const btcData = await connection
      .db("mereo")
      .collection("btc")
      .find({})
      .toArray();
    const adaData = await connection
      .db("mereo")
      .collection("ada")
      .find({})
      .toArray();
    const ethData = await connection
      .db("mereo")
      .collection("eth")
      .find({})
      .toArray();
    const usdtData = await connection
      .db("mereo")
      .collection("usdt")
      .find({})
      .toArray();
    res.send({
      success: true,
      data: {
        btcData,
        adaData,
        ethData,
        usdtData,
      },
    });
  } catch (error) {
    res.status(500).send({ success: false, error: "Internal server error" });
  }
});
const main = async function () {
  const { interval, product, start, end } = program.opts();

  const tester = new Backtester({
    start,
    end,
    product,
    interval,
  });

  await tester.start();
};
app.get("/botProfit", async (req, res) => {
  try {
    const connection = await client.connect();
    const botProfit = await connection
      .db("mereo")
      .collection("botData")
      .find({})
      .toArray();
    res.send({ success: true, profit: botProfit });
  } catch (error) {
    res.status(500).send({ success: false, error: "Internal server error" });
  }
});
app.get("/runBot", async (req, res) => {
  try {
    main();
    res.send({ success: true, message: "Bot Running" });
  } catch (error) {
    res.status(500).send({ success: false, error: "Internal server error" });
  }
});
httpServer.listen(PORT, () => {
  console.log(`App listening on port: ${PORT}`);
});
init();
