import { Grid } from "@material-ui/core";
import YourScore from "./playerScore";
import HighScore from "./highScore";

const Scores = () => {
  return (
    <Grid container spacing={2} className="spaceCap">
      <Grid item xs={12} className="text-center">
        <YourScore />
        <HighScore />
      </Grid>
    </Grid>
  );
};

export default Scores;
