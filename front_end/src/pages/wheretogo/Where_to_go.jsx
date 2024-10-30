import React, { useState , useEffect } from "react";
import { Box, Typography, AppBar, Tabs, Tab, Container } from "@mui/material";
import backgroundImage from "../../asset/img/WherToGo.jpg";
import KabulSection from "./ProvinceDetails";
import Weather from "../weather"
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

// NavigationBar Component
const NavigationBar = ({ selectedSection, handleTabChange }) => (
  <AppBar position="static" sx={{ backgroundColor: "white", boxShadow: "none" }}>
    <Box sx={{ textAlign: "center", padding: "10px 0" }}>
    
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
        <Weather />
        <NavigationBar selectedSection={selectedSection} handleTabChange={handleTabChange} />
      <Container maxWidth={"xl"}>
        {selectedSection === 0 && <KabulSection />}

      </Container>
    </>
  );
};


export default WhereToGo;
