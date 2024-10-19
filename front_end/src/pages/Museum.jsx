import React, { useState, useEffect } from "react";
import {
  Box,
  Grid,
  Typography,
  Paper,
  Container,
  Card,
  CardMedia,
} from "@mui/material";
import image1 from "../asset/img/Acco1.jpg";
import image2 from "../asset/img/Acco2.jpg";
import image3 from "../asset/img/Acco3.jpg";
import image4 from "../asset/img/Acco5.jpg";

import image6 from "../asset/img/Acco6.jpg";
import image7 from "../asset/img/Acco7.jpeg";
import image8 from "../asset/img/Acco8.jpeg";
import image9 from "../asset/img/Acco9.jpeg";
import backgroundImage from "../asset/img/Museum.jpg";

// Data for museums
const museumData = [
  {
    name: "National Museum",
    image: image1,
    description:
      "A rich collection of Afghan history and culture. Visitors can explore artifacts from ancient to modern history.",
  },
  {
    name: "Bamiyan Museum",
    image: image2,
    description:
      "Home to the famous Buddhas of Bamiyan. Experience the cultural significance and art of the region modern history.",
  },
  {
    name: "Kabul Museum",
    image: image3,
    description:
      "Showcases artifacts from Afghanistan's past. An essential stop for understanding the nation's rich heritage modern history.",
  },
  {
    name: "Herat Museum",
    image: image4,
    description:
      "Features a variety of historical artifacts. A great place to learn about Herat's historical importance modern history.",
  },
];
const SmallImageCard = ({ image, onClick }) => (
  <Card
    sx={{
      maxWidth: "90%",
      height: "auto",
      cursor: "pointer",
      marginBottom: "20px", // Adjust margin as needed
      // marginRight: "10px", // Add right margin for spacing
    }}
    onClick={() => onClick(image.src)}
  >
    <CardMedia
      component="img"
      height="80"
      image={image.src}
      alt={image.alt}
      sx={{ objectFit: "cover" }}
    />
  </Card>
);

const LargeImageCard = ({ image }) => (
  <Card sx={{ width: "450px", maxWidth: "600px", height: "95%" }}>
    <CardMedia
      component="img"
      height="100%"
      image={image.src}
      alt={image.alt}
      sx={{ objectFit: "cover" }}
    />
  </Card>
);

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
      backgroundAttachment: "fixed",
    }}
  >
    <Container
      sx={{
        textAlign: "center",
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        padding: { xs: "20px", md: "40px" },
        borderRadius: "12px",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontWeight: "bold",
          fontSize: { xs: "2rem", md: "3rem" },
          letterSpacing: "0.05em",
        }}
      >
        Discover Afghanistan's Rich Culture
      </Typography>
      <Typography
        variant="h6"
        sx={{ marginTop: "1rem", fontSize: { xs: "1.2rem", md: "1.5rem" } }}
      >
        Explore the country's premier museums and cultural heritage.
      </Typography>
    </Container>
  </Box>
);

// MuseumCard Component
const MuseumCard = ({ museum, index, hoveredIndex, setHoveredIndex }) => (
  <Grid item xs={12} sm={6} md={3}>
    <Paper
      elevation={6}
      sx={{
        borderRadius: "10px",
        overflow: "hidden",
        height: "300px",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        boxShadow:
          hoveredIndex === index
            ? "0 8px 30px rgba(0, 0, 0, 0.5)"
            : "0 4px 15px rgba(0, 0, 0, 0.3)",
        transform: hoveredIndex === index ? "scale(1.05)" : "scale(1)",
        position: "relative",
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
          transform: hoveredIndex === index ? "scale(1.1)" : "scale(1)",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor:
            hoveredIndex === index
              ? "rgba(0, 0, 0, 0.6)"
              : "rgba(0, 0, 0, 0.3)",
          color: "white",
          padding: "15px",
          transition: "background-color 0.3s ease",
        }}
      >
        <Typography
          variant="h6"
          textAlign={"center"}
          sx={{ fontWeight: "bold" }}
        >
          {museum.name}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            marginTop: "5px",
            opacity: hoveredIndex === index ? 1 : 0,
            maxHeight: hoveredIndex === index ? "100px" : "0",
            transition: "opacity 0.3s ease, max-height 0.3s ease",
            overflow: "hidden",
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
      variant="h4"
      sx={{
        marginBottom: "3rem",
        fontWeight: "bold",
        textAlign: "center",
        color: "#005a69",
      }}
    >
      Top Museums of Afghanistan
    </Typography>
    <Grid container spacing={4}>
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

// ImageCard Component
const KabulMuseum = () => {
  const [currentImage, setCurrentImage] = useState(image7); // Default large image
  const smallImages = [
    { src: image6 },
    { src: image7 },
    { src: image8 },
    { src: image9 },
  ];

  return (
    <Box sx={{ padding: "0", borderRadius: "10px" }}>
      <Grid
        container
        spacing={6}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"flex-start"}
        marginBottom={4}
      >
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              backgroundColor: "white",
              // padding: 3,
              borderRadius: "8px",
              // boxShadow: 1,
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                color: "#333",
                fontSize: { xs: "1.5rem" },
                mb: 2,
              }}
            >
              Kabul Museum
            </Typography>
            <Typography
              variant="body1"
              sx={{ lineHeight: 1.6, textAlign: "justify", mb: 2 }}
            >
              The Kabul Museum, also known as the National Museum of
              Afghanistan, houses a vast collection of artifacts that represent
              the rich cultural heritage of Afghanistan. Established in the
              1920s, it showcases items from various historical periods,
              including the ancient Silk Road.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mb: 1,
                lineHeight: 1.6,
                // fontWeight: "bold",
                textAlign: "justify",
              }}
            >
              <strong>Exhibits:</strong> The museum features a range of
              exhibits, including ancient relics, Islamic art, and ethnographic
              items that reflect the diverse cultures of Afghanistan.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mb: 1,
                lineHeight: 1.6,
                // fontWeight: "bold",
                textAlign: "justify",
              }}
            >
              <strong>Visiting Information:</strong> The museum is open to
              visitors and provides guided tours to help understand the
              significance of its collections. It is recommended to check the
              museum's schedule for special exhibitions and events.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mb: 1,
                lineHeight: 1.6,
                // fontWeight: "bold",
                textAlign: "justify",
              }}
            >
              <strong>History:</strong> The museum has faced numerous
              challenges, including looting during the civil war. Many artifacts
              were lost, but efforts have been made to recover and restore the
              collection, making it a symbol of resilience.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "stretch", // Ensures both columns have equal height
              gap: 2,
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column", flex: 1 }}>
              {smallImages.map((image, index) => (
                <SmallImageCard
                  image={image}
                  key={index}
                  onClick={setCurrentImage} // Pass the setter function
                />
              ))}
            </Box>
            <Box sx={{ flex: 1 }}>
              <LargeImageCard image={{ src: currentImage }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

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
        <KabulMuseum />
      </Container>
    </>
  );
};

export default Museum;