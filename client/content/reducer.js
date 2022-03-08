import { createReducer } from "@reduxjs/toolkit";
import * as types from "./types";

const DEFAULT_STATE = {
  coinPrices: {
    BTC: {
      price: 0,
      error: null,
    },
    USDT: {
      price: 0,
      error: null,
    },
    ETH: {
      price: 0,
      error: null,
    },
    ADA: {
      price: 0,
      error: null,
    },
  },
  coin: {
    data: {
      BTC: [],
      ETH: [],
      ADA: [],
      USDT: [],
    },
    error: {
      BTC: null,
      ETH: null,
      ADA: null,
      USDT: null,
    },
  },
};

const contentReducer = createReducer(DEFAULT_STATE, (builder) => {
  builder
    .addCase(types.GET_BTC_PRICE, (state, action) => {
      state.coinPrices.BTC.price = action.payload;
    })
    .addCase(types.GET_ETH_PRICE, (state, action) => {
      state.coinPrices.ETH.price = action.payload;
    })
    .addCase(types.GET_ADA_PRICE, (state, action) => {
      state.coinPrices.ADA.price = action.payload;
    })
    .addCase(types.GET_USDT_PRICE, (state, action) => {
      state.coinPrices.USDT.price = action.payload;
    })
    .addCase(types.GET_BTC_ERROR, (state, action) => {
      state.coinPrices.BTC.error = action.payload;
    })
    .addCase(types.GET_ETH_ERROR, (state, action) => {
      state.coinPrices.ETH.error = action.payload;
    })
    .addCase(types.GET_ADA_ERROR, (state, action) => {
      state.coinPrices.ADA.error = action.payload;
    })
    .addCase(types.GET_USDT_ERROR, (state, action) => {
      state.coinPrices.USDT.error = action.payload;
    })
    .addCase(types.GET_COIN_BTC_DATA, (state, action) => {
      state.coin.data.BTC = action.payload;
    })
    .addCase(types.GET_COIN_ADA_DATA, (state, action) => {
      state.coin.data.ADA = action.payload;
    })
    .addCase(types.GET_COIN_ETH_DATA, (state, action) => {
      state.coin.data.ETH = action.payload;
    })
    .addCase(types.GET_COIN_USDT_DATA, (state, action) => {
      state.coin.data.USDT = action.payload;
    })
    .addCase(types.GET_COIN_BTC_ERROR, (state, action) => {
      state.coin.error.BTC = action.payload;
    })
    .addCase(types.GET_COIN_ETH_ERROR, (state, action) => {
      state.coin.error.ETH = action.payload;
    })
    .addCase(types.GET_COIN_ADA_ERROR, (state, action) => {
      state.coin.error.ADA = action.payload;
    })
    .addCase(types.GET_COIN_USDT_ERROR, (state, action) => {
      state.coin.error.USDT = action.payload;
    })
    .addDefaultCase((state, action) => {});
});

export default contentReducer;
