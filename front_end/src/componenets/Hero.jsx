import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { makeStyles } from '@mui/styles';
import video from '../asset/video/Ladakh-uhd_3840_2160_60fps.mp4';

// Custom styles using MUI's makeStyles
const useStyles = makeStyles((theme) => ({
  heroContainer: {
    position: 'relative',
    height: '100vh', // Full height for better responsiveness
    width: '100%',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      height: '70vh', // Adjust height for smaller devices
    },
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
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark overlay for text readability
    zIndex: 1,
  },
  content: {
    position: 'relative',
    zIndex: 2,
    color: '#fff',
    textAlign: 'center',
    padding: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(4),
    },
  },
  title: {
    fontSize: 'clamp(2rem, 6vw, 4rem)', // Responsive font size for title
    fontWeight: 'bold',
    [theme.breakpoints.down('sm')]: {
      fontSize: '2rem',
    },
  },
  subtitle: {
    fontSize: 'clamp(1rem, 3vw, 1.5rem)', // Responsive font size for subtitle
    marginBottom: theme.spacing(3),
    [theme.breakpoints.down('sm')]: {
      fontSize: '1rem',
    },
  },
  button: {
    fontSize: '1.2rem',
    padding: theme.spacing(1, 3),
    [theme.breakpoints.down('sm')]: {
      fontSize: '1rem',
      padding: theme.spacing(0.5, 2),
    },
  },
}));

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
        <Typography variant="h2" component="h1" className={classes.title} gutterBottom>
          Explore the Beauty of Afghanistan
        </Typography>
        <Typography variant="h6" component="p" className={classes.subtitle} gutterBottom>
          Discover the cultural heritage, natural wonders,historical monuments and rich history of Afghanistan.
        </Typography>
        <Button variant="contained" color="primary" className={classes.button}>
          Start Your Journey
        </Button>
      </Container>
    </Box>
  );
};

export default Hero;
