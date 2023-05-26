import { PLAY_ACTION } from "@/consts/commons";
import { selectPlayingState, setBotChoosed } from "@/stores/playingSlice";
import { setPlayerChoosed } from "@/stores/playingSlice";
import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

export const usePlaying = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector(selectPlayingState);
  const [loading, setLoading] = useState<boolean>(isLoading);

  useEffect(() => {
    setLoading(isLoading);
  }, [isLoading]);
  const setPlayerActionHandle = async (action: string) => {
    if (loading) return;
    await dispatch(setPlayerChoosed(action));
    /// call api get bot result
    await ApiResult(action);
  };

  const ApiResult = (playerAction: string) => {
    // if (isLoading) return;
    // mock random //
    const mockData = [
      PLAY_ACTION.ROCK,
      PLAY_ACTION.PAPER,
      PLAY_ACTION.SCISSORS,
    ];
    const rndInt = Math.floor(Math.random() * 3) + 1;
    const bot = mockData[rndInt - 1];
    const winner = mockLogic({ player: playerAction, bot });
    console.log(playerAction, bot, winner);
    console.log(loading, "2");
    setBotActionHandle({ action: playerAction, winner });
  };

  const mockLogic = ({ player, bot }: { player: string; bot: string }) => {
    if (player === PLAY_ACTION.ROCK) {
      if (bot === PLAY_ACTION.PAPER) {
        return "bot";
      } else {
        return "player";
      }
    } else if (player === PLAY_ACTION.SCISSORS) {
      if (bot === PLAY_ACTION.ROCK) {
        return "bot";
      } else {
        return "player";
      }
    } else if (player === PLAY_ACTION.PAPER) {
      if (bot === PLAY_ACTION.SCISSORS) {
        return "bot";
      } else {
        return "player";
      }
    }
    return "no";
  };
  const setHighScore = (score: number) => {};

  const setPlayerScore = (score: number) => {};

  const setBotActionHandle = ({
    action,
    winner,
  }: {
    action: string;
    winner: string;
  }) => {
    console.log(loading, "12345");
    if (!loading) return;
    dispatch(
      setBotChoosed({
        botChoice: action,
        playerWin: winner,
      })
    );
  };

  return {
    setPlayerActionHandle,
    setBotActionHandle,
  };
};
