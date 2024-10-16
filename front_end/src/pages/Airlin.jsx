import React, { useEffect } from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  CardMedia,
  Container,
  Button,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import backgroundImage from "../asset/img/Hero.jpg";


import image1 from "../asset/img/Arina.jpeg";
import image2 from "../asset/img/Kam_Air_CR.png";
import image3 from "../asset/img/Badranga.jpg";
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
           After flying domestic and international skies for decades
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
          Fast, frequent & direct flights
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




const useStyles = makeStyles({
  card: {
    maxWidth: 400,
    height:'68vh',
    margin: "20px auto",
    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
  },
  cardContent: {
    textAlign: "left",
    padding: "1rem 1.5rem",
  },
  media: {
    height: "200px",
  },
});

const App = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const classes = useStyles();

  const services = [
    {
      title: "ARIANA AFGHAN AIRLINES",
      description:
        "The national carrier of Afghanistan, established in 1955, offering both domestic and international flights.",
      image: image1,
      contactNumber: "0731682669",
      email: "info@airiana.com",
      address: "Kabul, Afghanistan",
      whatsappLink:
        "https://wa.me/0731682669?text=Hello, I am interested in your services.",
    },
    {
      title: "KAM AIR AIRLINES",
      description:
        "A private airline founded in 2003, providing domestic services as well as flights to several international ",
      image: image2,
      contactNumber: "0799441732",
      email: "contact@kamair.com",
      address: "Kandahar, Afghanistan",
      whatsappLink:
        "https://wa.me/0799441732?text=Hello, I am interested in your services.",
    },
    {
      title: "SKY AFGHAN AIRLINES",
      description:
        "Sky Afghanistan was a private airline that operated in Afghanistan. Here are some key details about the.",
      image: image3,
      contactNumber: "0731682669",
      email: "support@skyafghan.com",
      address: "Herat, Afghanistan",
      whatsappLink:
        "https://wa.me/0731682669?text=Hello, I am interested in your services.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <HeroSection/>

      <Container maxWidth="xl" sx={{ paddingTop: "5rem" }}>
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            marginBottom: "1rem",
            fontWeight: "bold",
          }}
        >
          Let's Fly Away in Style!
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {services.map((service, index) => (
            <Grid item xs={12} sm={4} key={index}>
              <Card className={classes.card}>
                <CardMedia
                  component="img"
                  className={classes.media}
                  image={service.image}
                  alt={`${service.title} airline`}
                />
                <CardContent className={classes.cardContent}>
                  <Typography
                    variant="h1"
                    sx={{
                      fontWeight: "bold",
                      marginBottom: "10px",
                      fontSize: "1rem",
                    }}
                  >
                    {service.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {service.description}
                  </Typography>
                  <Typography variant="body2" sx={{ marginTop: "1rem" }}>
                    <strong>Contact Number:</strong> {service.contactNumber}
                    <br />
                    <strong>Email:</strong> {service.email}
                    <br />
                    <strong>Address:</strong> {service.address}
                  </Typography>
                  <Button
                    size="small"
                    variant="outlined"
                    startIcon={<WhatsAppIcon />}
                    sx={{
                      fontWeight: "bold",
                      marginTop: "1rem",
                      borderColor: "primary.main",
                      color: "primary.main",
                      "&:hover": {
                        backgroundColor: "primary.main",
                        color: "white",
                      },
                    }}
                    onClick={() => window.open(service.whatsappLink, "_blank")}
                  >
                    Contact Us
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default App;



