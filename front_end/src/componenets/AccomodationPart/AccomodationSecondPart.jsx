import React, { useState } from "react";
import {
  Grid,
  Typography,
  Box,
  Paper,
  Button,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Select,
  MenuItem,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import HotelIcon from "@mui/icons-material/Hotel";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import image01 from "../../asset/img/Acco2.jpg";
import image02 from "../../asset/img/Acco9.jpeg";
import image03 from "../../asset/img/Acco6.jpg";
import image04 from "../../asset/img/Acco8.jpeg";
import SearchBox from '../search/FilterSearch'
import { Container } from "@mui/system";
// Set default icon for Leaflet markers
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

// Hotel data
const hotelData = [
  {
    name: "Sirna Hotel",
    location: "Kabul",
    rating: 9.0,
    reviews: 150,
    image: image01,
    coordinates: [34.5151, 69.1962],
    type: "SPA & HOTEL",
    shortInfo: "A luxurious hotel in the heart of the city.",
    contactNumber: "123-456-7890",
    address: "123 Gul Bahar St, Cityville",
    email: "contact@sirnahotel.com",
  },
  {
    name: "Gul Bahar Center",
    location: "Herat",
    rating: 8.5,
    reviews: 200,
    image: image02,
    coordinates: [34.3485, 62.2004],
    type: "HOTEL",
    shortInfo: "A luxurious hotel in the heart of the city.",
    contactNumber: "234-567-8901",
    address: "456 Gul Bahar St, Herat",
    email: "info@gulbahar.com",
  },
  {
    name: "Kabul Star",
    location: "Kabul",
    rating: 8.7,
    reviews: 120,
    image: image03,
    coordinates: [34.8107, 67.8324],
    type: "SPA & HOTEL",
    shortInfo: "A luxurious hotel in the heart of the city.",
    contactNumber: "345-678-9012",
    address: "789 Kabul St, Kabul",
    email: "contact@kabulstar.com",
  },
 
];
const Hotel = () => {
  const [mapVisibleIndex, setMapVisibleIndex] = useState(null);
  const [moreInfoVisibleIndex, setMoreInfoVisibleIndex] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCount = 4;

  const nextHotel = () =>
    setCurrentIndex((prevIndex) => (prevIndex + 1) % hotelData.length);
  const previousHotel = () =>
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + hotelData.length) % hotelData.length
    );

  const displayedHotels = Array.from(
    { length: visibleCount },
    (_, i) => hotelData[(currentIndex + i) % hotelData.length]
  );

  return (
    // <Container maxWidth={'xl'} sx={{ padding: { xs: "10px", md: "5rem 2rem " } }}>
    //   <Typography
    //     variant="h4"
    //     align="center"
    //     sx={{ marginBottom: "20px", color: "gray" }}
    //   >
    //     All Hotels
    //   </Typography>
    //   <Grid container spacing={2}>
    //     <Grid item xs={12} md={3}>
    //       <SearchBox />
    //     </Grid>
    //     <Grid
    //       item
    //       xs={12}
    //       md={9}
    //       sx={{ display: "flex", alignItems: "center" }}
    //     >
    //       <Button
    //         onClick={previousHotel}
    //         sx={{
    //           bgcolor: "lightgray",
    //           borderRadius: "50%",
    //           minWidth: "40px",
    //           height: "40px",
    //           marginRight: "0.5rem",
    //         }}
    //       >
    //         <ArrowBackIosNewIcon />
    //       </Button>
  
    //       {/* Main scrolling container for cards */}
    //       <Grid
    //         container
    //         spacing={2}
    //         sx={{
    //           flexGrow: 1,
    //           overflowX: "scroll",
    //           scrollBehavior: "smooth",
    //           whiteSpace: "nowrap",
    //         }}
    //       >
    //         {displayedHotels.slice(currentIndex, currentIndex + 3).map((hotel, index) => (
    //           <Grid item xs={12} sm={6} md={4} lg={4} key={index} sx={{ display: "inline-block", width: "100%" }}>
    //             <Paper
    //               elevation={3}
    //               sx={{
    //                 overflow: "hidden",
    //                 textAlign: "center",
    //                 borderRadius: "8px",
    //                 transition: "transform 0.5s ease-in-out",
    //                 width: "100%",
    //                 position: "relative",
    //               }}
    //             >
    //               {mapVisibleIndex === currentIndex + index ? (
    //                 <MapContainer
    //                   center={hotel.coordinates}
    //                   zoom={13}
    //                   style={{ height: "380px", width: "100%" }}
    //                 >
    //                   <TileLayer
    //                     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    //                     attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    //                   />
    //                   <Marker position={hotel.coordinates}>
    //                     <Popup>
    //                       <Box sx={{ textAlign: "center" }}>
    //                         <img
    //                           src={hotel.image}
    //                           alt={hotel.name}
    //                           style={{
    //                             width: "100px",
    //                             height: "auto",
    //                             marginBottom: "5px",
    //                           }}
    //                         />
    //                         <Typography
    //                           variant="body2"
    //                           sx={{ fontWeight: "bold" }}
    //                         >
    //                           {hotel.name}
    //                         </Typography>
    //                         <Typography variant="body2">
    //                           {hotel.shortInfo}
    //                         </Typography>
    //                       </Box>
    //                     </Popup>
    //                   </Marker>
    //                   <Button
    //                     onClick={() => setMapVisibleIndex(null)}
    //                     sx={{
    //                       position: "absolute",
    //                       right: "10px",
    //                       top: "10px",
    //                       color: "white",
    //                       backgroundColor: "red",
    //                       zIndex: 1000,
    //                     }}
    //                   >
    //                     X
    //                   </Button>
    //                 </MapContainer>
    //               ) : moreInfoVisibleIndex === currentIndex + index ? (
    //                 <Box sx={{ padding: "1rem", backgroundColor: "white" }}>
    //                   <Typography variant="h6" sx={{ fontWeight: "bold" }}>
    //                     {hotel.name}
    //                   </Typography>
    //                   <Typography
    //                     variant="body2"
    //                     sx={{ textAlign: "justify", marginTop: "20px" }}
    //                   >
    //                     {hotel.shortInfo}
    //                   </Typography>
    //                   <Box sx={{ marginTop: "10px" }}>
    //                     <Box sx={{ display: "flex", alignItems: "center" }}>
    //                       <PhoneIcon
    //                         sx={{ marginRight: "5px", marginTop: "20px" }}
    //                       />
    //                       <Typography
    //                         variant="body2"
    //                         sx={{ marginTop: "20px" }}
    //                       >
    //                         {hotel.contactNumber}
    //                       </Typography>
    //                     </Box>
    //                     <Box sx={{ display: "flex", alignItems: "center" }}>
    //                       <LocationOnIcon
    //                         sx={{ marginRight: "5px", marginTop: "20px" }}
    //                       />
    //                       <Typography
    //                         variant="body2"
    //                         sx={{ marginTop: "20px" }}
    //                       >
    //                         {hotel.address}
    //                       </Typography>
    //                     </Box>
    //                     <Box sx={{ display: "flex", alignItems: "center" }}>
    //                       <EmailIcon
    //                         sx={{ marginRight: "5px", marginTop: "20px" }}
    //                       />
    //                       <Typography
    //                         variant="body2"
    //                         sx={{ marginTop: "20px" }}
    //                       >
    //                         {hotel.email}
    //                       </Typography>
    //                     </Box>
    //                   </Box>
    //                   <Button
    //                     variant="contained"
    //                     startIcon={<WhatsAppIcon />}
    //                     sx={{
    //                       marginTop: "1rem",
    //                       backgroundColor: "green",
    //                       color: "white",
    //                       marginTop: "20px",
    //                     }}
    //                     onClick={() =>
    //                       window.open(
    //                         `https://wa.me/${hotel.contactNumber}`,
    //                         "_blank"
    //                       )
    //                     }
    //                   >
    //                     Contact Me
    //                   </Button>
    //                   <Button
    //                     onClick={() => setMoreInfoVisibleIndex(null)}
    //                     sx={{ color: "red", marginTop: "20px" }}
    //                   >
    //                     Close
    //                   </Button>
    //                 </Box>
    //               ) : (
    //                 <>
    //                   <img
    //                     src={hotel.image}
    //                     alt={hotel.name}
    //                     style={{
    //                       width: "100%",
    //                       height: "200px",
    //                       objectFit: "cover",
    //                     }}
    //                   />
    //                   <Box sx={{ padding: "0.5rem", backgroundColor: "white" }}>
    //                     <Button
    //                       onClick={() =>
    //                         setMapVisibleIndex(currentIndex + index)
    //                       }
    //                       sx={{
    //                         bgcolor: "green",
    //                         color: "white",
    //                         borderRadius: "50%",
    //                         minWidth: "20px",
    //                         height: "40px",
    //                         position: "absolute",
    //                         left: "10px",
    //                         bottom: "170px",
    //                       }}
    //                     >
    //                       <LocationOnIcon />
    //                     </Button>
    //                     <Box
    //                       sx={{
    //                         display: "flex",
    //                         justifyContent: "space-around",
    //                       }}
    //                     >
    //                       <Typography variant="body2">
    //                         <StarIcon
    //                           sx={{ marginRight: "4px", color: "lightgray" }}
    //                         />
    //                         {hotel.rating}
    //                       </Typography>
    //                       <Typography variant="body2">
    //                         <HotelIcon
    //                           sx={{ marginRight: "4px", color: "lightgray" }}
    //                         />
    //                         {hotel.reviews}
    //                       </Typography>
    //                     </Box>
    //                     <Box sx={{ color: "gray" }}>
    //                       <Typography variant="body2">{hotel.type}</Typography>
    //                       <Typography
    //                         variant="h6"
    //                         sx={{ fontWeight: "bold", color: "green" }}
    //                       >
    //                         {hotel.name}
    //                       </Typography>
    //                       <Button
    //                         onClick={() =>
    //                           setMoreInfoVisibleIndex(currentIndex + index)
    //                         }
    //                         sx={{ color: "gray", textTransform: "none" }}
    //                       >
    //                         {hotel.location}
    //                       </Button>
    //                     </Box>
    //                   </Box>
    //                   <Button
    //                     variant="outlined"
    //                     onClick={() =>
    //                       setMoreInfoVisibleIndex(currentIndex + index)
    //                     }
    //                     sx={{
    //                       color: "green",
    //                       borderColor: "green",
    //                       marginBottom: "0.5rem",
    //                       width: "60%",
    //                       "&:hover": {
    //                         borderColor: "darkgreen",
    //                         color: "darkgreen",
    //                       },
    //                     }}
    //                   >
    //                     See More
    //                   </Button>
    //                 </>
    //               )}
    //             </Paper>
    //           </Grid>
    //         ))}
    //       </Grid>
  
    //       <Button
    //         onClick={nextHotel}
    //         sx={{
    //           bgcolor: "lightgray",
    //           borderRadius: "50%",
    //           minWidth: "40px",
    //           height: "40px",
    //           marginLeft: "10px",
    //         }}
    //       >
    //         <ArrowForwardIosIcon />
    //       </Button>
    //     </Grid>
    //   </Grid>
    // </Container>




<Container maxWidth={'xl'} sx={{ padding: { xs: "10px", md: "5rem 2rem " } }}>
      <Typography
        variant="h4"
        align="center"
        sx={{ marginBottom: "20px", color: "gray" }}
      >
        All Hotels
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
          {/* Your SearchBox component here */}

          <SearchBox/>
        </Grid>
        <Grid
          item
          xs={12}
          md={9}
          sx={{ display: "flex", alignItems: "center" }}
        >
          <Button
            onClick={previousHotel}
            sx={{
              bgcolor: "lightgray",
              borderRadius: "50%",
              minWidth: "40px",
              height: "40px",
              marginRight: "0.5rem",
            }}
          >
            <ArrowBackIosNewIcon />
          </Button>

          {/* Main scrolling container for cards */}
          <Grid
            container
            spacing={2}
            sx={{
              flexGrow: 1,
              overflow: "hidden", // Hide the scrollbar
              whiteSpace: "nowrap",
              "&::-webkit-scrollbar": {
                display: "none", // Hide the scrollbar for webkit browsers
              },
            }}
          >
            {displayedHotels.slice(currentIndex, currentIndex + 3).map((hotel, index) => (
              <Grid item xs={12} sm={6} md={4} lg={4} key={index} sx={{ display: "inline-block", width: "100%" }}>
                <Paper
                  elevation={3}
                  sx={{
                    overflow: "hidden",
                    textAlign: "center",
                    borderRadius: "8px",
                    transition: "transform 0.5s ease-in-out",
                    width: "100%",
                    position: "relative",
                  }}
                >
                  {mapVisibleIndex === currentIndex + index ? (
                    <MapContainer
                      center={hotel.coordinates}
                      zoom={13}
                      style={{ height: "380px", width: "100%" }}
                    >
                      <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                      />
                      <Marker position={hotel.coordinates}>
                        <Popup>
                          <Box sx={{ textAlign: "center" }}>
                            <img
                              src={hotel.image}
                              alt={hotel.name}
                              style={{
                                width: "100px",
                                height: "auto",
                                marginBottom: "5px",
                              }}
                            />
                            <Typography
                              variant="body2"
                              sx={{ fontWeight: "bold" }}
                            >
                              {hotel.name}
                            </Typography>
                            <Typography variant="body2">
                              {hotel.shortInfo}
                            </Typography>
                          </Box>
                        </Popup>
                      </Marker>
                      <Button
                        onClick={() => setMapVisibleIndex(null)}
                        sx={{
                          position: "absolute",
                          right: "10px",
                          top: "10px",
                          color: "white",
                          backgroundColor: "red",
                          zIndex: 1000,
                        }}
                      >
                        X
                      </Button>
                    </MapContainer>
                  ) : moreInfoVisibleIndex === currentIndex + index ? (
                    <Box sx={{ padding: "1rem", backgroundColor: "white" }}>
                      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                        {hotel.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ textAlign: "justify", marginTop: "20px" }}
                      >
                        {hotel.shortInfo}
                      </Typography>
                      <Box sx={{ marginTop: "10px" }}>
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                          <PhoneIcon
                            sx={{ marginRight: "5px", marginTop: "20px" }}
                          />
                          <Typography
                            variant="body2"
                            sx={{ marginTop: "20px" }}
                          >
                            {hotel.contactNumber}
                          </Typography>
                        </Box>
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                          <LocationOnIcon
                            sx={{ marginRight: "5px", marginTop: "20px" }}
                          />
                          <Typography
                            variant="body2"
                            sx={{ marginTop: "20px" }}
                          >
                            {hotel.address}
                          </Typography>
                        </Box>
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                          <EmailIcon
                            sx={{ marginRight: "5px", marginTop: "20px" }}
                          />
                          <Typography
                            variant="body2"
                            sx={{ marginTop: "20px" }}
                          >
                            {hotel.email}
                          </Typography>
                        </Box>
                      </Box>
                      <Button
                        variant="contained"
                        startIcon={<WhatsAppIcon />}
                        sx={{
                          marginTop: "1rem",
                          backgroundColor: "green",
                          color: "white",
                          marginTop: "20px",
                        }}
                        onClick={() =>
                          window.open(
                            `https://wa.me/${hotel.contactNumber}`,
                            "_blank"
                          )
                        }
                      >
                        Contact Me
                      </Button>
                      <Button
                        onClick={() => setMoreInfoVisibleIndex(null)}
                        sx={{ color: "red", marginTop: "20px" }}
                      >
                        Close
                      </Button>
                    </Box>
                  ) : (
                    <>
                      <img
                        src={hotel.image}
                        alt={hotel.name}
                        style={{
                          width: "100%",
                          height: "200px",
                          objectFit: "cover",
                        }}
                      />
                      <Box sx={{ padding: "0.5rem", backgroundColor: "white" }}>
                        <Button
                          onClick={() =>
                            setMapVisibleIndex(currentIndex + index)
                          }
                          sx={{
                            bgcolor: "green",
                            color: "white",
                            borderRadius: "50%",
                            minWidth: "20px",
                            height: "40px",
                            position: "absolute",
                            left: "10px",
                            bottom: "170px",
                          }}
                        >
                          <LocationOnIcon />
                        </Button>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-around",
                          }}
                        >
                          <Typography variant="body2">
                            <StarIcon
                              sx={{ marginRight: "4px", color: "lightgray" }}
                            />
                            {hotel.rating}
                          </Typography>
                          <Typography variant="body2">
                            <HotelIcon
                              sx={{ marginRight: "4px", color: "lightgray" }}
                            />
                            {hotel.reviews}
                          </Typography>
                        </Box>
                        <Box sx={{ color: "gray" }}>
                          <Typography variant="body2">{hotel.type}</Typography>
                          <Typography
                            variant="h6"
                            sx={{ fontWeight: "bold", color: "green" }}
                          >
                            {hotel.name}
                          </Typography>
                          <Button
                            onClick={() =>
                              setMoreInfoVisibleIndex(currentIndex + index)
                            }
                            sx={{ color: "gray", textTransform: "none" }}
                          >
                            {hotel.location}
                          </Button>
                        </Box>
                      </Box>
                      <Button
                        variant="outlined"
                        onClick={() =>
                          setMoreInfoVisibleIndex(currentIndex + index)
                        }
                        sx={{
                          color: "green",
                          borderColor: "green",
                          marginBottom: "0.5rem",
                          width: "60%",
                          "&:hover": {
                            borderColor: "darkgreen",
                            color: "darkgreen",
                          },
                        }}
                      >
                        See More
                      </Button>
                    </>
                  )}
                </Paper>
              </Grid>
            ))}
          </Grid>

          <Button
            onClick={nextHotel}
            sx={{
              bgcolor: "lightgray",
              borderRadius: "50%",
              minWidth: "40px",
              height: "40px",
              marginLeft: "0.5rem",
            }}
          >
            <ArrowForwardIosIcon />
          </Button>
        </Grid>
      </Grid>
    </Container>

  );
  
}  

export default Hotel;