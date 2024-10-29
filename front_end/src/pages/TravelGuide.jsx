

import React, { useState } from "react";
import { Box, Typography, Container, Grid, Paper } from "@mui/material";
import backgroundImage from "../asset/img/travel4.jpeg";
import afg from "../asset/img/bus8.jpeg";
import kabul from "../asset/img/travel1.jpeg";
import afg3 from "../asset/img/taxi.jpeg";
import afg2 from "../asset/img/plane.jpeg";
import image1 from "../asset/img/a2.jpeg";
import image2 from "../asset/img/h2.jpeg";
import image3 from "../asset/img/m1.jpeg";
import image4 from "../asset/img/values.jpg";
import image6 from "../asset/img/3.webp";
import image8 from "../asset/img/vission.jpeg";

const HeroSection = () => (
  <Box
    sx={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundPosition: "left",
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
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        padding: { xs: "20px", md: "40px" },
        borderRadius: "12px",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          fontSize: { xs: "1rem", md: "2rem" },
          letterSpacing: "0.05em",
        }}
      >
        Afghanistan Travel Guide
      </Typography>
      <Typography
        variant="h6"
        sx={{ marginTop: "1rem", fontSize: { xs: "1.2rem", md: "1.5rem" } }}
      >
        Afghanistan is a country rich in history, culture, and natural beauty.
        However, it is essential to be aware of the current security situation
        and travel advisories
      </Typography>
    </Container>
  </Box>
);

const InfoSection = () => (
  <Grid
    container
    spacing={0}
    margin="4rem 0"
    sx={{ width: "100%", padding: 0 }}
  >
    <Grid item xs={12} md={6}>
      <Box sx={{ paddingRight: { xs: 0, md: "20px" } }}>
        {" "}
        {/* Added right padding for spacing */}
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            fontSize: { xs: "1.5rem", md: "2rem" },
            color: "#005a69",
          }}
        >
          Travel Guide to Afghanistan
        </Typography>
        <Typography
          variant="body1"
          sx={{
            marginTop: "1rem",
            fontSize: { xs: "1rem", md: "1.25rem" },
            textAlign: "justify",
          }}
        >
          Afghanistan is a country of stunning landscapes and rich cultural
          heritage. Here’s a concise travel guide to help you explore this
          remarkable nation. Visa Requirements: Check the latest visa
          regulations before planning your trip. Safety First: Stay informed
          about security updates and travel advisories. Cultural Awareness:
          Respect local customs and dress modestly, especially in rural areas.
          Key Destinations: Explore Kabul, Bamiyan, Herat, and Mazar-i-Sharif.
          Kabul: Visit the National Museum and vibrant bazaars for a taste of
          local life. Bamiyan: Discover the stunning valleys and ancient
          Buddhist sites. Herat: Admire the beautiful architecture of the Herat
          Citadel and Jami Mosque. Mazar-i-Sharif: Experience the stunning Blue
          Mosque, a significant pilgrimage site.
        </Typography>
      </Box>
    </Grid>
    <Grid item xs={12} md={6}>
      <Box
        sx={{
          height: "100%",
          width: "100%",
          backgroundImage: `url(${kabul})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          borderRadius: "4px",
        }}
      />
    </Grid>
  </Grid>
);

const ImageSection = () => (
  <Box margin="4rem 0">
    <Typography
      variant="h4"
      sx={{
        textAlign: "left",
        fontWeight: "bold",
        fontSize: { xs: "1.5rem", md: "2rem" },
        marginBottom: "1rem",
        color: "#005a69",
      }}
    >
      Transportation Afghanistan
    </Typography>
    <Box
      sx={{
        width: { xs: "100%", md: "70%" },
        // margin: "0 auto",
        padding: "0.5rem",
        textAlign: "justify",
      }}
    >
      <Typography
        variant="body1"
        sx={{
          marginBottom: "2rem",
          fontSize: { xs: "1rem", md: "1.25rem" },
        }}
      >
        Transportation in Afghanistan encompasses various modes, reflecting the
        country’s diverse geography and infrastructure challenges. Here’s a
        general overview of the key transportation options available. Road
        Travel Major highways connect cities, such as the Kabul-Kandahar and
        Kabul-Herat roads. Road conditions can be poorly maintained, with
        significant potholes and unpaved areas, which may affect travel times.
        Public Transport Long-distance bus services operate between key cities,
        providing a budget-friendly option for travelers.
      </Typography>
    </Box>
    <Grid container spacing={2}>
      <Grid item xs={12} md={4}>
        <Box
          sx={{
            height: "300px",
            backgroundImage: `url(${afg})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            borderRadius: "4px",
          }}
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <Box
          sx={{
            height: "300px",
            backgroundImage: `url(${afg3})`, // Second image
            backgroundPosition: "center",
            backgroundSize: "cover",
            borderRadius: "4px",
          }}
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <Box
          sx={{
            height: "300px",
            backgroundImage: `url(${afg2})`, // Third image (you can replace with another image)
            backgroundPosition: "center",
            backgroundSize: "cover",
            borderRadius: "4px",
          }}
        />
      </Grid>
    </Grid>
  </Box>
);

const museumData = [
  {
    name: "Culture Art",
    image: image1,
    description:
      "Afghanistan boasts a rich cultural heritage that reflects its diverse history and ethnic tapestry. The art of Afghani",
  },
  {
    name: "Our Hertage Site ",
    image: image2,
    description:
      "Afghanistan is home to several remarkable heritage sites that reflect its rich history and diverse cultural heritage. .",
  },
  {
    name: "Our Museum",
    image: image3,
    description:
      "Afghanistan has several museums that showcase its rich cultural heritage, historical artifacts, . ",
  },
  {
    name: "Our Values",
    image: image4,
    description:
      "Afghans are known for their warm hospitality. Guests are treated with great respect, and it is customary to offer food.",
  },
  {
    name: "Our Province",
    image: image6,
    description:
      "Afghanistan is divided into 34 provinces, each with its own unique culture, history, and geography. Here’s an overview .",
  },

  {
    name: "Our Vission",
    image: image8,
    description:
      "When discussing a vision for Afghanistan, it is important to consider the aspirations of its people, the potential for.",
  },
];

const MuseumCard = ({ museum, index, hoveredIndex, setHoveredIndex }) => (
  <Grid item xs={12} sm={6} md={3} lg={2}>
    {" "}
    {/* Adjusted to lg={2} to fit more cards in a row */}
    <Paper
      elevation={6}
      sx={{
        borderRadius: "10px",
        overflow: "hidden",
        height: "250px", // Maintain reduced height
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
          padding: "10px",
          transition: "background-color 0.3s ease",
        }}
      >
        <Typography
          variant="h6"
          textAlign={"center"}
          sx={{ fontWeight: "bold", fontSize: { xs: "1rem", md: "1.2rem" } }}
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
      Quaick Access
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

const TravelGuide = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  return (
    <>
      <HeroSection />
      <Container maxWidth="xl">
        <InfoSection />
        <ImageSection />

        <TopMuseumsSection
          hoveredIndex={hoveredIndex}
          setHoveredIndex={setHoveredIndex}
        />
      </Container>
    </>
  );
};

export default TravelGuide;