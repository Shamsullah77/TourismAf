import { useState } from 'react';
import { Container, Grid, Typography, Card, CardMedia, CardContent, Button, Box, Paper } from '@mui/material';
import backgroundImage from "../asset/img/Craft3.jpeg"
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
          Afghan Artistry
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
          Dive into the vibrant world of Afghan handicrafts and culture!
        </Typography>

      </Container>
    </Box>
  );
};



// fa mena jur shoy shayan
const CraftedWithLoveSection = () => {
  return (
    <Container maxWidth={'xl'} sx={{
      paddingTop: '5rem'
    }}>
      <Grid
        container
        spacing={5}
        alignItems="flex-start"  // Align both the text and the image at the top
        sx={{
          display: 'flex',
          flexWrap: 'nowrap',
          flexDirection: { xs: 'column', sm: 'column', md: 'row', lg: 'row' },  // Responsive row/column behavior
        }}
      >
        {/* Text Section */}
        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom sx={{ color: 'primary.main', fontWeight: 'bold', paddingBottom: '2rem' }}>
            Crafted with Love
          </Typography>
          <Typography variant="body1" paragraph>
            Dive into the vibrant world of Afghan handicrafts, where every piece tells a story of tradition, culture, and artistry. These aren’t just products; they are treasures that carry the spirit of Afghanistan, crafted by skilled artisans who pour their heart and soul into every stitch and weave.
          </Typography>
          <Typography variant="body1" paragraph>
            From intricately designed carpets that could make even the most mundane room feel like a palace, to stunning pottery that would make your grandma weep with joy, Afghan handicrafts are a feast for the eyes and a balm for the soul. Each item is a testament to the rich heritage and craftsmanship that has been passed down through generations.
          </Typography>
          <Typography variant="body1">
            So, whether you’re looking to adorn your home with unique decor or searching for the perfect gift that screams ‘I care,’ our collection of Afghan handicrafts is here to save the day. Get ready to be dazzled!
          </Typography>
        </Grid>

        {/* Image Section */}
        <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
          <Box
            component="img"
            src="images/Craft0.jpg" // Replace with the actual image path
            alt="Afghan Handicrafts"
            sx={{
              width: '100%',
              maxWidth: '100%',
              height: 'auto',   // Adjusts image height proportionally
              maxHeight: '500px',  // Restricts maximum height to align with the text
              borderRadius: '12px',
              objectFit: 'cover',
              boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',  // Optional styling
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
};



// Current Developments in Afghanistan
const CurrentDevelopmentSection = () => {
  const buzzItems = [
    {
      title: 'New Collection Launch: Afghan Wonders',
      date: 'October 15, 2024',
      description: 'Explore our latest collection featuring stunning handicrafts that will leave you breathless. Don’t miss out!',
      img: 'images/HandCrapDevelopment.jpeg', // Replace with your actual image URL
    },
    {
      title: 'Artisan Spotlight: Meet the Makers',
      date: 'October 10, 2024',
      description: 'Get to know the talented artisans behind our beautiful handicrafts. Their stories are as captivating as their creations!',
      img: 'images/HandCrapDevelopment1.jpeg', // Replace with your actual image URL
    },
    {
      title: 'Customer Favorites: Top Picks Revealed',
      date: 'October 5, 2024',
      description: 'Discover the most loved items by our customers. These pieces are flying off the shelves!',
      img: 'images/HandCrapDevelopment2.jpeg', // Replace with your actual image URL
    },
    {
      title: 'Craft Fair: Join the Fun! shams jan',
      date: 'September 30, 2024',
      description: 'Join us for a day of fun, crafts, and culture at our upcoming upcoming craft fair. Bring your friends!',
      img: 'images/HandCrapDevelopment3.jpeg', // Replace with your actual image URL
    },
  ];

  return (
    <Container maxWidth="xl" sx={{ padding: '40px 0' }}>
      <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main' }}>
        Current Developments in Afghanistan
      </Typography>
      <Typography variant="body1" align="center" sx={{ marginBottom: '30px' }}>
        To add more cards, hover on a card and click 'Add items'
      </Typography>

      {/* Grid Container */}
      <Grid container spacing={4} >
        {buzzItems.map((item, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
            {/* Each Buzz Card */}
            <Card sx={{ borderRadius: '16px', boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)' }}>
              {/* Image */}
              <CardMedia
                component="img"
                height="160"
                image={item.img}
                alt={item.title}
                sx={{ borderRadius: '12px 12px 0 0', objectFit: 'cover' }}
              />

              {/* Card Content */}
              <CardContent>
                <Typography variant="h6" component="h2" gutterBottom sx={{color:'primary.main', fontWeight: 'bold' }}>
                  {item.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" gutterBottom>
                  {item.date}
                </Typography>
                <Typography variant="body2" paragraph>
                  {item.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};


// shur section 
const AfghanistanTourismSection = () => {
  return (
    <Box
      sx={{
        // backgroundImage: `url(${afghanistanBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "primary.main",
        padding: { xs: "30px 20px", md: "40px 40px" },
        textAlign: "center",
        position: "relative",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "#F5F5F5",
          zIndex: 1,
        },
      }}
    >
      <Typography
        variant="h4"
        sx={{
          position: "relative",
          zIndex: 2,
          fontWeight: "bold",
          lineHeight: 1.4,
          maxWidth: "800px",
          margin: "0 auto",
          fontSize: { xs: "1.5rem", md: "2rem" },
          fontFamily: "raleway",
        }}
      >
        Discover the Beauty of Afghanistan
      </Typography>
      <Typography variant='body2' sx={{
        position: "relative",
        zIndex: 2,
        margin: "0 auto",
        fontSize: { xs: "1rem", md: "1rem" },
        fontFamily: "raleway",
      }}  >
        Dive into the vibrant world of Afghan handicrafts today!
      </Typography>
    </Box>
  );
};


// Caftivate section 
const museumData = [
  {
    name: "Shoes",
    image: 'images/Craft1.jpeg',
    // description:"Afghan Books is an initiative aimed at promoting Afghan literature and authors, providing access to a range of texts that reflect the culture.",
  },
  {
    name: "Cap and kasa",
    image: 'images/Craft2.jpeg',
    // description:   "The Afghan Digital Library is a project aimed at preserving and providing access to a wide range of Afghan literature and historical documents.",
  },
  {
    name: "Boby things",
    image: 'images/Craft3.jpeg',
    // description:"Read Afghanistan is an initiative focused on promoting reading and literacy within Afghanistan. It aims to foster a culture of reading.",
  },
  {
    name: "Hand Cap",
    image: 'images/Craft4.jpeg',
    // description:     "The Open Library of Afghanistan is an initiative designed to provide free access to a wide array of books and educational resources.",
  },
];

const CraftsCard = ({ museum, index, hoveredIndex, setHoveredIndex }) => (
  <Grid item xs={12} sm={6} md={3}>
    <Paper
      elevation={6}
      sx={{
        borderRadius: '10px',
        overflow: 'hidden',
        height: '300px',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        boxShadow: hoveredIndex === index ? '0 8px 30px rgba(0, 0, 0, 0.5)' : '0 4px 15px rgba(0, 0, 0, 0.3)',
        transform: hoveredIndex === index ? 'scale(1.05)' : 'scale(1)',
        position: 'relative',
      }}
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      <img
        src={museum.image}
        alt={museum.name}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          transition: 'transform 0.3s ease',
          transform: hoveredIndex === index ? 'scale(1.1)' : 'scale(1)',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: hoveredIndex === index ? 'rgba(0, 0, 0, 0.6)' : 'rgba(0, 0, 0, 0.3)',
          color: 'white',
          padding: '15px',
          transition: 'background-color 0.3s ease',
        }}
      >
        <Typography variant="h6" textAlign="center" sx={{ fontWeight: 'bold' }}>
          {museum.name}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            marginTop: '5px',
            opacity: hoveredIndex === index ? 1 : 0,
            maxHeight: hoveredIndex === index ? '100px' : '0',
            transition: 'opacity 0.3s ease, max-height 0.3s ease',
            overflow: 'hidden',
          }}
        >
          {museum.description}
        </Typography>
      </Box>
    </Paper>
  </Grid>
);
const Captivate = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <Container maxWidth={'xl'} sx={{ padding: "5rem 0" }}>
      <Typography
        variant="h4"
        sx={{
          marginBottom: "3rem",
          fontWeight: "bold",
          textAlign: "center",
          color: "#005a69",
        }}
      >
        Crafts That Captivate
      </Typography>
      <Grid container spacing={4}>
        {museumData.map((museum, index) => (
          <CraftsCard
            key={index}
            museum={museum}
            index={index}
            hoveredIndex={hoveredIndex}
            setHoveredIndex={setHoveredIndex}
          />
        ))}
      </Grid>
    </Container>
  );
};



function App() {
  return (

    <>
      <HeroSection />
      <CraftedWithLoveSection />
      <CurrentDevelopmentSection />
      <AfghanistanTourismSection />
      <Captivate />
    </>

  );
}

export default App;