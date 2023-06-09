import { Grid, Typography } from "@material-ui/core";
import Button from "@mui/material/Button";
import { CardBox } from "./commons/CardBox";
import { useUser } from "@/hooks/useUser";

const Register = () => {
  const { createUser } = useUser();

  return (
    <Grid container spacing={2} justifyContent="center">
      <Grid item xs={8}>
        <CardBox classExtra="card-item">
          <Typography variant="h5"> Start Game !!</Typography>
          <Button onClick={createUser} variant="outlined" className="m-1">
            Play Now
          </Button>
        </CardBox>
      </Grid>
    </Grid>
  );
};

export default Register;
