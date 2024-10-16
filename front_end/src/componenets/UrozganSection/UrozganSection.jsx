import React from "react";
import { Box, Typography } from "@mui/material";

const UrozganSection = () => {
  return (
    <Box sx={{ padding: "20px" }}>
      <Typography variant="h4" sx={{ fontWeight: "bold" }}>
        Urozgan
      </Typography>
      <Typography variant="body1" sx={{ marginTop: "10px" }}>
        Urozgan is a province in central Afghanistan, known for its mountainous geography and traditional villages. It is a historically significant region with deep cultural roots.
      </Typography>
      {/* Add more details about Urozgan here */}
    </Box>
  );
};

export default UrozganSection;
