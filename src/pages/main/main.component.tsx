import { CreateNewPost } from "@/components";
import { Box, Grid, Typography } from "@mui/material";
import { useLocation } from "wouter";

export default function Main() {
  const [location, setLocation] = useLocation();

  return (
    <Grid
      container
      component="main"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignContent: "flex-start",
        height: "1080px",
        width: "800px",
        backgroundColor: "#FFF",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "80px",
          width: "800px",
          backgroundColor: "#7695EC",
          mb: "24px",
        }}
      >
        <Typography
          component="h1"
          sx={{
            fontSize: "22px",
            fontFamily: "Roboto",
            fontWeight: "700",
            lineHeight: "normal",
            height: "26px",
            color: "#FFF",
            width: "763px",
            textAlign: "left",
          }}
        >
          CodeLeap Network
        </Typography>
      </Box>
      <CreateNewPost />
    </Grid>
  );
}
