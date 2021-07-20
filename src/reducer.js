import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"


const axios = require("axios");

export const fetchCartList = createAsyncThunk(
  "cart/cartItemLoading",
  () =>
    axios
      .get(`https://fakestoreapi.com/products`)
      .then((response) => response.data)
      .catch((error) => error)
);

const initialState = {
    cart: {
      status: "idle",
      data: {},
      error: {},
    },
  };
  
  const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {},
    extraReducers: {
      [fetchCartList.pending.type]: (state, action) => {
        state.cart = {
          status: "loading",
          data: {},
          error: {},
        };
      },
      [fetchCartList.fulfilled.type]: (state, action) => {
        state.cart = {
          status: "idle",
          data: action.payload,
          error: {},
        };
      },
      [fetchCartList.rejected.type]: (state, action) => {
        state.cart = {
          status: "idle",
          data: {},
          error: action.payload,
        };
      },
    },
  });
  
  export default cartSlice;
