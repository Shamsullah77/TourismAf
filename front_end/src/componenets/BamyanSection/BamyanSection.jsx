import React from "react";
import { Box, Typography } from "@mui/material";

const BamyanSection = () => {
  return (
    <Box sx={{ padding: "20px" }}>
      <Typography variant="h4" sx={{ fontWeight: "bold" }}>
        Bamyan
      </Typography>
      <Typography variant="body1" sx={{ marginTop: "10px" }}>
        Bamyan is famous for its monumental statues of Buddha carved into the cliffs, although they were destroyed in 2001. It is also known for its natural beauty and being one of the safer areas in Afghanistan.
      </Typography>
      {/* Add more details about Bamyan here */}
    </Box>
  );
};

export default BamyanSection;
