import { useScore } from "@/hooks/useScore";
import { selectHighScoreState } from "@/stores/scoreSlice";
import { Typography } from "@material-ui/core";
import { useSelector } from "react-redux";

const HighScore = () => {
  useScore();
  const highScore = useSelector(selectHighScoreState);
  return (
    <Typography variant="h5" className="p-2">
      High score {highScore} turn
    </Typography>
  );
};

export default HighScore;
