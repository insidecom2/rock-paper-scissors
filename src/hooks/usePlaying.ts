import { PLAY_ACTION, TIME } from "@/consts/commons";
import {
  selectPlayingState,
  setBotChoosed,
  setPlayerIdel,
} from "@/stores/playingSlice";
import { setPlayerChoosed } from "@/stores/playingSlice";
import { setHighScore, setYourScore } from "@/stores/scoreSlice";
import httpRequest from "@/utils/http";
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
    const dataResponse: any = await httpRequest({
      method: "POST",
      url: `${process.env.NEXT_PUBLIC_API_HOST}/playing`,
      body: {
        playerChoosed: playerAction,
      },
    });
    const bot = dataResponse.data.bot;
    const winner = dataResponse.data.winner;
    setTimeout(() => {
      setBotActionHandle({ action: bot, winner });
      setPlayerScore(dataResponse.data.playerscore);
      setPlayerHighScore(dataResponse.data.highscore);
      setTimeout(() => {
        setIdleHandle();
      }, TIME.SLEEP);
    }, TIME.SLEEP);
  }, []);

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
