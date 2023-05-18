import { Grid } from "@material-ui/core";
import { CardBox } from "./commons/CardBox";
import { PLAY_ACTION } from "../consts/commons";

const Bot = () => {
  return (
    <Grid container spacing={2} className="spaceCap">
      <Grid item xs={6}>
        <CardBox classExtra="card-item noborder">Bot a</CardBox>
      </Grid>
      <Grid item xs={3}>
        <CardBox classExtra="card-item">{PLAY_ACTION.EMPTY}</CardBox>
      </Grid>
      <Grid item xs={3}></Grid>
    </Grid>
  );
};

export default Bot;
