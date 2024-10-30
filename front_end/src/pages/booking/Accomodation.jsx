import React, { useState, useEffect } from "react";
import { Grid, Typography, Box, Paper, Button, Container } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import HotelIcon from "@mui/icons-material/Hotel";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import CloseIcon from "@mui/icons-material/Close";
import backgroundImage from "../../asset/img/Acco8.jpeg";

import "leaflet/dist/leaflet.css";
import L from "leaflet";
import image03 from "../../asset/img/Acco2.jpg";
import image02 from "../../asset/img/Acco7.jpeg";
import image01 from "../../asset/img/Acco8.jpeg";
import image04 from "../../asset/img/Acco9.jpeg";
import AccomodationSecondPart from '../../componenets/AccomodationPart/AccomodationSecondPart'
import { useTheme } from "@mui/material/styles";


// Set default icon for Leaflet markers
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

const Accommodation = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  const hotels = [
    {
      name: "Serena Hotel",
      location: "Kabul",
      rating: 8.9,
      reviews: 365,
      image: image02,
      coordinates: [34.5151, 69.1962],
    },
    {
      name: "Gul Bahar Center",
      location: "Kabul",
      rating: 8.5,
      reviews: 280,
      image: image01,
      coordinates: [34.5151, 69.1911],
    },
    {
      name: "Herat National",
      location: "Herat",
      rating: 9.3,
      reviews: 200,
      image: image04,
      coordinates: [34.3485, 62.2004],
    },
    {
      name: "Bamiyan Valley",
      location: "Bamiyan",
      rating: 8.7,
      reviews: 150,
      image: image03,
      coordinates: [34.8107, 67.8324],
    },
  ];

  const [mapVisible, setMapVisible] = useState(
    Array(hotels.length).fill(false)
  );

  const toggleMap = (index) => {
    const newVisibility = [...mapVisible];
    newVisibility[index] = !newVisibility[index];
    setMapVisible(newVisibility);
  };




  // Full-screen HeroSection Component with advanced background styling
  const HeroSection = () => {
    const theme = useTheme();

    return (
      <Box
        sx={{
          // backgroundImage: `url(${backgroundImage})`,
          backgroundImage: 'url(/images/Accomodation.jpg)',
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
            Explore and Book Accommodation
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
            Discover and reserve hotels and accommodations for your stay in
            Afghanistan hassle-free
          </Typography>
      </Container>
      </Box>
    );
  };

  return (
    <>
    <HeroSection />
      <Box  sx={{ paddingTop: '5rem' }}>
        <h2
          style={{
            textAlign: "center",
            paddingBottom: '3rem',
            // paddingTop: "5rem",
            color: "gray",
          }}
        >
          TOP ACCOMMODATIONS!
        </h2>
        <Container maxWidth={'xl'} sx={{ display: "flex",padding: 0, gap:'3rem' }}>
  {hotels.map((hotel, index) => (
    <Box
      key={index}
      sx={{
        width: { xs: "100%", md: "23%" }, // Adjusted for responsiveness
        padding: "0",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          overflow: "hidden",
          textAlign: "center",
          position: "relative",
          maxWidth: "100%",
          margin: "0 auto",
          height: "100%", // Ensure full height for the card
        }}
      >
        {/* Image and details are hidden if the map is visible */}
        {!mapVisible[index] && (
          <>
            <img
              src={hotel.image}
              alt={hotel.name}
              style={{
                width: "100%",
                height: "25vh",
                display: "block",
              }}
            />
            <Box
              sx={{
                position: "relative",
                padding: "0.5rem",
                backgroundColor: "white",
              }}
            >
              <Button
                variant="contained"
                onClick={() => toggleMap(index)}
                sx={{
                  bgcolor: "green",
                  color: "white",
                  borderRadius: "50%",
                  minWidth: "30px",
                  height: "30px",
                  padding: "0.2rem",
                  position: "absolute",
                  left: "10px",
                  bottom: "25px",
                }}
              >
                <LocationOnIcon sx={{ color: "white" }} />
              </Button>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                  padding: "1px",
                }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    color: "black",
                    display: "flex",
                    alignItems: "center",
                    marginRight: "40px",
                  }}
                >
                  <StarIcon
                    sx={{
                      marginRight: "4px",
                      fontSize: "15px",
                      color: "lightgray",
                    }}
                  />
                  {hotel.rating}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "black",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <HotelIcon
                    sx={{
                      marginRight: "10px",
                      fontSize: "15px",
                      color: "lightgray",
                    }}
                  />
                  {hotel.reviews}
                </Typography>
              </Box>
            </Box>
            <hr style={{ margin: "1px 0", borderColor: "#fafafa" }} />
            <Box
              sx={{
                color: "gray",
                padding: "0.5rem",
                fontSize: "12px",
              }}
            >
              <Typography
                variant="outline"
                sx={{
                  backgroundColor: "#f5f5f5",
                  padding: "0 0.4rem",
                  borderRadius: "2px",
                }}
              >
                HOTEL
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  color: "green",
                  marginTop: "0.5rem",
                  fontSize: "15px",
                }}
              >
                {hotel.name}
              </Typography>
              <Typography
                variant="body2"
                sx={{ marginTop: "0.5rem", marginBottom: "0.5rem" }}
              >
                {hotel.location}
              </Typography>
            </Box>
          </>
        )}

        {/* Map takes the full size of the card */}
        {mapVisible[index] && (
          <Box
            sx={{
              position: "absolute",
              top: "0",
              left: "0",
              right: "0",
              bottom: "0",
              zIndex: 100,
              backgroundColor: "white",
            }}
          >
            <MapContainer
              center={hotel.coordinates}
              zoom={13}
              style={{ height: "100%", width: "100%" }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={hotel.coordinates}>
                <Popup>{hotel.name}</Popup>
              </Marker>
            </MapContainer>

            {/* Close button */}
            <Button
              onClick={() => toggleMap(index)}
              sx={{
                position: "absolute",
                right: "10px",
                top: "10px",
                color: "white",
                backgroundColor: "red",
                padding: "0.5rem",
                borderRadius: "50%",
                minWidth: "30px",
                zIndex: 9999,
                border: "2px solid white",
                "&:hover": {
                  backgroundColor: "darkred",
                },
              }}
            >
              <CloseIcon />
            </Button>
          </Box>
        )}
      </Paper>
    </Box>
  ))}
</Container>


        <AccomodationSecondPart />
      </Box>
    </>
  );
};

export default Accommodation;
