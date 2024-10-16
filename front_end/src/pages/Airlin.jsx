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
import airplaneImage from "../asset/img/flight.jpeg"; // Default image
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import image1 from "../asset/img/flight.jpeg";
import image2 from "../asset/img/flight.jpeg";
import image3 from "../asset/img/flight.jpeg";
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
        width: "100%",
        height: "50vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        position: "relative",
        backgroundAttachment: "fixed",
        [theme.breakpoints.down("md")]: {
          height: "70vh",
        },
      }}
    >
      <Container
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
      </Container>
    </Box>
  );
};

const useStyles = makeStyles({
  card: {
    maxWidth: 400,
    margin: "20px auto",
    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
    position: "relative",
    overflow: "visible",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
  },
  cardContent: {
    textAlign: "left",
    position: "relative",
    zIndex: 1,
    backgroundColor: "transparent",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  media: {
    height: "300px",
    width: "100%",
    position: "relative",
    zIndex: 0,
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: 0,
  },
  cardTitle: {
    position: "absolute",
    top: "45%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "black",
    textAlign: "center",
    zIndex: 2,
    width: "100%",
  },
  cardDescription: {
    position: "absolute",
    top: "55%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "black",
    textAlign: "left",
    paddingLeft: "4rem",
    zIndex: 2,
    width: "100%",
    fontSize: "1rem",
    fontWeight: "normal",
  },
  iconContainer: {
    display: "flex",
    alignItems: "center",
    paddingLeft: "1rem",
    width: "100%",
    marginBottom: "0.5rem",
  },
  icon: {
    fontSize: "1rem",
    color: "white",
    backgroundColor: "orange",
    borderRadius: "50%",
    padding: "0.1rem",
    marginRight: "0.5rem",
    border: "1px solid lightgray",
  },
  text: {
    flex: 1,
  },
  contactContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginTop: "1rem",
    paddingRight: "1rem",
  },
  whatsappButton: {
    backgroundColor: "green",
    color: "white",
    padding: "0.5rem 1rem",
    borderRadius: "8px",
  },
  seeMoreButton: {
    backgroundColor: "blue",
    color: "white",
    padding: "0.5rem 1rem",
    borderRadius: "8px",
    marginTop: "1rem",
  },
});

const Airline = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const classes = useStyles();

  // Card data with unique website links and WhatsApp numbers
  const cardData = [
    {
      title: "Arina Afghan",
      description: "A trusted name in the aviation industry, committed to excellence.",
      location: "Kabul, Afghanistan",
      phone: "(+93) 731 -682629",
      email: "AiranaAfghan@gmail.com",
      website: "https://www.arinaafghan.com",
      whatsapp: "https://wa.me/93731682629",
      image: image1, // Unique image for this card
    },
    {
      title: "Sky Airana",
      description:
        "A trusted name in the aviation industry, committed to excellence.",
      location: "Kabul, Afghanistan",
      phone: "(+93) 731 -682630",
      email: "info@skyairlines.com",
      website: "https://www.skyairana.com",
      whatsapp: "https://wa.me/93731682630",
      image: image2, // Unique image for this card
    },
    {
      title: "Kamir Afghan",
      description:
        "A trusted name in the aviation industry, committed to excellence",
      location: "Kabul, Afghanistan",
      phone: "(+93) 731 -682631",
      email: "contact@ariana.com",
      website: "https://www.kamirafghan.com",
      whatsapp: "https://wa.me/93731682631",
      image: image3, // Unique image for this card
    },
    {
      title: "Fly Dubi",
      description:
        "A trusted name in the aviation industry, committed to excellence",
      location: "Kabul, Afghanistan",
      phone: "(+93) 731 -682632",
      email: "hello@flyhigh.com",
      website: "https://www.flydubi.com",
      whatsapp: "https://wa.me/93731682632",
      image: airplaneImage, // Default image for this card
    },
  ];

  return (
    <>
      <HeroSection />
      <Container maxWidth="xl" sx={{ paddingTop: "5rem" }}>
        <Grid container spacing={4} justifyContent="center">
          {cardData.map((card, index) => (
            <Grid item xs={12} sm={3} key={index}>
              <Card className={classes.card}>
                <CardMedia
                  component="img"
                  className={classes.media}
                  image={card.image} // Display different image per card
                  alt={card.title}
                />
                <div className={classes.overlay} />
                <Typography
                  className={classes.cardTitle}
                  sx={{ fontWeight: "bold", fontSize: "1.5rem" }}
                >
                  {card.title}
                </Typography>
                <Typography className={classes.cardDescription}>
                  {card.description}
                </Typography>
                <CardContent className={classes.cardContent}>
                  <div className={classes.iconContainer}>
                    <LocationOnIcon className={classes.icon} />
                    <Typography variant="body2" className={classes.text}>
                      {card.location}
                    </Typography>
                  </div>
                  <div className={classes.iconContainer}>
                    <PhoneIcon className={classes.icon} />
                    <Typography variant="body2" className={classes.text}>
                      {card.phone}
                    </Typography>
                  </div>
                  <div className={classes.iconContainer}>
                    <EmailIcon className={classes.icon} />
                    <Typography variant="body2" className={classes.text}>
                      {card.email}
                    </Typography>
                  </div>
                  <div className={classes.contactContainer}>
                    <Button
                      variant="outlined"
                      className={classes.seeMoreButton}
                      href={card.website}
                    >
                      Website
                    </Button>
                    <Button
                      variant="outlined"
                      className={classes.whatsappButton}
                      href={card.whatsapp}
                    >
                      <WhatsAppIcon />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Airline;
