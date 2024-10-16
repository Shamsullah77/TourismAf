import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { makeStyles } from '@mui/styles';
import video from '../asset/video/Ladakh-uhd_3840_2160_60fps.mp4'
// Custom styles using MUI's makeStyles
const useStyles = makeStyles({
  heroContainer: {
    position: 'relative',
    height: '80vh',
    width: '100%',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heroVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    zIndex: -1,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',  // Dark overlay
    zIndex: 1,
  },
  content: {
    position: 'relative',
    zIndex: 2,
    color: '#fff',
    textAlign: 'center',
  },
});

const Hero = () => {
  const classes = useStyles();

  return (
    <Box className={classes.heroContainer}>
      <video className={classes.heroVideo} autoPlay loop muted>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Box className={classes.overlay}></Box>
      <Container maxWidth="md" className={classes.content}>
        <Typography variant="h2" component="h1" gutterBottom>
          Explore the Beauty of Afghanistan
        </Typography>
        <Typography variant="h6" component="p" gutterBottom>
          Discover the cultural heritage, natural wonders, and rich history of Afghanistan.
        </Typography>
        {/* <Button variant="contained" color="primary" size="large">
          Start Your Journey
        </Button> */}
      </Container>
    </Box>
  );
}

export default Hero;
