import React, { useState, useEffect } from "react";
import {
  Box,
  Grid,
  Typography,
  Paper,
  Container,
  ImageListItem,
} from "@mui/material";

const HeroSection = ({ backgroundImage, title, subtitle }) => (
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
        {title}
      </Typography>
      <Typography
        variant="h6"
        sx={{ marginTop: "1rem", fontSize: { xs: "1.2rem", md: "1.5rem" } }}
      >
        {subtitle}
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

const TopMuseumsSection = ({
  museums,
  hoveredIndex,
  setHoveredIndex,
  sectionTitle,
}) => (
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
      {sectionTitle} {/* Use the sectionTitle prop here */}
    </Typography>
    <Grid container spacing={4}>
      {museums.map((museum, index) => (
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

const TextSection = ({ title, content }) => (
  <Grid
    container
    maxWidth={"xl"}
    sx={{
      marginBottom: "2rem",
      justifyContent: "center",
      padding: "2rem",
      position: "relative",
      backgroundColor: "#f0f0f0",
    }}
  >
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
          background: `linear-gradient(to ${
            side === "left" ? "right" : "left"
          }, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0))`,
          filter: "blur(15px)",
          pointerEvents: "none",
        }}
      />
    ))}
    <Grid item xs={12} md={8} lg={9}>
      <Box
        sx={{
          borderRadius: "10px",
          textAlign: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        <Typography
          variant="h5"
          sx={{ fontWeight: "bold", marginBottom: "1rem", color: "#004d5b" }}
        >
          {title} {/* Customizable title */}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            lineHeight: 1.8,
            color: "#333",
            textAlign: "justify",
            fontSize: "1.1rem",
          }}
        >
          {content} {/* Customizable content */}
        </Typography>
      </Box>
    </Grid>
  </Grid>
);

const TwoRowImageList = ({ itemData }) => (
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
              transform: "scale(1.05)",
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
            }}
          >
            {item.title}
          </Typography>
        </ImageListItem>
      </Grid>
    ))}
  </Grid>
);

const AfghanistanCulture = ({
  heroImage,
  heroTitle,
  heroSubtitle,
  museums,
  textTitle,
  textContent,
  imagesData,
  sectionTitle, // New prop for section title
}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <>
      <HeroSection
        backgroundImage={heroImage}
        title={heroTitle}
        subtitle={heroSubtitle}
      />
      <Container maxWidth="xl">
        <TopMuseumsSection
          museums={museums}
          hoveredIndex={hoveredIndex}
          setHoveredIndex={setHoveredIndex}
          sectionTitle={sectionTitle} // Pass section title
        />
        <TextSection title={textTitle} content={textContent} />
        <TwoRowImageList itemData={imagesData} />
      </Container>
    </>
  );
};

export default AfghanistanCulture;