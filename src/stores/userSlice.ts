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
    setInitailUser: (state) => {
      state.id = "";
    },
    setUser: (state, action) => {
      state.id = action.payload;
    },
  },
});

export const { setInitailUser, setUser } = userSlice.actions;

export const selectUserState = (state: AppState) => state.user;

export default userSlice.reducer;
