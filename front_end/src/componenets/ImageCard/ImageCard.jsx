import React from "react";
import { Box } from "@mui/material";

const ImageCard = ({ image, borderRadius }) => (
  <Box
    sx={{
      position: "relative",
      width: "100%",
      height: "200px",
      overflow: "hidden",
      borderRadius: borderRadius,
      boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
    }}
  >
    <Box
      component="img"
      src={image.src}
      alt={image.name}
      sx={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
        transition: "transform 0.5s",
        "&:hover": {
          transform: "scale(1.15)",
        },
      }}
    />
    <Box
      component="figcaption"
      sx={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        color: "white",
        padding: "10px",
        textAlign: "center",
        fontWeight: "bold",
      }}
    >
      {image.name}
    </Box>
  </Box>
);

export default ImageCard;
