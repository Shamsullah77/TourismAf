import React, { useState } from "react"; 
import {
  Box,
  Typography,
  Container,
  Grid,
  Paper,
  CardMedia,
  Card,
  CardContent,
} from "@mui/material";

import image1 from "../asset/img/c1.jpeg";
import image2 from "../asset/img/c2.jpeg";
import image3 from "../asset/img/c3.jpeg";
import image4 from "../asset/img/c4.jpeg";
import image5 from "../asset/img/a1.jpeg";
import image6 from "../asset/img/a2.jpeg";
import image7 from "../asset/img/a3.jpeg";
import image8 from "../asset/img/a4.jpeg";
import image9 from "../asset/img/a5.jpeg";
import image10 from "../asset/img/a4.jpeg";
import backgroundImage from "../asset/img/culture.avif";

const museumData = [
  {
    name: "Mazary carpet",
    image: image1,
    description: "Afghan Books is an initiative aimed at promoting Afghan literature and authors.",
  },
  {
    name: "Balochi carpet",
    image: image2,
    description: "The Afghan Digital Library aims at preserving a wide range of Afghan literature.",
  },
  {
    name: "carpet",
    image: image3,
    description: "Read Afghanistan promotes reading and literacy within Afghanistan.",
  },
  {
    name: "Handed Art",
    image: image4,
    description: "The Open Library of Afghanistan provides free access to books and educational resources.",
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
        backgroundColor: "rgba(0, 0, 0, 0.2)",
        padding: { xs: "20px", md: "40px" },
        borderRadius: "12px",
      }}
    >
      <Typography variant="h2" sx={{ fontWeight: "bold", fontSize: { xs: "2rem", md: "3rem" }, letterSpacing: "0.05em" }}>
        Explore the Art and Culture of Afghanistan
      </Typography>
      <Typography variant="h6" sx={{ marginTop: "1rem", fontSize: { xs: "1.2rem", md: "1.5rem" } }}>
        A celebration of Afghanistan's vibrant artistic traditions and cultural heritage.
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
        boxShadow: hoveredIndex === index ? "0 8px 30px rgba(0, 0, 0, 0.5)" : "0 4px 15px rgba(0, 0, 0, 0.3)",
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
          backgroundColor: hoveredIndex === index ? "rgba(0, 0, 0, 0.6)" : "rgba(0, 0, 0, 0.3)",
          color: "white",
          padding: "15px",
          transition: "background-color 0.3s ease",
        }}
      >
        <Typography variant="h6" textAlign={"center"} sx={{ fontWeight: "bold" }}>{museum.name}</Typography>
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
    <Typography variant="h4" sx={{ marginBottom: "3rem", fontWeight: "bold", textAlign: "center", color: "#005a69" }}>
      Afghani Full Handcrapt and Art
    </Typography>
    <Grid container spacing={4}>
      {museumData.map((museum, index) => (
        <MuseumCard key={index} museum={museum} index={index} hoveredIndex={hoveredIndex} setHoveredIndex={setHoveredIndex} />
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
          Cultural Art of Afghanistan
        </Typography>
        <Typography variant="body1" sx={{ lineHeight: 1.8, color: "#333", textAlign: "justify", fontSize: "1.1rem" }}>
          The Cultural Art of Afghanistan represents diverse artistic expressions that have flourished throughout its rich history. This initiative highlights traditional crafts, music, dance, and visual arts, showcasing Afghan artists' talents and creativity. From intricate carpet weaving to stunning miniature paintings, Afghan cultural art reflects historical narratives and social values. This platform promotes awareness and encourages preservation for future generations. By exploring Afghan culture, visitors can gain insight into the resilience and spirit of the Afghan people. Through exhibitions, workshops, or online resources, the Cultural Art of Afghanistan serves as a vital link between the past and present, celebrating artistic heritage that continues to inspire and unite communities.
        </Typography>
      </Box>
    </Grid>
  </Grid>
);

const ImageDescriptionCard = ({ image, title, description }) => (
  <Card sx={{ display: "flex", height: "250px", margin: "2rem 0" }}>
    <CardMedia component="img" sx={{ width: "250px", height: "100%", objectFit: "cover" }} image={image} alt={title} />
    <CardContent sx={{ flex: "1", display: "flex", flexDirection: "column", justifyContent: "top" }}>
      <Typography variant="h6" component="div" sx={{ fontWeight: "bold", color: "#005a69" }}>{title}</Typography>
      <Typography variant="body2" color="text.secondary" sx={{ marginTop: "0.5rem", textAlign: "justify" }}>{description}</Typography>
    </CardContent>
  </Card>
);

const ThreeCardSection = () => {
  const cardsData = [
    { image: image5, title: "Wall Art", description: "The Cultural Art of Afghanistan represents the diverse artistic expressionsthe diverse artistic expressions.the diverse artistic expressions.the diverse artistic expressions." },
    { image: image6, title: "Naqashi", description: "The Cultural Art of Afghanistan represents the diverse artistic expressionsthe diverse artistic expressionsthe diverse artistic expressions.the diverse artistic expressions.." },
    { image: image7, title: "Rasam", description: "The Cultural Art of Afghanistan represents the diverse artistic expressionsthe diverse artistic expressions..the diverse artistic expressions.the diverse artistic expressions" },
    { image: image8, title: "Rasam", description: "The Cultural Art of Afghanistan represents the diverse artistic expressionsthe diverse artistic expressions.the diverse artistic expressions.the diverse artistic expressions." },
    { image: image9, title: "Rasam", description: "The Cultural Art of Afghanistan represents the diverse artistic expressionsthe diverse artistic expressions.the diverse artistic expressions.the diverse artistic expressions." },
    { image: image10, title: "Rasam", description: "The Cultural Art of Afghanistan represents the diverse artistic expressionthe diverse artistic expressions.the diverse artistic expressions.the diverse artistic expressionss." },
  ];

  return (
    <>
      <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: "1rem", color: "primary.main", textAlign: 'center' }}>
        Art of Afghanistan people
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {cardsData.map((card, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <ImageDescriptionCard image={card.image} title={card.title} description={card.description} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

const CultureArt = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  return (
    <>
      <HeroSection />
      <Container maxWidth="xl">
        <TopMuseumsSection hoveredIndex={hoveredIndex} setHoveredIndex={setHoveredIndex} />
        <TextSection />
        <ThreeCardSection />
      </Container>
    </>
  );
};

export default CultureArt;
