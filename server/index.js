"use strict";
import { createServer } from "http";
import cors from "cors";
import { MONGO_CONNECTION_STRING, PORT } from "./config/index.js";
import express from "express";
import { Server } from "socket.io";
import { MongoClient } from "mongodb";
import joi from "joi";
//Helpers
import getCoinPrice from "./getCoinPrice/index.js";

const app = express();
app.use(cors());
app.use(express.json());

const httpServer = createServer(app);
const io = new Server(httpServer);
const client = new MongoClient(MONGO_CONNECTION_STRING);

io.on("connection", (socket) => {});

// const interval1 = setInterval(async () => {
//   const coinData = await getCoinPrice();
//   const schema = joi.number().required();
//   const isValid = schema.validate(coinData);
//   if (isValid.error) {
//     console.log(isValid.error.details[0].message);
//   } else {
//     const connection = await client.connect();
//     const btc = await connection
//       .db("mereo")
//       .collection("btc")
//       .insertOne({ coinData });
//   }
//   io.emit("receive-BTCPrice", coinData);
// }, 5000);
// const interval2 = setInterval(async () => {
//   const coinData = await getCoinPrice("EUR", "ETH");
//   const schema = joi.number().required();
//   const isValid = schema.validate(coinData);
//   if (isValid.error) {
//     console.log(isValid.error.details[0].message);
//   } else {
//     const connection = await client.connect();
//     const eth = await connection
//       .db("mereo")
//       .collection("eth")
//       .insertOne({ coinData });
//   }
//   io.emit("receive-ETHPrice", coinData);
// }, 5000);
// const interval3 = setInterval(async () => {
//   const coinData = await getCoinPrice("EUR", "USDT");
//   const schema = joi.number().required();
//   const isValid = schema.validate(coinData);
//   if (isValid.error) {
//     console.log(isValid.error.details[0].message);
//   } else {
//     const connection = await client.connect();
//     const usdt = await connection
//       .db("mereo")
//       .collection("usdt")
//       .insertOne({ coinData });
//   }
//   io.emit("receive-USDTPrice", coinData);
// }, 5000);
// const interval4 = setInterval(async () => {
//   const coinData = await getCoinPrice("EUR", "ADA");
//   const schema = joi.number().required();
//   const isValid = schema.validate(coinData);
//   if (isValid.error) {
//     console.log(isValid.error.details[0].message);
//   } else {
//     const connection = await client.connect();
//     const ada = await connection
//       .db("mereo")
//       .collection("ada")
//       .insertOne({ coinData });
//   }
//   io.emit("receive-ADAPrice", coinData);
// }, 5000);
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
httpServer.listen(PORT, () => {
  console.log(`App listening on port: ${PORT}`);
});
