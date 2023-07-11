import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import "./create-new-post.module.css";

export default function CreateNewPost() {
  const username = window.location.pathname.replace("/main/", "").replace("%20", " ");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  async function createPost() {
    await fetch('https://dev.codeleap.co.uk/careers/', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json; charset=utf-8'
			},
      body: JSON.stringify({
        username: username,
        title: title,
        content: content
      })
		})

    window.location.reload()
  }

  return (
    <>
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
          border: "1px solid #CCC",
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
            mt: "24px",
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
            onChange={(e) => setTitle(e.target.value)}
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
          <textarea
            onChange={(e) => setContent(e.target.value)}
            placeholder="Content Here"
            style={{
              width: "704px",
              height: "74px",
              borderRadius: "8px",
              background: "#FFFFFF",
              color: "black",
              border: "1px solid #777777",
              fontFamily: "Roboto",
              resize: "none",
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
            sx={{
              fontFamily: "Roboto",
              width: "120px",
              height: "32px",
              borderRadius: "8px",
            }}
            variant="contained" onClick={() => createPost()}
          >
            Create
          </Button>
        </Box>
      </Box>
    </>
  );
}
