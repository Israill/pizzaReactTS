import { configureStore } from "@reduxjs/toolkit";
import filter from "./feauters/filterSlice";
import cart from "./feauters/cartSlice"

export const store = configureStore({
  reducer: {
    filter,
    cart
  },
});
