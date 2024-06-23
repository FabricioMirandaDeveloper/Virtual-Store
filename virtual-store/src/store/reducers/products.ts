import { createReducer } from "@reduxjs/toolkit";
import { captureText, calculateTotal } from "../actions/product";

const initialState = { text: "", total: 0 };

export const productsReducer = createReducer(initialState, (build) =>
  build
    .addCase(captureText, (state, action) => {
      const newState = {
        ...state,
        text: action.payload.text,
      };
      return newState;
    })
    .addCase(calculateTotal, (state, action) => {
      const products = action.payload.products;
      const subtotals = products.map((each) => each.price * each.units);
      const total = subtotals.reduce((acc: number, val: number) => acc + val);
      const newState = {
        ...state,
        total,
      };
      return newState;
    })
);
