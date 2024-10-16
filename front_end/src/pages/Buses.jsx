import React, { useEffect } from "react";
import {
  Box,
  Typography,
  Grid,
  Container,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
} from "@mui/material";
import backgroundImage from "../asset/img/11.webp";
import bus1 from "../asset/img/bus1.jpeg";
import bus2 from "../asset/img/bus2.jpeg";
import bus3 from "../asset/img/bus3.jpeg";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ContactsIcon from "@mui/icons-material/Contacts";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useTheme } from "@mui/material/styles";

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
        // maxWidth="lg"
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
          Discover, Catch Buses Seamlessly
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
          Explore Afghanistan's Premier Bus Service Providers for Convenient Travel
        </Typography>
        {/* <Button
          variant="contained"
          sx={{
            marginTop: "2rem",
            backgroundColor: "#4caf50",
            color: "#fff",
            fontWeight: "bold",
            padding: "12px 30px",
            fontSize: "1rem",
            borderRadius: "8px",
            "&:hover": {
              backgroundColor: "#388e3c",
            },
          }}
        >
          Book Now
        </Button> */}
      </Container>


      
      
    </Box>
  );
};

// Advanced BusCardItem Component with hover animations and styling
const BusCardItem = ({ image, title, description, contactNumber, email, address }) => {
  const whatsappLink = `https://wa.me/${contactNumber.replace(/\+/g, "")}?text=Hello, I am interested in your services.`;

  return (
    <Card
      sx={{
        // maxWidth: 500,
        borderRadius: "15px",
        boxShadow: 4,
        transition: "transform 0.4s ease-in-out, box-shadow 0.3s ease-in-out",
        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: 6,
        },
        overflow: "hidden", // Crop overflowing parts (e.g., large images)
      }}
    >
      <CardMedia
        component="img"
        alt={title}
        height="300"
        image={image}
        sx={{
          transition: "transform 0.3s ease-in-out",
          "&:hover": {
            transform: "scale(1.1)",
          },
        }}
      />
      <CardContent sx={{ padding: "20px" }}>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ fontWeight: "bold", textAlign: "center" }}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          sx={{ textAlign: "justify", marginBottom: "1.5rem" }}
        >
          {description}
        </Typography>
        <Box sx={{ textAlign: "left" }}>
          <Box sx={{ display: "flex", alignItems: "center", marginBottom: "0.5rem" }}>
            <LocationOnIcon sx={{ marginRight: 1, color: "gray" }} />
            <Typography variant="body2">
              <strong>Address:</strong> {address}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", marginBottom: "0.5rem" }}>
            <ContactsIcon sx={{ marginRight: 1, color: "gray" }} />
            <Typography variant="body2">
              <strong>Contact:</strong> {contactNumber}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", marginBottom: "0.5rem" }}>
            <EmailIcon sx={{ marginRight: 1, color: "gray" }} />
            <Typography variant="body2">
              <strong>Email:</strong> {email}
            </Typography>
          </Box>
        </Box>
      </CardContent>
      <CardActions sx={{ justifyContent: "center", paddingBottom: "20px" }}>
        <Button
          variant="contained"
          startIcon={<WhatsAppIcon />}
          sx={{
            backgroundColor: "#25d366",
            color: "#fff",
            fontWeight: "bold",
            padding: "10px 20px",
            "&:hover": {
              backgroundColor: "#128c7e",
            },
          }}
          onClick={() => window.open(whatsappLink, "_blank")}
        >
          Contact Us
        </Button>
      </CardActions>
    </Card>
  );
};

// Buses page component with advanced design and XL container
const Buses = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const busData = [
    {
      image: bus1,
      title: "Ahmad Shah Baba",
      description: "Ahmad Shah Baba Bus is associated with providing reliable and safe services.",
      contactNumber: "0731682669",
      email: "ahmad@busesafghanistan.com",
      address: "Kabul, Afghanistan",
    },
    {
      image: bus2,
      title: "Wardak Baba",
      description: "Wardak Baba Bus provides a comfortable travel experience across the country.",
      contactNumber: "0799441732",
      email: "wardak@busesafghanistan.com",
      address: "Wardak, Afghanistan",
    },
    {
      image: bus3,
      title: "Miwaind Bus",
      description: "Miwaind Bus operates multiple routes connecting major cities alighn.",
      contactNumber: "0731682669",
      email: "miwaind@busesafghanistan.com",
      address: "Kandahar, Afghanistan",
    },
  ];

  return (
    <>
      <HeroSection />
      <Container maxWidth="xl" sx={{padding:'5rem'}}>
      <Box sx={{ textAlign: "center", marginBottom: "2rem", marginTop: "2rem" }}>
        <Typography variant="h4" sx={{ fontWeight: "bold", color: "gray" }}>
          Our Bus Services
        </Typography>
      </Box>
        <Grid container justifyContent="space-between" spacing={4}>
          {busData.map((bus, index) => (
            <Grid item key={index} xs={12} sm={6} md={4} xl={3}>
              <BusCardItem
                image={bus.image}
                title={bus.title}
                description={bus.description}
                contactNumber={bus.contactNumber}
                email={bus.email}
                address={bus.address}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Buses;
