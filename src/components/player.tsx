import { Grid } from "@material-ui/core";
import { CardBox } from "./commons/CardBox";
import { PLAY_ACTION } from "../consts/commons";

const Player = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={3}>
        <CardBox classExtra="card-item noborder">Player</CardBox>
      </Grid>
      <Grid item xs={3}>
        <CardBox classExtra="card-item">{PLAY_ACTION.ROCK}</CardBox>
      </Grid>
      <Grid item xs={3}>
        <CardBox classExtra="card-item">{PLAY_ACTION.PAPER}</CardBox>
      </Grid>
      <Grid item xs={3}>
        <CardBox classExtra="card-item">{PLAY_ACTION.SCISSORS}</CardBox>
      </Grid>
    </Grid>
  );
};

export default Player;
