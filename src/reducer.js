import fetchCart from "./fetch"
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"


const axios = require("axios");

export const fetchPlayerList = createAsyncThunk(
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
  
  const teamSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {},
    extraReducers: {
      [fetchPlayerList.pending.type]: (state, action) => {
        state.cart = {
          status: "loading",
          data: {},
          error: {},
        };
      },
      [fetchPlayerList.fulfilled.type]: (state, action) => {
        state.cart = {
          status: "idle",
          data: action.payload,
          error: {},
        };
      },
      [fetchPlayerList.rejected.type]: (state, action) => {
        state.cart = {
          status: "idle",
          data: {},
          error: action.payload,
        };
      },
    },
  });
  
  export default teamSlice;

// let count = 0;

// const initialState = { 
//     todo: [{
//         id: 0,
//         todo: '',
//         completed: false,
//         deleted: false
//     }] 
// }

// const todoSlice = createSlice({
//     name: "todo",
//     initialState,
//     reducers: {
//       addTodo(state, action) {
        
//         state.todo.push({id: count++, todo: action.payload, completed: false, deleted: false})
//       },
//       toggleTodo(state, action) {
//         const todo = state.todo.find(todo => todo.id === action.payload)
//         if (todo) {
//           todo.completed = !todo.completed
//         }
//       }
//     }
//   })
  
//   export default todoSlice