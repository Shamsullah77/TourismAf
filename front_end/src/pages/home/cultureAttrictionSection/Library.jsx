import React, { useState, useEffect } from "react";
import {
  Box,
  Grid,
  Typography,
  Paper,
  Container,
  ImageListItem,
  Breadcrumbs,
  Link,
} from "@mui/material";

import image1 from "../../../asset/img/l1.jpeg";
import image2 from "../../../asset/img/l2.jpeg";
import image3 from "../../../asset/img/l5.jpeg";
import image4 from "../../../asset/img/l4.jpeg";

import image9 from "../../../asset/img/l1.jpeg";
import image10 from "../../../asset/img/l4.jpeg";
import image11 from "../../../asset/img/l5.jpeg";
import image12 from "../../../asset/img/l2.jpeg";

import backgroundImage from "../../../asset/img/Library.jpg";


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
        Discover Afghanistan Open Library
      </Typography>
      <Typography
        variant="h6"
        sx={{ marginTop: "1rem", fontSize: { xs: "1.2rem", md: "1.5rem" } }}
      >
        digital initiative aimed at preserving and promoting Afghanistan's rich
        literary
      </Typography>
    </Container>
  </Box>
);


// Breadcrumb component
const BreadcrumbNav = () => (
  <Container maxWidth="xl" sx={{ marginY: 2 }}>
    <Breadcrumbs aria-label="breadcrumb">
      <Link color="inherit" href="/" underline="hover" sx={{fontWeight:'bold'}}>
        Home
      </Link>
      {/* <Link color="inherit" href="/culture" underline="hover">
        Culture
      </Link> */}
      <Typography color="textPrimary" sx={{fontWeight:'bold'}}>Museum</Typography>
    </Breadcrumbs>
  </Container>
);


const museumData = [
  {
    name: "Afghan Books",
    image: image1,
    description:
      "Afghan Books is an initiative aimed at promoting Afghan literature and authors, providing access to a range of texts that reflect the culture.",
  },
  {
    name: "Afghan Digital Library ",
    image: image2,
    description:
      "The Afghan Digital Library is a project aimed at preserving and providing access to a wide range of Afghan literature, historical documents.",
  },
  {
    name: "Read Afghanistan",
    image: image3,
    description:
      "Read Afghanistan is an initiative focused on promoting reading and literacy within Afghanistan. It aims to foster a culture of reading.",
  },
  {
    name: "Open Library of Afghanistan",
    image: image4,
    description:
      "The Open Library of Afghanistan is an initiative designed to provide free access to a wide array of books and educational resources.",
  },
];



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
      Top Open Library of Afghanistan
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
        Digital Library
        </Typography>
        <Typography variant="body1" sx={{ lineHeight: 1.8, color: "#333", textAlign: "justify", fontSize: "1.1rem" }}>
        The Digital Library of Afghanistan is a vital initiative aimed at
          preserving and promoting the rich literary heritage of Afghanistan. It
          provides access to a vast collection of Afghan literature, historical
          documents, and educational resources, ensuring that the voices of
          Afghan authors and scholars are heard. This digital platform enables
          readers worldwide to explore Afghan culture, history, and literature
          from the comfort of their homes. By digitizing important texts, the
          library not only safeguards these works for future generations but
          also fosters a culture of reading and education within Afghanistan.
          Whether you are looking for classic Afghan poetry, contemporary
          novels, or scholarly articles, the Digital Library serves as a
          comprehensive resource for anyone interested in the diverse narratives
          that shape Afghanistan's identity.        </Typography>
      </Box>
    </Grid>
  </Grid>
);





const TwoRowImageList = () => {
  const itemData = [
    { img: image9, title: "Image S2" },
    { img: image10, title: "Image S1" },
    { img: image11, title: "Image S2" },
    { img: image12, title: "Image S4" },
    { img: image9, title: "Image L1" },
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

const Library = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <>
      <HeroSection />
      <BreadcrumbNav/>
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

export default Library;