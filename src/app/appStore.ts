import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { RootReducer } from "./rootReducer";

export function makeStore() {
  const store = configureStore({
    reducer: RootReducer,
  });

  return store;
}

export const appStore = makeStore();

export type RootState = ReturnType<typeof appStore.getState>;
export type AppDispatch = typeof appStore.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
