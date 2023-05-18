import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "./store";

interface userSlicProp {
  id: string;
}

const initData: userSlicProp = {
  id: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState: initData,
  reducers: {
    setDafaultUser: (state, action) => {
      state.id = action.payload;
    },
    setUser: (state, action) => {
      state.id = action.payload;
    },
  },
});

export const { setDafaultUser, setUser } = userSlice.actions;

export const selectUserState = (state: AppState) => state.user;

export default userSlice.reducer;
