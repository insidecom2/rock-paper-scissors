import { Box, Grid, Typography } from "@material-ui/core";
import { CardBox } from "./commons/CardBox";
import { PLAY_ACTION, STATUS_PLAYING } from "../consts/commons";
import { usePlaying } from "@/hooks/usePlaying";
import { PlayerCardBox } from "./PlayerCardBox";
import { useSelector } from "react-redux";
import { selectPlayingState } from "@/stores/playingSlice";

const Player = () => {
  const { setPlayerActionHandle } = usePlaying();
  const { playerChoice, winner, status } = useSelector(selectPlayingState);

  const isRockSelected = playerChoice === PLAY_ACTION.ROCK ? "selected" : "";
  const isPaperSelected = playerChoice === PLAY_ACTION.PAPER ? "selected" : "";
  const isScissorsSelected =
    playerChoice === PLAY_ACTION.SCISSORS ? "selected" : "";

  const isWin =
    status === STATUS_PLAYING.BOTPLAY && winner === "player" ? true : false;
  return (
    <Grid container spacing={2}>
      <Grid item xs={3}>
        <CardBox classExtra="card-item noborder">
          Player
          {isWin && (
            <Box component="span" className="winner">
              {"  "}
              Win
            </Box>
          )}
        </CardBox>
      </Grid>
      <Grid item xs={3}>
        <PlayerCardBox
          classExtra={`card-item ${isRockSelected}`}
          action={PLAY_ACTION.ROCK}
          setActionHandle={setPlayerActionHandle}
        >
          {PLAY_ACTION.ROCK}
        </PlayerCardBox>
      </Grid>
      <Grid item xs={3}>
        <PlayerCardBox
          classExtra={`card-item ${isPaperSelected}`}
          action={PLAY_ACTION.PAPER}
          setActionHandle={setPlayerActionHandle}
        >
          {PLAY_ACTION.PAPER}
        </PlayerCardBox>
      </Grid>
      <Grid item xs={3}>
        <PlayerCardBox
          classExtra={`card-item ${isScissorsSelected}`}
          action={PLAY_ACTION.SCISSORS}
          setActionHandle={setPlayerActionHandle}
        >
          {PLAY_ACTION.SCISSORS}
        </PlayerCardBox>
      </Grid>
    </Grid>
  );
};

export default Player;
