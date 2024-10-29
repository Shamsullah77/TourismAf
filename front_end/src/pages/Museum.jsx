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
import image1 from "../asset/img/مجسمه کنیشکا.jpg";
import image2 from "../asset/img/Acco2.jpg";
import image3 from "../asset/img/Acco3.jpg";
import image4 from "../asset/img/Acco5.jpg";

import image6 from "../asset/img/کتبه رباتک.jpg";
import image7 from "../asset/img/سنگ قبر.jpg";
import image8 from "../asset/img/04.1.png";
import image9 from "../asset/img/1.jpg";
import backgroundImage from "../asset/img/Museum.jpg";

// Data for museums
const museumData = [
  {
    name: "National Museum",
    image: image1,
    description:
      "National Museum of Afghanistan is located opposite to Dar-ul-Aman palace in southwest of Kabul. The current building of national museum was inaugurated in 1919 for the first time.",
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
        backgroundColor: "rgba(0, 0, 0, 0.3)",
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
            
                  position: 'relative',
           
                  '&::after': {
                    content: '""',
                    display: 'block',
                    width: '40%',
                    height: '1px',
                    backgroundColor: '#009fbb',
                    margin: '0.5rem 0', // center the line below the text
                  },
                }}

         
            >
              National Museum
            </Typography>
            <Typography
              variant="body1"
              sx={{ lineHeight: 1.6, textAlign: "justify", mb: 2 ,
                position: 'relative',
                
                '&::after': {
                  content: '""',
                  display: 'block',
                  width: '100%',
                  height: '2px',
                  backgroundColor: "",
                  margin: '0.5rem auto 0', // center the line below the text
                },
               }}
            >
             National Museum of Afghanistan is located opposite to Dar-ul-Aman palace in southwest of Kabul. The current building of national museum was inaugurated in 1919 for the first time.

Thousands of relics antiquities are registered with national museum. Previously, Alghanistan's National Museum had more than one hundred thousand antiquities, but unfortunately more than 70 percent of them were robbed during the civil war.

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
              <strong>Exhibits:</strong> The two story building of national museum was inaugurated back in 2004 in Kabul Antiquities and archaeological remains in national museum are divided into several groups and categories such as Ethnographic Exhibition, Islamic Period Exhibition, Mis Aynak Exhibition, Buddhik Aritiquates Exhibition, and Bakhtar Treasury Exhibition. Additionally, a great number of Antiquities have been exhibited in several provincial museums and there is a branch of Afghanistan's national museum in presidential palace as well, where a number of high valued Antiquities are stored.
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
              <strong>Visiting Information:</strong> The best of national museum's antiquities are that of Tila Tapa's (Gold Hill) which have been exhibited in several countries of the world.
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