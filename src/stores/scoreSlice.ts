import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "./store";

interface scoreSliceProp {
  yourScore: number;
  highSocre: number;
}

const initData: scoreSliceProp = {
  yourScore: 0,
  highSocre: 0,
};

export const scoreSlice = createSlice({
  name: "score",
  initialState: initData,
  reducers: {
    setScoreStart: (state) => {
      state = initData;
    },
    setyourScore: (state, action) => {
      state.yourScore = action.payload.yourScore;
    },
    setHighScore: (state, action) => {
      state.highSocre = action.payload.highSocre;
    },
  },
});

export const { setScoreStart, setyourScore, setHighScore } = scoreSlice.actions;

export const selectYourScoreState = (state: AppState) => state.score.yourScore;
export const selectHighScoreState = (state: AppState) => state.score.highSocre;
export default scoreSlice.reducer;
