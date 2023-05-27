import { PLAY_ACTION, TIME } from "@/consts/commons";
import {
  selectPlayingState,
  setBotChoosed,
  setPlayerIdel,
} from "@/stores/playingSlice";
import { setPlayerChoosed } from "@/stores/playingSlice";
import { setHighScore, setYourScore } from "@/stores/scoreSlice";
import { useCallback } from "react";

import { useDispatch, useSelector } from "react-redux";

export const usePlaying = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector(selectPlayingState);

  const setPlayerActionHandle = async (action: string) => {
    if (isLoading) return;
    await dispatch(setPlayerChoosed(action));
    /// call api get bot result
    await ApiResult(action);
  };

  const ApiResult = useCallback(async (playerAction: string) => {
    // mock random //
    const mockData = [
      PLAY_ACTION.ROCK,
      PLAY_ACTION.PAPER,
      PLAY_ACTION.SCISSORS,
    ];
    const rndInt = Math.floor(Math.random() * 3) + 1;
    const bot = mockData[rndInt - 1];
    const winner = mockLogic({ player: playerAction, bot });

    setTimeout(() => {
      setBotActionHandle({ action: bot, winner });
      setPlayerScore(10);
      setPlayerHighScore(20);
      setTimeout(() => {
        setIdleHandle();
      }, TIME.SLEEP);
    }, TIME.SLEEP);
  }, []);

  const mockLogic = ({ player, bot }: { player: string; bot: string }) => {
    let winner = "";
    if (player === bot) {
      winner = "no";
    } else if (player === PLAY_ACTION.ROCK) {
      if (bot === PLAY_ACTION.PAPER) {
        winner = "bot";
      } else {
        winner = "player";
      }
    } else if (player === PLAY_ACTION.SCISSORS) {
      if (bot === PLAY_ACTION.ROCK) {
        winner = "bot";
      } else {
        winner = "player";
      }
    } else if (player === PLAY_ACTION.PAPER) {
      if (bot === PLAY_ACTION.SCISSORS) {
        winner = "bot";
      } else {
        winner = "player";
      }
    }
    return winner;
  };
  const setPlayerHighScore = useCallback((score: number) => {
    dispatch(setHighScore(score));
  }, []);

  const setPlayerScore = useCallback((score: number) => {
    dispatch(setYourScore(score));
  }, []);

  const setIdleHandle = async () => {
    dispatch(setPlayerIdel());
  };

  const setBotActionHandle = useCallback(
    async ({ action, winner }: { action: string; winner: string }) => {
      dispatch(
        setBotChoosed({
          botChoice: action,
          winner: winner,
        })
      );
    },
    []
  );

  return {
    setPlayerActionHandle,
    setBotActionHandle,
    setHighScore,
  };
};
