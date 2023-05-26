import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "./store";

interface playerSliceProp {
  playerChoice: string;
  isLoading: boolean;
  botChoice: string;
  playerWin: boolean;
  status: string; // idle / play / botplay
}

const initData: playerSliceProp = {
  playerChoice: "",
  isLoading: false,
  botChoice: "",
  playerWin: false,
  status: "idle", // idle / play / botplay
};

export const playerSlice = createSlice({
  name: "player",
  initialState: initData,
  reducers: {
    setPlayerIdel: (state) => {
      state = initData;
    },
    setPlayerChoosed: (state, action) => {
      state.playerChoice = action.payload.playerChoice;
      state.isLoading = true;
      state.status = "play";
    },
    setBotChoosed: (state, action) => {
      state.botChoice = action.payload.botChoice;
      state.playerWin = action.payload.playerWin;
      state.isLoading = true;
      state.status = "botplay";
    },
  },
});

export const { setPlayerIdel, setPlayerChoosed, setBotChoosed } =
  playerSlice.actions;

export const selectPlayerState = (state: AppState) => state.player;

export default playerSlice.reducer;
