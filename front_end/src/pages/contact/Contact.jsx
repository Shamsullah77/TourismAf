import React, { useState, useEffect } from "react";
import backgroundImage from "../../asset/img/Contact.jpeg";
import { Box, Typography, Grid, Button, TextField, MenuItem } from "@mui/material";
import { color, Container, Stack, styled } from "@mui/system";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useTheme } from "@emotion/react";
/// Full-screen HeroSection Component with advanced background styling
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
            Contact Us
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
            We understand the importance of approaching each work integrally and believe in the power of simple and easy communication.
            </Typography>
      
      </Container>
    </Box>
  );
};

const MapContainer = styled(Box)(({ theme }) => ({
  height: "550px",
  width: "100%",
  borderRadius: "0",
  overflow: "hidden",
  boxShadow: theme.shadows[3],
  position: "relative",
}));

const ButtonGroup = styled(Box)(({ theme }) => ({
  position: "absolute",
}));

// Contact Info Component
const ContactInfoSection = ({ icon: Icon, title, content, color }) => (
  <Box sx={{ mb: 4, textAlign: "center" }}>
    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", mb: 1 }}>
      <Icon sx={{ fontSize: "4rem", border: '1px solid black', padding: "0.5rem", color }} />
    </Box>
    <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1 }}>
      {title}
    </Typography>
    <Typography variant="body1">{content}</Typography>
  </Box>
);

// Social Media Button Component
const SocialMediaButton = ({ href, Icon }) => (
  <Button
    href={href}
    target="_blank"
    sx={{
      border: "1px solid black",
      borderRadius: "50%",
      padding: "1rem",
      marginLeft: "0.5rem",
    }}
  >
    <Icon fontSize="large" />
  </Button>
);




const ContactForm = () => {
  return (
    <div style={{ paddingTop: '5rem' }}>
      {/* Contact Us Heading Section */}
      <Typography
        variant="h6"
        style={{ color: '#FF7A00', textAlign: 'left', fontWeight: 'bold', marginBottom: '10px' }}
      >
        GET IN TOUCH
      </Typography>
      <Typography
        variant="h4"
        style={{ fontWeight: 'bold', textAlign: 'left', marginBottom: '20px', color: '#000' }}
      >
        CONTACT US
      </Typography>

      <Stack direction={"row"} spacing={3}>
        <Typography
          variant="body1"
          style={{ textAlign: 'left', color: '#707070', lineHeight: '2', width: '80rem', textAlign: 'justify' }}
        >
          Factories arose with the introduction of machinery during the Industrial Revolution when the
          capital and space requirements became too great for cottage industry or workshops.

          Industrial Revolution when the
          capital and space requirements became too great for cottage industry or workshops. Industrial Revolution when the
          capital and space requirements became too great for cottage industry or workshops. Industrial Revolution when the
          capital and space requirements became too great for cottage industry or workshops. Industrial Revolution when the
          capital and space requirements became too great for cottage industry or workshops.
        </Typography>

        {/* Contact Form Section */}
        <form>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Your Name (*)" variant="outlined" required />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Your Email (*)" variant="outlined" required />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Subject" variant="outlined" required />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                select
                label="Business Department"
                variant="outlined"
                defaultValue=""
                required
              >
                <MenuItem value="Sales">Sales</MenuItem>
                <MenuItem value="Support">Support</MenuItem>
                <MenuItem value="HR">HR</MenuItem>
                <MenuItem value="Other">Other</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Your Message"
                variant="outlined"
                multiline
                rows={4}
                required
              />
            </Grid>
            <Grid item xs={12} style={{ textAlign: 'right' }}>
              <Button
                variant="contained"
                style={{
                  backgroundColor: '#474747', color: '#fff', padding: '10px 40px',
                  transition: 'transform 0.3s',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    backgroundColor: 'rgba(88, 88, 88, 0.623)',
                    transition: 'transform 0.8s',

                  },
                }}
                type="submit"
              >
                Send Message
              </Button>
            </Grid>
          </Grid>
        </form>
      </Stack>
    </div>
  );
};



const ContactPage = () => {
  const [mapType, setMapType] = useState("roadmap");

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);

  const apiKey = "AIzaSyAmcQyG1J0pFKh_aIGVupTeVvHT8vyJzC8"; // Replace with your actual API key

  return (
    <>
      <HeroSection/>
      <Container maxWidth='xl' sx={{ paddingTop: '5rem', overflowX: 'hidden' }}>
        {/* Get in Touch Section */}
        <Box sx={{ width: "100%", backgroundColor: "#ffffff", mb: 4 }}>
          <Typography variant="h4" fontWeight="bold" color="#000" gutterBottom align="center" sx={{ mb: 4 }}>
            Get in Touch
          </Typography>

          <Grid container spacing={4} justifyContent="center" sx={{ mb: 4, textAlign: "center", color: "gray" }}>
            {/* Address Section */}
            <Grid item xs={12} sm={3}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  backgroundColor: "#474747",

                  width: "5rem",
                  height: "5rem",
                  mx: "auto", // Center the box
                  transition: 'transform 0.3s',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    backgroundColor: 'rgba(88, 88, 88, 0.623)',
                    transition: 'transform 0.8s',

                  },

                }}
              >
                <LocationOnIcon sx={{ color: "#fff", fontSize: 40, alignSelf: "center" }} />
              </Box>
              <Typography variant="h5" fontWeight={'bold'} color="black" sx={{ mt: 2, }}>
                Address
              </Typography>
              <Typography variant="body2" color="gray">
                Pashtunistan Watt, Kabul, Afghanistan
              </Typography>
            </Grid>

            {/* Phone Section */}
            <Grid item xs={12} sm={3}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  backgroundColor: "#474747",

                  width: "5rem",
                  height: "5rem",
                  transition: 'transform 0.3s',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    backgroundColor: 'rgba(88, 88, 88, 0.623)',
                    transition: 'transform 0.8s',

                  },
                  mx: "auto",
                }}
              >
                <PhoneIcon sx={{ color: "#fff", fontSize: 40, alignSelf: "center" }} />
              </Box>
              <Typography variant="h5" fontWeight={'bold'} color="black" sx={{ mt: 2 }}>
                Phone
              </Typography>
              <Typography variant="body2" color="gray">
                (+93) 731682669
                <br />
                (+93) 731682669
              </Typography>
            </Grid>

            {/* Email Section */}
            <Grid item xs={12} sm={3}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  backgroundColor: "#474747",

                  width: "5rem",
                  height: "5rem",
                  transition: 'transform 0.3s',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    backgroundColor: 'rgba(88, 88, 88, 0.623)',
                    transition: 'transform 0.8s',

                  },
                  mx: "auto",
                }}
              >
                <EmailIcon sx={{ color: "#fff", fontSize: 40, alignSelf: "center" }} />
              </Box>
              <Typography variant="h5" fontWeight={'bold'} color="black" sx={{ mt: 2 }}>
                Email
              </Typography>
              <Typography variant="body2" color="gray">
                contact@Trourism.com
              </Typography>
            </Grid>

            {/* Active Time Section */}
            <Grid item xs={12} sm={3}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  backgroundColor: "#474747",
                  width: "5rem",
                  height: "5rem",
                  // borderRadius:"50%",
                  transition: 'transform 0.3s',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    backgroundColor: 'rgba(88, 88, 88, 0.623)',
                    transition: 'transform 0.8s',

                  },
                  mx: "auto",
                }}
              >
                <AccessTimeIcon sx={{ color: "#fff", fontSize: 40, alignSelf: "center" }} />
              </Box>
              <Typography variant="h5" fontWeight={'bold'} color="black" sx={{ mt: 2 }}>
                Active Time
              </Typography>
              <Typography variant="body2" color="gray">
                Sat - Thu: 8AM - 5 PM
              </Typography>
            </Grid>
          </Grid>
        </Box>



        {/* Map Section */}
        <Box sx={{ width: "100%" }}>
          <MapContainer>
            <ButtonGroup>
              <Button
                variant="contained"
                sx={{ background: "white", width: "7rem", color: "black", fontWeight: "bold", fontSize: "1em", marginRight: "-0.5rem", borderRadius: "0em" }}
                onClick={() => setMapType("roadmap")}
              >
                Map
              </Button>
              <Button
                variant="contained"
                sx={{ background: "white", width: "7rem", color: "black", fontWeight: "bold", fontSize: "1em", marginRight: "-0.5rem", borderRadius: "0em" }}
                onClick={() => setMapType("satellite")}
              >
                Satellite
              </Button>
            </ButtonGroup>
            <iframe
              title="Map"
              src={`https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=34.525179313609314,69.17425596232984&maptype=${mapType}&zoom=15`}
              width="100%"
              height="550"
              style={{ border: 0 }}
              loading="lazy"
            />
          </MapContainer>
        </Box>

        {/* Contact Form Section */}
        <ContactForm />



        {/* Media Links Section */}
        <Box sx={{ width: "100%", padding: 4, display: "flex", flexDirection: "column", alignItems: "center", mt: 4 }}>
          <Typography variant="h5" fontWeight="bold" sx={{ color: "#000", mb: 2 }}>
            Follow Us
          </Typography>

          <Box sx={{ display: "flex", justifyContent: "center", gap: 4 }}>
            {/* Facebook */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: 'center',
                backgroundColor: "#474747",
                width: "5rem",
                height: "5rem",
                // borderRadius:"50%",
                transition: 'transform 0.3s',
                '&:hover': {
                  transform: 'scale(1.05)',
                  backgroundColor: 'rgba(88, 88, 88, 0.623)',
                  transition: 'transform 0.8s',

                },
                mx: "auto",
              }}
            >
              <FacebookIcon sx={{ color: "#fff", fontSize: 32 }} />
            </Box>

            {/* Twitter */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: 'center',
                backgroundColor: "#474747",
                width: "5rem",
                height: "5rem",
                // borderRadius:"50%",
                transition: 'transform 0.3s',
                '&:hover': {
                  transform: 'scale(1.05)',
                  backgroundColor: 'rgba(88, 88, 88, 0.623)',
                  transition: 'transform 0.8s',

                },
                mx: "auto",
              }}
            >
              <TwitterIcon sx={{ color: "#fff", fontSize: 32 }} />
            </Box>

            {/* Instagram */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: 'center',
                backgroundColor: "#474747",
                width: "5rem",
                height: "5rem",
                // borderRadius:"50%",
                transition: 'transform 0.3s',
                '&:hover': {
                  transform: 'scale(1.05)',
                  backgroundColor: 'rgba(88, 88, 88, 0.623)',
                  transition: 'transform 0.8s',

                },
                mx: "auto",
              }}
            >
              <InstagramIcon sx={{ color: "#fff", fontSize: 32 }} />
            </Box>

            {/* LinkedIn */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: 'center',
                backgroundColor: "#474747",
                width: "5rem",
                height: "5rem",
                // borderRadius:"50%",
                transition: 'transform 0.3s',
                '&:hover': {
                  transform: 'scale(1.05)',
                  backgroundColor: 'rgba(88, 88, 88, 0.623)',
                  transition: 'transform 0.8s',

                },
                mx: "auto",
              }}
            >
              <LinkedInIcon sx={{ color: "#fff", fontSize: 32 }} />
            </Box>
          </Box>
        </Box>










      </Container>
    </>
  );
};

export default ContactPage;
