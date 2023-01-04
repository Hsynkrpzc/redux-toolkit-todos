import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/exports";
import { TypedUseSelectorHook } from "react-redux/es/types";
import todoSlice from "../features/todoSlice";


const store = configureStore({
  reducer: {todos : todoSlice},
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
// Global state type tanımlar
// getstate ın tpe Return type  olarak atandı
export type AppDispatch = typeof store.dispatch;
//

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
