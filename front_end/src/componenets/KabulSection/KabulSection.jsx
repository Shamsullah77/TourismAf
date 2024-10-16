import React from "react";
import { Box, Typography } from "@mui/material";

const KabulSection = () => {
  return (
    <Box sx={{ padding: "20px" }}>
      <Typography variant="h4" sx={{ fontWeight: "bold" }}>
        Kabul
      </Typography>
      <Typography variant="body1" sx={{ marginTop: "10px" }}>
        Kabul, the capital of Afghanistan, is known for its rich history, beautiful gardens, and bustling bazaars. It's the heart of the nation with numerous historical landmarks.
      </Typography>
      {/* Add more details about Kabul here */}
    </Box>
  );
};

export default KabulSection;
