import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

import { createWrapper } from "next-redux-wrapper";
import { userSlice } from "./userSlice";
import { playerSlice } from "./playerSlice";

const makeStore = () =>
  configureStore({
    reducer: {
      [userSlice.name]: userSlice.reducer,
      [playerSlice.name]: playerSlice.reducer,
    },
    devTools: true,
  });

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;

export const wrapper = createWrapper<AppStore>(makeStore);
