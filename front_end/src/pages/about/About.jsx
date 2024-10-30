import React, { useEffect } from "react";
import { Typography, Box, Container, Grid } from "@mui/material";
import backgroundImage from '../../asset/img/About.jpg';


import profileImage from '../../asset/img/Khairkhah.webp'; // Assuming the image you uploaded is saved in this path.
import { useTheme } from "@emotion/react";

// Full-screen HeroSection Component with advanced background styling
const HeroSection = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%", // Full screen width
        height: "50vh", // Full screen height
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        position: "relative",
        backgroundAttachment: "fixed",
        [theme.breakpoints.down("md")]: {
          height: "70vh", // Reduced height for smaller screens
        },
      }}
    >
      <Container
        sx={{
          textAlign: "left",
          backgroundColor: "rgba(0, 0, 0, 0.2)",
          padding: "40px",
          borderRadius: "6px",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontWeight: "bold",
            letterSpacing: "0.05em",
            fontSize: "3rem",
            [theme.breakpoints.down("md")]: {
              fontSize: "2.5rem",
            },
          }}
        >
           About Us
        </Typography>
        <Typography
          variant="h5"
          sx={{
            marginTop: "1rem",
            fontSize: "1.5rem",
            [theme.breakpoints.down("md")]: {
              fontSize: "1.25rem",
            },
          }}
        >
          We value communication and transparency.
        </Typography>
      </Container>
    </Box>
  );
};

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <HeroSection/>

      {/* Statement Section */}
      <Container maxWidth="xl" sx={{ padding: "3rem 0" }}>
        <Grid container spacing={10}>
          {/* Image Section (Now on the Left) */}
          <Grid item xs={12} md={4}>
            <Box
              component="img"
              src={profileImage} // Replace with actual image source
              alt="Mullah Khairullah Khairkhwa"
              sx={{
                width: "100%",
                borderRadius: "8px",
                boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
              }}
            />
          </Grid>

          {/* Text Section (Now on the Right) */}
          <Grid item xs={12} md={8}>
            <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
              Statement Tourism Directorate
            </Typography>
            <Typography variant="body1" sx={{ paddingTop:'3rem' }}>
              In the name of God, the most gracious, the most merciful
            </Typography>
            <Typography variant="body1" sx={{ marginTop: "1rem", lineHeight:'2rem'}}>
              "Dear countrymen! The leadership of the Ministry of Information and Culture is committed to cultural development, quality publications, the development and progress of the tourism industry, and the balanced promotion of youth. The recent reforms in this ministry show our strong will to achieve these goals."
            </Typography>
            <Typography variant="body1" sx={{ pt: "2rem", fontWeight: 'bold' }}>
              Mullah Qudratullah Jamal <br />
              Acting Corporation of Culture & Information <br />
              September 9, 2021 - During His Introduction Ceremony
            </Typography>
          </Grid>
        </Grid>

      </Container>
    </>
  );
};

export default About;