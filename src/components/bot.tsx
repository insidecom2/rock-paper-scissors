import { Grid } from "@material-ui/core";
import { CardBox } from "./commons/CardBox";
import { PLAY_ACTION } from "../consts/commons";
import { useSelector } from "react-redux";
import { selectPlayingState } from "@/stores/playingSlice";

const Bot = () => {
  const { botChoice } = useSelector(selectPlayingState);
  return (
    <Grid container spacing={2} className="spaceCap">
      <Grid item xs={6}>
        <CardBox classExtra="card-item noborder">Bot a</CardBox>
      </Grid>
      <Grid item xs={3}>
        <CardBox classExtra="card-item">{botChoice}</CardBox>
      </Grid>
      <Grid item xs={3}></Grid>
    </Grid>
  );
};

export default Bot;
