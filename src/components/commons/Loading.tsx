import { Box, CircularProgress } from "@material-ui/core";

export const Loading = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <CircularProgress />
    </Box>
  );
};
