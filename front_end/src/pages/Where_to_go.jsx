import React, { useState , useEffect } from "react";
import { Box, Typography, AppBar, Tabs, Tab, Container } from "@mui/material";
import backgroundImage from "../asset/img/WherToGo.jpg";
import KabulSection from "./ProvinceDetails";
import Weather from './weather'
import { useTheme } from "@emotion/react";

const WhereToGo = () => {

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);


  const [selectedSection, setSelectedSection] = useState(0);

  const handleTabChange = (event, newValue) => {
    setSelectedSection(newValue);
  };




  

// Full-screen HeroSection Component with advanced background styling
const HeroSection = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundImage: `url(${backgroundImage})`,
        // backgroundImage:'url(/images/Accomodation.jpg)',
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
           where to go
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
             Afghanistan has every kind of place for every spirit and for every desire. See where your heart takes you.
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





  // HeroSection Component
// const HeroSection = () => (
 
// <Box
//   sx={{
//     backgroundImage: `url(${backgroundImage})`,
//     backgroundSize: "cover",
//     backgroundPosition: "right 20%",
//     backgroundRepeat: "no-repeat",
//     height: "50vh", // Full height for hero section
//     display: "flex",
//     justifyContent: "center", // Centers content horizontally
//     alignItems: "center", // Centers content vertically
//     color: "white",
//     position: "relative",
//   }}
// >
//   {/* Align content to the left and vertically center */}
//   <Container
//     maxWidth="xl"
//     sx={{
//       width: '100%',
//       zIndex: 1,
//       textAlign: "left", // Keep text alignment to the left
//       paddingLeft: '0', // Adjust padding for left alignment
//       textTransform: 'capitalize',
//       backgroundColor: "rgba(0, 0, 0, 0.3)", // Background color full height
//       height: "100%", // Ensure background takes full height of hero section
//       display: 'flex',
//       flexDirection: 'column',
//       justifyContent: 'center', // Vertically center content inside the container
//     }}
//   >
//     <h1 style={{ fontSize: "2rem", margin: "0", textTransform: 'capitalize' }}>
//       where to go
//     </h1>
//     <h2 style={{ fontSize: "1rem", marginTop: "1rem", textTransform: 'capitalize' }}>
//       Afghanistan has every kind of place for every spirit and for every desire. See where your heart takes you.
//     </h2>
//   </Container>
// </Box>


// );

// NavigationBar Component
const NavigationBar = ({ selectedSection, handleTabChange }) => (
  <AppBar position="static" sx={{ backgroundColor: "white", boxShadow: "none" }}>
    <Box sx={{ textAlign: "center", padding: "10px 0" }}>
      {/* <Typography
        component="h3"
        variant="h6"
        sx={{ fontWeight: "bold", color: "gray", fontSize: "20px", mt: 2 }}
      >
        Where To Go
      </Typography> */}
      <Typography
        component="h6"
        variant="body1"
        sx={{ fontWeight: "bold", color: "gray", fontSize: "25px", mt: 2 }}
      >
        Central Provinces
      </Typography>
    </Box>
    <Tabs
      value={selectedSection}
      onChange={handleTabChange}
      centered
      sx={{
        justifyContent: "center",
        "& .MuiTab-root": {
          color: "gray",
          fontWeight: "bold",
        },
        "& .Mui-selected": {
          color: "blue",
        },
        "& .MuiTabs-indicator": {
          backgroundColor: "blue",
        },
      }}
    >
      <Tab label="Kabul" />
      <Tab label="Wardak" />
      <Tab label="Bamyan" />
      <Tab label="Ghor" />
      <Tab label="Urozgan" />
    </Tabs>
  </AppBar>
);


  return (
    <>
      <HeroSection />
        <NavigationBar selectedSection={selectedSection} handleTabChange={handleTabChange} />
        <Weather />
      <Container maxWidth={"xl"}>
        {selectedSection === 0 && <KabulSection />}

      </Container>
    </>
  );
};


export default WhereToGo;
