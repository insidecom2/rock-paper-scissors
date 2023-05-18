import { Typography } from "@material-ui/core";

interface HighScoreProp {
  score: number;
}
const HighScore = ({ score }: HighScoreProp) => {
  return (
    <Typography variant="h5" className="p-2">
      High score {score} turn
    </Typography>
  );
};

export default HighScore;
