import { Button, Grid, Typography } from "@material-ui/core";
import { CardBox } from "./commons/CardBox";
import { useCreateUser } from "@/hooks/useCreateUser";

const Register = () => {
  const { createUser } = useCreateUser();

  return (
    <Grid container spacing={2} justifyContent="center">
      <Grid item xs={8}>
        <CardBox classExtra="card-item">
          <Typography variant="h5"> Start Game !!</Typography>
          <Button onClick={createUser}> Play Now</Button>
        </CardBox>
      </Grid>
    </Grid>
  );
};

export default Register;
