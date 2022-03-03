"use strict";
import { createServer } from "http";
import cors from "cors";
import { API_KEY, API_SECRET, PORT } from "./config/index.js";
import express from "express";
import { Server, Socket } from "socket.io";
//Helpers
import getCoinPrice from "./helpers/getCoinPrice.js";

const app = express();
app.use(cors());
app.use(express.json());

const httpServer = createServer(app);
const io = new Server(httpServer);

io.on("connection", (socket) => {});

const interval = setInterval(async () => {
  const coinData = await getCoinPrice();
  io.emit("receive-coinData", coinData);
}, 5000);

httpServer.listen(PORT, () => {
  console.log(`App listening on port: ${PORT}`);
});
