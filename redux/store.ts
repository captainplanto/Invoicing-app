import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import loginModalSlice from "./features/slices/login.slice";


export const store = configureStore({
  reducer: {
    loginModal: loginModalSlice,
  },
});
export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
