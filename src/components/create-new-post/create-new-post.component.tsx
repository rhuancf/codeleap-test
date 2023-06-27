import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { useLocation } from "wouter";

export default function CreateNewPost() {
  const [location, setLocation] = useLocation();
  
  return (
    <>
      <Grid
        container
        component="main"
        sx={{ display: "flex", justifyContent: "center", alignItems: "center"}}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white",
            height: "334px",
            width: "752px",
            borderRadius: "16px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "start",
              flexDirection: "column",
              width: "704px",
              height: "22px",
              mb: "24px",
              mt: "24px"
            }}
          >
            <Typography
              component="label"
              sx={{
                fontSize: "22px",
                color: "black",
                fontFamily: "Roboto",
                fontWeight: "700",
                lineHeight: "26px",
                height: "22px",
              }}
            >
              What's on your mind?
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "start",
              flexDirection: "column",
              gap: "8px",
              mb: "24px",
            }}
          >
            <Typography
              component="label"
              sx={{
                fontSize: "16px",
                color: "black",
                fontFamily: "Roboto",
                fontWeight: "400",
                height: "19px",
              }}
            >
              Title
            </Typography>
            <input
              placeholder="Hello World"
              style={{
                width: "704px",
                height: "32px",
                borderRadius: "8px",
                background: "#FFFFFF",
                color: "black",
                border: "1px solid #777777",
                fontFamily: "Roboto",
              }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "start",
              flexDirection: "column",
              gap: "8px",
              mb: "24px",
            }}
          >
            <Typography
              component="label"
              sx={{
                fontSize: "16px",
                color: "black",
                fontFamily: "Roboto",
                fontWeight: "400",
                m: "0px",
                height: "19px",
              }}
            >
              Content
            </Typography>
            <input
              placeholder="Content Here"
              style={{
                width: "704px",
                height: "74px",
                borderRadius: "8px",
                background: "#FFFFFF",
                color: "black",
                border: "1px solid #777777",
                fontFamily: "Roboto",
              }}
            />
          </Box>
          <Box
            sx={{
              width: "704px",
              display: "flex",
              flexDirection: "column",
              alignItems: "end",
              mb: "24px",
            }}
          >
            <Button
              sx={{ fontFamily:"Roboto", width: "120px", height: "32px", borderRadius: "8px" }}
              variant="contained"
            >
              Create
            </Button>
          </Box>
        </Box>
      </Grid>
    </>
  );
}
