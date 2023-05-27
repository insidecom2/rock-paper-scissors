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
    setYourScore: (state, action) => {
      state.yourScore = action.payload;
    },
    setHighScore: (state, action) => {
      state.highSocre = action.payload;
    },
  },
});

export const { setScoreStart, setYourScore, setHighScore } = scoreSlice.actions;

export const selectYourScoreState = (state: AppState) => state.score.yourScore;
export const selectHighScoreState = (state: AppState) => state.score.highSocre;
export default scoreSlice.reducer;
