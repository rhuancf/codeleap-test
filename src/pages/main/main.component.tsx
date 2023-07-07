import { CreateNewPost, PostCard } from "@/components";
import { PostInfoArray } from "@/types";
import { Box, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export default function Main() {

  const [results, setResults] = useState([{}] as PostInfoArray);
  const [resultsCount, setResultsCount] = useState(0);

  const getPosts = async (limit = 10, offset = 0) => {
    const response = await fetch(
      `https://dev.codeleap.co.uk/careers/?limit=${limit}&offset=${offset}`
    ).then((res) => res.json());

    if (resultsCount !== response.count) {
      setResults(response.results);
      setResultsCount(response.count);
      console.log(response);
    }
  };

  useEffect(() => {

    // Initial api Call
    getPosts();

    // Interval to check for new posts every 10 seconds
    const interval = setInterval(getPosts, 10000);

    // Clean up the interval
    return () => clearInterval(interval);
    
  });

  return (
    <Grid
      container
      component="main"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignContent: "flex-start",
        height: "100%",
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
      {resultsCount &&
        results.map((post, index) => <PostCard key={index} info={post} />)}
    </Grid>
  );
}
