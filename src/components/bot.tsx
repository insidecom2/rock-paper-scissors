import { Box, Grid, Typography } from "@material-ui/core";
import { CardBox } from "./commons/CardBox";
import { STATUS_PLAYING } from "../consts/commons";
import { useSelector } from "react-redux";
import { selectPlayingState } from "@/stores/playingSlice";

const Bot = () => {
  const { botChoice, winner, status } = useSelector(selectPlayingState);
  const isWin =
    status === STATUS_PLAYING.BOTPLAY && winner === "bot" ? true : false;
  return (
    <Grid container spacing={2} className="spaceCap">
      <Grid item xs={6}>
        <CardBox classExtra="card-item noborder">
          Bot
          {isWin && (
            <Box component="span" className="winner">
              {"  "}
              Win
            </Box>
          )}
        </CardBox>
      </Grid>
      <Grid item xs={3}>
        <CardBox classExtra="card-item">{botChoice}</CardBox>
      </Grid>
      <Grid item xs={3}></Grid>
    </Grid>
  );
};

export default Bot;
