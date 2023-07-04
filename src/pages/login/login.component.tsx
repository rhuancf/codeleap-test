import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import "./Login.module.css";
import { useLocation } from "wouter";

export default function Login() {
  const [location, setLocation] = useLocation();
  const [username, setUsername] = useState("");
  const [activeButton, setActiveButton] = useState(false);

  useEffect(() => {
    if (username.length) {
      setActiveButton(true);
      return;
    }
    setActiveButton(false);
  }, [username]);

  return (
    <Grid
      container
      component="main"
      sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white",
          height: "205px",
          width: "500px",
          borderRadius: "16px",
          border: "1px solid #CCC",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "start",
            flexDirection: "column",
            width: "452px",
            paddingInline: "50px",
            gap: "24px",
          }}
        >
          <Typography
            component="span"
            sx={{
              fontSize: "22px",
              color: "black",
              fontFamily: "Roboto",
              fontWeight: "700",
              lineHeight: "26px",
            }}
          >
            Welcome to CodeLeap network!
          </Typography>
          <Typography
            component="span"
            sx={{
              mb: "4px",
              fontSize: "16px",
              color: "black",
              fontFamily: "Roboto",
              fontWeight: "400",
            }}
          >
            Please enter your username
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "end",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          <input
            onChange={(e) => setUsername(e.target.value)}
            onKeyDown={(e) => {e.key === "Enter" && setLocation("/main/" + username)}}
            placeholder="John Doe"
            style={{
              width: "452px",
              height: "32px",
              borderRadius: "8px",
              background: "#FFFFFF",
              color: "black",
              border: "1px solid #777777",
              fontFamily: "Roboto",
            }}
          />
          <Button
            onClick={() => setLocation("/main/" + username)}
            sx={{ width: "111px", height: "32px", borderRadius: "8px" }}
            variant="contained"
            disabled={!activeButton}
          >
            Enter
          </Button>
        </Box>
      </Box>
    </Grid>
  );
}
