import React, { useState } from "react";
import { Box, Typography, Container, Grid, Paper } from "@mui/material";
import backgroundImage from "../asset/img/g2.jpeg";
import afg from "../asset/img/g2.jpeg";
import kabul from "../asset/img/g4.jpeg";
import afg3 from "../asset/img/g5.jpeg";
import afg2 from "../asset/img/g6.jpeg";
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
      backgroundPosition: "bottom",
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
        Gitting Around Afghanistan
      </Typography>
      <Typography
        variant="h6"
        sx={{ marginTop: "1rem", fontSize: { xs: "1.2rem", md: "1.5rem" } }}
      >
        Here’s a general overview of getting around in Afghanistan, focusing on
        transportation options, safety, and practical tips:
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
          Getting All Place Of Afghnistan
        </Typography>
        <Typography
          variant="body1"
          sx={{
            marginTop: "1rem",
            fontSize: { xs: "1rem", md: "1.25rem" },
            textAlign: "justify",
          }}
        >
          Transportation Options Road Travel: Buses: Long-distance buses connect
          major cities, such as Kabul, Mazar-i-Sharif, and Herat. While they are
          affordable, they can be crowded and subject to delays. Minibuses:
          These are commonly used for shorter trips and are a cost-effective way
          to travel within and between cities. Taxis: Available in urban areas,
          but it’s advisable to negotiate fares beforehand or use ride-hailing
          apps if available. Private Vehicles: Renting a car with a driver is
          often recommended for safety and convenience, especially for tourists.
          Air Travel: Domestic Flights: Airlines like Kam Air and Ariana Afghan
          Airlines operate flights between key cities. This is a faster way to
          cover long distances, though schedules may vary. International Flights
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
      Safety Considerations
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
        Travel Advisories: Always check your government’s travel advisories
        regarding safety in Afghanistan. Areas to Avoid: Stay informed about
        regions known for conflict or instability. Travel is generally safer
        during the day, and it's best to avoid traveling at night. Local
        Guidance: Hiring local guides can enhance safety and provide insights
        into the areas you are visiting. 3. Cultural Etiquette Dress Modestly:
        In many areas, especially rural ones, modest dress is important. Women
        should cover their hair and wear loose clothing. Respect Local Customs:
        Be aware of local traditions and practices. Engaging respectfully with
        local communities can enhance your experience.
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

const GittingAround = () => {
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

export default GittingAround;