import { RootState } from "../../store";

export const selectPizzaData = (state: RootState) => state.pizza;
export const selectFilter = (state: RootState) => state.filter;
