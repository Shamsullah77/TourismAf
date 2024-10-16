import React, { useState, useEffect } from "react";
import { Box, Grid, Typography, Paper, Container } from "@mui/material";
import image1 from "../asset/img/Museum1.jpeg";
import image2 from "../asset/img/Museum2.jpeg";
import image3 from "../asset/img/Museum3.jpeg";
import image4 from "../asset/img/Museum4.jpeg";
import backgroundImage from "../asset/img/Museum.jpg";

// Data for museums
const museumData = [
  {
    name: "National Museum",
    image: image1,
    description: "A rich collection of Afghan history and culture.",
  },
  {
    name: "Bamiyan Museum",
    image: image2,
    description: "Home to the famous Buddhas of Bamiyan.",
  },
  {
    name: "Kabul Museum",
    image: image3,
    description: "Showcases artifacts from Afghanistan's past.",
  },
  {
    name: "Herat Museum",
    image: image4,
    description: "Features a variety of historical artifacts.",
  },
];

const quirkyMuseums = [
  {
    name: "Art Kabul",
    image: image1,
    description: "Focuses on modern Afghan art and artists.",
  },
  {
    name: "Art Gallery Kabul",
    image: image2,
    description: "Features a collection of Afghan art.",
  },
  {
    name: "Museum of Kabul",
    image: image3,
    description: "Focuses on Afghanistan's natural history.",
  },
  {
    name: "Museum of Archaeology",
    image: image4,
    description: "Primarily focuses on archaeology.",
  },
  {
    name: "Silk Road Museum",
    image: backgroundImage,
    description: "Dedicated to the rich history of trade along the Silk.",
  },
  {
    name: "Museum of Afghan",
    image: image1,
    description: "Focuses on the contributions and struggles.",
  },
];

// HeroSection Component
const HeroSection = () => (
  <Box
    sx={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: "cover",
      height: { xs: "70vh", md: "50vh" },
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "white",
      position: "relative",
      backgroundAttachment: "fixed",
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
          fontSize: { xs: "2.5rem", md: "3rem" },
        }}
      >
        Museums in Afghanistan 
      </Typography>
      <Typography
        variant="h5"
        sx={{ marginTop: "1rem", fontSize: { xs: "1.25rem", md: "1.5rem" } }}
      >
        Explore Afghanistan's Museums Service Providers for Convenient
        Information
      </Typography>
    </Container>
  </Box>
);

// MuseumCard Component
const MuseumCard = ({ museum, index, hoveredIndex, setHoveredIndex }) => (
  <Grid item xs={12} sm={6} md={3} key={index}>
    <Paper
      elevation={3}
      sx={{
        borderRadius: "8px",
        overflow: "hidden",
        position: "relative",
        height: "300px",
      }}
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      <img
        src={museum.image}
        alt={museum.name}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          position: "absolute",
          top: 0,
          left: 0,
          transition: "transform 0.2s ease",
        }}
        className="hover-image"
      />
      <Box
        sx={{
          position: "absolute",
          bottom: hoveredIndex === index ? "10%" : "0",
          left: 0,
          right: 0,
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          padding: "10px",
          textAlign: "center",
          color: "white",
          transition: "all 0.4s ease",
          boxShadow:'rgba(0,0,0,0.7)'
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          {museum.name}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            maxHeight: hoveredIndex === index ? "60px" : "0",
            overflow: "hidden",
            transition: "max-height 0.4s ease",
          }}
        >
          {museum.description}
        </Typography>
      </Box>
    </Paper>
  </Grid>
);

// TopMuseumsSection Component
const TopMuseumsSection = ({ hoveredIndex, setHoveredIndex }) => (
  <Box sx={{ padding: "60px 0" }}>
    <Typography
      variant="h5"
      align="left"
      sx={{ marginBottom: "20px", color: "black", fontWeight: "bold" }}
    >
      Top Museums of Afghanistan
    </Typography>
    <Grid container spacing={2}>
      {museumData.map((museum, index) => (
        <MuseumCard
          key={index}
          museum={museum}
          index={index}
          hoveredIndex={hoveredIndex}
          setHoveredIndex={setHoveredIndex}
        />
      ))}
    </Grid>
  </Box>
);

// InformationSection Component
const InformationSection = () => (
  <Box
    sx={{
      padding: "40px",
      margin: "60px 0",
      border: "2px solid red",
      borderRadius: "60px 0 60px 0px",
      maxWidth: "1000px",
      backgroundColor: "white",
      boxShadow: 2,
    }}
  >
    <Typography
      variant="body1"
      sx={{ lineHeight: "3rem", fontSize: "1.5rem" }}
    >
      Be amazed by iconic artifacts, vast permanent collections, and exciting
      exhibitions at the best museums in Afghanistan. Browse free museums such
      as the National Museum of Afghanistan, Bamiyan Museum, and Kabul Museum,
      or delve into the country's rich history and culture through their diverse
      collections.
    </Typography>
  </Box>
);

// QuirkyMuseumsSection Component
const QuirkyMuseumsSection = ({ hoveredIndex, setHoveredIndex }) => (
  <Box sx={{ padding: "20px 0" }}>
    <Typography
      variant="h5"
      align="left"
      sx={{
        marginBottom: "20px",
        color: "black",
        fontWeight: "bold",
        fontSize: "1.5rem",
      }}
    >
      Quirky Museums
    </Typography>
    <Grid container spacing={6}>
      {quirkyMuseums.map((museum, index) => (
        <Grid item xs={12} sm={6} md={4} lg={2} key={index}>
          <Paper
            elevation={3}
            sx={{
              overflow: "hidden",
              textAlign: "center",
              marginBottom: "20px",
              position: "relative",
              height: "200px",
            }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <img
              src={museum.image}
              alt={museum.name}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transition: "transform 0.3s ease",
              }}
              className="hover-image"
            />
            <Typography
              variant="h6"
              sx={{
                position: "absolute",
                bottom: "40px",
                left: 0,
                right: 0,
                color: "white",
                padding: "10px",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              {museum.name}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                color: "white",
                backgroundColor: "rgba(0, 0, 0, 0.7)",
                padding: "5px",
                textAlign: "center",
              }}
            >
              {museum.description}
            </Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  </Box>
);

// Main Museum Component
const Museum = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <>
      <HeroSection />
      <Container maxWidth="xl">
        <TopMuseumsSection
          hoveredIndex={hoveredIndex}
          setHoveredIndex={setHoveredIndex}
        />
        <style>{`.hover-image:hover { transform: scale(1.1); z-index: 1; }`}</style>
        <InformationSection />
        <QuirkyMuseumsSection
          hoveredIndex={hoveredIndex}
          setHoveredIndex={setHoveredIndex}
        />
      </Container>
    </>
  );
};

export default Museum;
