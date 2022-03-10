import * as types from "./types";
import { io } from "socket.io-client";

const socket = io("http://localhost:5000");

export const getBTCPrice = () => async (dispatch, getState) => {
  socket.on("receive-BTCPrice", (coinData) => {
    try {
      dispatch({ type: types.GET_BTC_PRICE, payload: coinData });
    } catch (error) {
      dispatch({ type: types.GET_BTC_ERROR, paylaod: error.message });
    }
  });
};
export const getADAPrice = () => async (dispatch, getState) => {
  socket.on("receive-ADAPrice", (coinData) => {
    try {
      dispatch({ type: types.GET_ADA_PRICE, payload: coinData });
    } catch (error) {
      dispatch({ type: types.GET_ADA_ERROR, paylaod: error.message });
    }
  });
};
export const getETHPrice = () => async (dispatch, getState) => {
  socket.on("receive-ETHPrice", (coinData) => {
    try {
      dispatch({ type: types.GET_ETH_PRICE, payload: coinData });
    } catch (error) {
      dispatch({ type: types.GET_ETH_ERROR, paylaod: error.message });
    }
  });
};
export const getUSDTPrice = () => async (dispatch, getState) => {
  socket.on("receive-USDTPrice", (coinData) => {
    try {
      dispatch({ type: types.GET_USDT_PRICE, payload: coinData });
    } catch (error) {
      dispatch({ type: types.GET_USDT_ERROR, paylaod: error.message });
    }
  });
};
export const getCoinData = () => async (dispatch, getState) => {
  socket.on("receive-coinData", (coin) => {
    try {
      dispatch({ type: types.GET_COIN_BTC_DATA, payload: coin.btc });
      dispatch({ type: types.GET_COIN_ETH_DATA, payload: coin.eth });
      dispatch({ type: types.GET_COIN_ADA_DATA, payload: coin.ada });
      dispatch({ type: types.GET_COIN_USDT_DATA, payload: coin.usdt });
    } catch (error) {}
  });
};
export const getBotData = () => async (dispatch, getState) => {
  dispatch({ type: types.GET_BOT_LOADING, payload: true });
  try {
    const response = await fetch("http://localhost:5000/botProfit");
    const data = await response.json();
    if (data.success === true) {
      const filteredProfits = profit.filter((p) => {
        return p.profit || p.profit <= 0;
      });
      dispatch({ type: types.GET_BOT_PROFITS, paylaod: filteredProfits });
    }
  } catch (error) {
    dispatch({ type: types.GET_BOT_ERROR, paylaod: error.message });
  }
  dispatch({ type: types.GET_BOT_LOADING, payload: false });
};
