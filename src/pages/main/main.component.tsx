import { CreateNewPost, PostCard } from "@/components";
import { PostInfoArray } from "@/types";
import { Box, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export default function Main() {

  const [results, setResults] = useState([] as PostInfoArray);
  const [postNumber, setPostNumber] = useState(10);

  const handleScroll = () => {
    window.onscroll = function() {
        if ((window.innerHeight + Math.ceil(window.pageYOffset)) >= document.body.offsetHeight) {
            setPostNumber(postNumber+10);
        }
    }
  };

  useEffect(() => {
    const getPosts = async () => {
      const response = await fetch(
        `https://dev.codeleap.co.uk/careers/?limit=${postNumber}`
      ).then((res) => res.json());

      if(postNumber > results.length) {
        setResults(response.results);
        console.log(results);
      }
      
    };
    getPosts();
  }, [postNumber])

  useEffect(() => {
    handleScroll();
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
      {results.map((post, index) => <PostCard key={index} info={post} />)}
    </Grid>
  );
}
