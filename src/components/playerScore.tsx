import { selectYourScoreState } from "@/stores/scoreSlice";
import { Typography } from "@material-ui/core";
import { useSelector } from "react-redux";

const PlayerScore = () => {
  const playerScore = useSelector(selectYourScoreState);
  return (
    <Typography variant="h5" className="p-2">
      Your score {playerScore} turn
    </Typography>
  );
};

export default PlayerScore;
