import React from 'react';
import { Box, Typography, Avatar } from '@mui/material';
import LocationCityIcon from '@mui/icons-material/LocationCity'; // Example icon, you can change it
import './CircularMenu.css';  // Import your custom CSS

const CircularMenu = () => {
  return (
    <Box className="circular-menu">
      {/* Highlighted Item */}
      <Box className="menu-item highlighted">
        <Avatar className="icon-avatar">
          <LocationCityIcon className="icon" />
        </Avatar>
        <Typography variant="h6" className="highlighted-text">
          Heritage Sites
        </Typography>
      </Box>
      
      {/* Other Menu Items */}
      <Box className="menu-item">
        <Typography variant="h6" className="menu-text">
          Museums
        </Typography>
      </Box>

      <Box className="menu-item">
        <Typography variant="h6" className="menu-text">
          Libraries
        </Typography>
      </Box>

      <Box className="menu-item">
        <Typography variant="h6" className="menu-text">
          Cultural Arts & Centres
        </Typography>
      </Box>
    </Box>
  );
};

export default CircularMenu;
