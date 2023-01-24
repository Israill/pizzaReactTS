import { configureStore } from "@reduxjs/toolkit";
import filter from "./feauters/filterSlice";
import cart from "./feauters/cartSlice"
import pizza from "./feauters/pizzaSlice"
import { useDispatch } from "react-redux";

export const store = configureStore({
  reducer: {
    filter,
    cart,
    pizza
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch