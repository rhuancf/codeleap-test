import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import "./Login.css";

export default function Login() {
  const [username, setUsername] = useState("");
  const [activeButton, setActiveButton] = useState(true);

  useEffect(() => {
    if (username.length) {
      setActiveButton(false);
      return;
    }
    setActiveButton(true);
  }, [username]);

  return (
    <Grid
      container
      component="main"
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
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
        }}
      >
        <div
          style={{
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
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "end",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          <input
            onChange={(e) => setUsername(e.target.value)}
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
            sx={{ width: "111px", height: "32px", borderRadius: "8px" }}
            variant="contained"
            disabled={activeButton}
          >
            Enter
          </Button>
        </div>
      </Box>
    </Grid>
  );
}
