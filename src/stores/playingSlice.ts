import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "./store";
import { PLAY_ACTION, STATUS_PLAYING } from "@/consts/commons";

interface playerSliceProp {
  playerChoice: string;
  isLoading: boolean;
  botChoice: string;
  winner: string; // player / bot / no
  status: string; // idle / play / botplay
}

const initData: playerSliceProp = {
  playerChoice: "",
  isLoading: false,
  botChoice: PLAY_ACTION.EMPTY,
  winner: "no",
  status: STATUS_PLAYING.IDEL, // idle / play / botplay
};

export const playingSlice = createSlice({
  name: "player",
  initialState: initData,
  reducers: {
    setPlayerIdel: (state) => {
      state = initData;
    },
    setPlayerChoosed: (state, action) => {
      state.playerChoice = action.payload;
      state.isLoading = true;
      state.status = STATUS_PLAYING.PLAY;
    },
    setBotChoosed: (state, action) => {
      state.botChoice = action.payload.botChoice;
      state.winner = action.payload.winner;
      state.isLoading = true;
      state.status = STATUS_PLAYING.BOTPLAY;
    },
  },
});

export const { setPlayerIdel, setPlayerChoosed, setBotChoosed } =
  playingSlice.actions;

export const selectPlayingState = (state: AppState) => state.player;

export default playingSlice.reducer;
