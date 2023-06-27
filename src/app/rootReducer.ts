import { combineReducers } from "@reduxjs/toolkit";
import { taskSlice } from "../entities/task/model/slice";

export const RootReducer = combineReducers({
  [taskSlice.name]: taskSlice.reducer,
});
