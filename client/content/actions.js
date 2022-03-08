import * as types from "./types";
import { io } from "socket.io-client";

export const getBTCPrice = () => async (dispatch, getState) => {
  const socket = io("http://localhost:5000");
  socket.on("receive-BTCPrice", (coinData) => {
    try {
      dispatch({ type: types.GET_BTC_PRICE, payload: coinData });
    } catch (error) {
      dispatch({ type: types.GET_BTC_ERROR, paylaod: error.message });
    }
  });
};
export const getADAPrice = () => async (dispatch, getState) => {
  const socket = io("http://localhost:5000");
  socket.on("receive-ADAPrice", (coinData) => {
    try {
      dispatch({ type: types.GET_ADA_PRICE, payload: coinData });
    } catch (error) {
      dispatch({ type: types.GET_ADA_ERROR, paylaod: error.message });
    }
  });
};
export const getETHPrice = () => async (dispatch, getState) => {
  const socket = io("http://localhost:5000");
  socket.on("receive-ETHPrice", (coinData) => {
    try {
      dispatch({ type: types.GET_ETH_PRICE, payload: coinData });
    } catch (error) {
      dispatch({ type: types.GET_ETH_ERROR, paylaod: error.message });
    }
  });
};
export const getUSDTPrice = () => async (dispatch, getState) => {
  const socket = io("http://localhost:5000");
  socket.on("receive-USDTPrice", (coinData) => {
    try {
      dispatch({ type: types.GET_USDT_PRICE, payload: coinData });
    } catch (error) {
      dispatch({ type: types.GET_USDT_ERROR, paylaod: error.message });
    }
  });
};
