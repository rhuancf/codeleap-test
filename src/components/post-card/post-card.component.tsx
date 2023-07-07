import { PostInfo } from "@/types";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { useLocation } from "wouter";

export default function PostCard(props:{info:PostInfo}) {

  function getTimeAgo(dateString:string):string {
    const targetDate = new Date(dateString);
    const timeDifference = Date.now() - targetDate.getTime();
    const intervals = [
      { label: 'year', duration: 1000 * 60 * 60 * 24 * 365 },
      { label: 'month', duration: 1000 * 60 * 60 * 24 * 30 },
      { label: 'day', duration: 1000 * 60 * 60 * 24 },
      { label: 'hour', duration: 1000 * 60 * 60 },
      { label: 'minute', duration: 1000 * 60 },
      { label: 'second', duration: 1000 },
    ];

    for (const interval of intervals) {
      const count = Math.floor(timeDifference / interval.duration);
      if (count >= 1) {
        return count === 1 ? `${count} ${interval.label} ago` : `${count} ${interval.label}s ago`;
      }
    }

    return 'Just now';
  }
  
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "white",
          height: "334px",
          width: "752px",
          borderRadius: "16px",
          border: "1px solid #CCC",
          marginTop: "24px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            width: "752px",
            height: "70px",
            mb: "24px",
            backgroundColor: "#7695EC",
            borderRadius: "16px 16px 0px 0px",
          }}
        >
          <Typography
            component="label"
            sx={{
              fontSize: "22px",
              fontFamily: "Roboto",
              fontWeight: "700",
              lineHeight: "26px",
              height: "22px",
              width: "704px",
              textAlign: "left",
              color: "#FFF",
            }}
          >
            {props.info.title}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "start",
            justifyContent: "space-between",
            width: '704px',
            gap: "8px",
            mb: "24px",
          }}
        >
          <Typography
            component="label"
            sx={{
              display: 'flex',
              height: '18px',
              flexDirection: 'column',
              flexShrink: '0',
              color: "#777",
              fontWeight: "700",
            }}
          >
            @{props.info.username}
          </Typography>
          <Typography
            component="label"
            sx={{
              display: 'flex',
              height: '18px',
              flexDirection: 'column',
              flexShrink: '0',
              color: "#777",
              fontWeight: "400",
            }}
          >
            {getTimeAgo(props.info.created_datetime)}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "start",
            flexDirection: "column",
            width: "704px",
            gap: "8px",
            mb: "24px",
            textAlign: "initial"
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
              height: "164px",
            }}
          >
            {props.info.content}
          </Typography>
        </Box>
      </Box>
    </>
  );
}
