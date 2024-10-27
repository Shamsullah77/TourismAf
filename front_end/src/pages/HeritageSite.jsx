import React, { useState, useEffect } from "react";
import {
  Box,
  Grid,
  Typography,
  Paper,
  Container,
  ImageListItem,
} from "@mui/material";

import image1 from "../asset/img/ghazni.jpg";
import image2 from "../asset/img/MunarJam.jpg";
import image3 from "../asset/img/Acco3.jpg";
import image4 from "../asset/img/Bamyan1.jpeg";

// import image9 from "../asset/img/h5.jpeg";
import image10 from "../asset/img/Acco8.jpeg";
import image11 from "../asset/img/MunarJam.jpg";
import image12 from "../asset/img/Acco9.jpeg";

import backgroundImage from "../asset/img/bot.jpg";


const museumData = [
  {
    name: "Ghazni Monar",
    image: image1,
    description:
      "Afghan Books is an initiative aimed at promoting Afghan literature and authors, providing access to a range of texts that reflect the culture.",
  },
  {
    name: "Ghor monar ",
    image: image2,
    description:
      "The Afghan Digital Library is a project aimed at preserving and providing access to a wide range of Afghan literature, historical documents.",
  },
  {
    name: "Parwan",
    image: image3,
    description:
      "Read Afghanistan is an initiative focused on promoting reading and literacy within Afghanistan. It aims to foster a culture of reading.",
  },
  {
    name: "Bamyan",
    image: image4,
    description:
      "The Open Library of Afghanistan is an initiative designed to provide free access to a wide array of books and educational resources.",
  },
];

const HeroSection = () => (
  <Box
    sx={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundPosition: "right",
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
        backgroundColor: "rgba(0, 0, 0, 0.4)",
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
        Discover Afghanistan Heritage Sites
      </Typography>
      <Typography
        variant="h6"
        sx={{ marginTop: "1rem", fontSize: { xs: "1.2rem", md: "1.5rem" } }}
      >
        Heritage Site initiative aimed at preserving and promoting Afghanistan's
        rich Places
      </Typography>
    </Container>
  </Box>
);

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
      Top Heritage Site of Afghanistan
    </Typography>
    <Grid container spacing={4}>
      {museumData.map((museum, index) => (
        <MuseumCard
          image={`url=($image)`}
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






const TextSection = () => (
  <Grid container maxWidth={"xl"} sx={{ marginBottom: "2rem", justifyContent: "center", padding: "2rem", position: "relative", backgroundColor: "#f0f0f0" }}>
    {/* Left side blur */}
    {["left", "right"].map((side) => (
      <Box
        key={side}
        sx={{
          position: "absolute",
          top: 0,
          [side]: 0,
          bottom: 0,
          width: "15%",
          background: `linear-gradient(to ${side === "left" ? "right" : "left"}, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0))`,
          filter: "blur(15px)",
          pointerEvents: "none",
        }}
      />
    ))}
    <Grid item xs={12} md={8} lg={9}>
      <Box sx={{ borderRadius: "10px", textAlign: "center", position: "relative", zIndex: 1 }}>
        <Typography variant="h5" sx={{ fontWeight: "bold", marginBottom: "1rem", color: "#004d5b" }}>
        Heritage Site of Afghanistan
        </Typography>
        <Typography variant="body1" sx={{ lineHeight: 1.8, color: "#333", textAlign: "justify", fontSize: "1.1rem" }}>
        The Heritage Site of Afghanistan is a vital initiative dedicated to
          preserving and promoting the rich cultural and historical legacy of
          the nation. It provides access to a vast array of Afghan heritage,
          including ancient sites, artifacts, and traditional practices,
          ensuring that the stories and achievements of Afghan people are
          recognized and celebrated. This initiative enables visitors from
          around the world to explore Afghanistan’s unique culture and history
          from the comfort of their homes. By safeguarding these invaluable
          cultural treasures, the Heritage Site not only protects them for
          future generations but also fosters a deeper understanding and
          appreciation of Afghanistan’s diverse heritage. Whether you are
          interested in ancient architecture, traditional arts, or historical
          narratives, this platform serves as a comprehensive resource for
          anyone eager to learn about the vibrant identity that shapes
          Afghanistan today.        </Typography>
      </Box>
    </Grid>
  </Grid>
);





const TwoRowImageList = () => {
  const itemData = [
    { img: image1, title: "Image S2" },
    { img: image10, title: "Image S1" },
    { img: image11, title: "Image S2" },
    { img: image12, title: "Image S4" },
    { img: image2, title: "Image L1" },
    { img: image10, title: "Image L4" },
    { img: image11, title: "Image L5" },
    { img: image12, title: "Image L2" },
  ];

  return (
    <Grid container spacing={2} sx={{ marginBottom: "2rem" }}>
      {itemData.map((item, index) => (
        <Grid item xs={3} key={index}>
          <ImageListItem
            sx={{
              position: "relative",
              overflow: "hidden",
              height: "250px",
              borderRadius: "8px",
              transition: "transform 0.3s ease",
              "&:hover": {
                transform: "scale(1.05)", // Scale image on hover
              },
            }}
          >
            <img
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=248&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
              style={{
                width: "100%",
                height: "250px",
                objectFit: "cover",
                transition: "transform 0.3s ease",
              }}
            />
            <Typography
              variant="h6"
              sx={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                backgroundColor: "rgba(0, 0, 0, 0.7)",
                color: "white",
                textAlign: "center",
                padding: "8px 0",
                transition: "background-color 0.3s ease",
              }}
            >
              {item.title}
            </Typography>
          </ImageListItem>
        </Grid>
      ))}
    </Grid>
  );
};

const HeritageSite = () => {
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
        <TextSection />
        <TwoRowImageList />
      </Container>
    </>
  );
};

export default HeritageSite;