import React, { useState } from 'react';
import {
  AppBar,
  Container,
  Typography,
  IconButton,
  TextField,
  Box,
  Menu,
  MenuItem,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import RoomIcon from '@mui/icons-material/Room';
import CallIcon from '@mui/icons-material/Call';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LanguageIcon from '@mui/icons-material/Language';

const Header = () => {
  const [showSearch, setShowSearch] = useState(true); // State to toggle search input
  const [anchorEl, setAnchorEl] = useState(null); // State for managing language menu

  // Handle language menu open/close
  const handleLanguageMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleLanguageMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: 'white', color: 'black' }}>
      <Container maxWidth="xl">
        <Box
          display="flex"
          justifyContent="flex-end"
          alignItems="center"
          sx={{ paddingY: 2, flexWrap: 'wrap' }} // Padding and wrap on smaller screens
        >
          {/* Contact Info and Location (Visible on larger screens) */}
          <Box
            display={{ xs: 'none', md: 'flex', }} // Hidden on mobile, visible on tablet and desktop
            alignItems="center"
            sx={{ gap: 4 }}
          >
            <Box display="flex" alignItems="center">
              <RoomIcon sx={{ color: '#474747', marginRight: '0.5rem',fontSize:'1.3rem'}} />
              <Typography variant="body2">
                Malik Asghar Square, KBL, AFG
              </Typography>
            </Box>

            <Box display="flex" alignItems="center">
              <CallIcon sx={{ color: '#474747', marginRight: '0.5rem' ,fontSize:'1.3rem'}} />
              <Typography variant="body2" >
                +93 (0) 777 777 777
              </Typography>
            </Box>

            <Box display="flex" alignItems="center">
              <AccessTimeIcon sx={{ color: '#474747', marginRight: '0.5rem',fontSize:'1.3rem' }} />
              <Typography variant="body2" sx={{mr:'1rem',}}>
                8:00AM - 4:00PM
              </Typography>
            </Box>
          </Box>

          {/* Search Bar and Language (Visible on all sizes) */}
          <Box display="flex" alignItems="center" sx={{ gap: 1 }}>
            {showSearch && (
              <TextField
                placeholder="Search…"
                variant="outlined"
                size="small"
                
                sx={{ width: { xs: '12rem', sm: '15rem', md: '14rem' } }} // Responsive width
              />
            )}
            <IconButton
              onClick={() => setShowSearch(!showSearch)} // Toggle search input visibility
              sx={{ color: '#474747' }}
            >
              <SearchIcon  sx={{fontSize:'1.3rem'}}/>
            </IconButton>

            {/* Language Switch Button */}
            <IconButton onClick={handleLanguageMenuClick} sx={{ color: '#474747' }}>
              <LanguageIcon sx={{fontSize:'1.3rem'}}/>
            </IconButton>
            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleLanguageMenuClose}>
              <MenuItem onClick={handleLanguageMenuClose}>English</MenuItem>
              <MenuItem onClick={handleLanguageMenuClose}>Pashto</MenuItem>
              <MenuItem onClick={handleLanguageMenuClose}>Dari</MenuItem>
            </Menu>
          </Box>
        </Box>
      </Container>
    </AppBar>
  );
};

export default Header;
