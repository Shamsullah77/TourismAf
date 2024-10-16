import React from "react";
import { Box, Typography } from "@mui/material";

const WardakSection = () => {
  return (
    <Box sx={{ padding: "20px" }}>
      <Typography variant="h4" sx={{ fontWeight: "bold" }}>
        Wardak
      </Typography>
      <Typography variant="body1" sx={{ marginTop: "10px" }}>
        Wardak Province is known for its scenic valleys and mountainous terrain. It is home to several ancient sites and traditional Afghan culture.
      </Typography>
      {/* Add more details about Wardak here */}
    </Box>
  );
};

export default WardakSection;
