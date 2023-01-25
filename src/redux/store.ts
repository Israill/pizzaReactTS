import { configureStore } from "@reduxjs/toolkit";
import filter from "./feauters/filter/slice";
import cart from "./feauters/cart/slice"
import pizza from "./feauters/pizza/slice"
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