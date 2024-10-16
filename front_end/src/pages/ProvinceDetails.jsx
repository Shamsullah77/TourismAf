import React from "react";
import { Box, Typography, Grid, Button } from "@mui/material";
import ImageCard from "../componenets/ImageCard/ImageCard";
import image1 from "../asset/img/winter.webp";
import image2 from "../asset/img/summer.webp";
import image3 from "../asset/img/spring.webp";
import image4 from "../asset/img/single.webp";
import Weather from './weather'

const imagesWithNames = [
  { src: image1, name: "Paghman Valley" },
  { src: image2, name: "Shahr-e Zohak" },
  { src: image3, name: "Bala Hissar" },
  { src: image4, name: "Gardens of Babur" },
];

const KabulSection = () => (
  <Box component="section" sx={{padding:'1rem 0'}}>
    <Grid container spacing={4} >
        {/* left side container */}
      <Grid item xs={12} md={6} >
        <Box sx={{ borderRadius: "15px", backgroundColor: "white", }}>
          <Typography
            component="h5"
            variant="h4"
            sx={{
              fontWeight: "bold",
              color: "#333",
              fontSize: { xs: "1.5rem", md: "2rem" },
              mb: 2,
            }}
          >
            Kabul
          </Typography>
          {/* <Weather /> */}
          <Typography component="p" variant="body1" sx={{ lineHeight: 1.8, mb: 2 }}>
            Kabul is the capital and largest city of Afghanistan, located in a valley surrounded by the Hindu Kush mountains. With a history spanning over 3,500 years, it has served as a significant cultural and trade center. The city has a population of over 4 million and is the economic, political, and cultural hub of the country, featuring diverse ethnic groups and historical sites.
          </Typography>
          <Typography component="p" variant="body1" sx={{ mb: 1, lineHeight: 1.8, fontSize: { xs: "0.875rem", md: "1rem" } }}>
            <strong>Route Information:</strong> Kabul is connected by major highways, including the Kabul-Kandahar and Kabul-Jalalabad roads, and is served by Hamid Karzai International Airport. Travel routes face challenges due to security concerns and difficult terrain.
          </Typography>
          <Typography component="p" variant="body1" sx={{ mb: 2, lineHeight: 1.8, fontSize: { xs: "0.875rem", md: "1rem" } }}>
            <strong>Get Directions:</strong> To get directions to Kabul, use Google Maps by entering your starting location and "Kabul, Afghanistan" as your destination. Choose your preferred mode of transportation and follow the provided route for navigation.
          </Typography>
          <Button variant="contained" color="primary" sx={{ mt: 2 }}>
            Read More
          </Button>
        </Box>
      </Grid>
      {/* rigt side image design */}
      <Grid item xs={12} md={6}>
        <Grid container spacing={0.5}>
          {imagesWithNames.map((image, index) => (
            <Grid item xs={6} key={index}>
              <ImageCard image={image} borderRadius={getImageBorderRadius(index)} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  </Box>
);

const getImageBorderRadius = (index) => {
  switch (index) {
    case 0:
      return "10px 0 0 0";
    case 1:
      return "0 10px 0 0";
    case 2:
      return "0 0 0 10px";
    case 3:
      return "0 0 10px 0";
    default:
      return "0";
  }
};

export default KabulSection;
