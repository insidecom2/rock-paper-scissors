import { Typography } from "@material-ui/core";

interface YourScoreProp {
  score: number;
}
const YourScore = ({ score }: YourScoreProp) => {
  return (
    <Typography variant="h5" className="p-2">
      Your score {score} turn
    </Typography>
  );
};

export default YourScore;
