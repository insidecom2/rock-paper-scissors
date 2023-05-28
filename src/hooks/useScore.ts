import { TIME } from "@/consts/commons";
import { setHighScore, setYourScore } from "@/stores/scoreSlice";
import httpRequest from "@/utils/http";
import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";

export const useScore = () => {
  const dispatch = useDispatch();

  const getHighScore = async () => {
    const dataResponse: any = await httpRequest({
      method: "GET",
      url: `${process.env.NEXT_PUBLIC_API_HOST}/playing/highscore`,
    });
    dispatch(setHighScore(dataResponse.data.high_score));
  };

  const getPlayerScore = useCallback(async () => {
    const dataResponse: any = await httpRequest({
      method: "GET",
      url: `${process.env.NEXT_PUBLIC_API_HOST}/playing/playerscore`,
    });
    dispatch(setYourScore(dataResponse.data.player_score));
  }, []);

  useEffect(() => {
    getPlayerScore();
    getHighScore();
    const interval = setInterval(() => getHighScore(), TIME.HIGHSCORE);
    return () => clearInterval(interval);
  }, []);
};
