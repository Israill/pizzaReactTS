import { configureStore } from "@reduxjs/toolkit";
import filter from "./feauters/filterSlice";
import cart from "./feauters/cartSlice"
import pizza from "./feauters/pizzaSlice"

export const store = configureStore({
  reducer: {
    filter,
    cart,
    pizza
  },
});
