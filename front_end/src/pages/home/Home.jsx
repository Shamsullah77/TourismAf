import React, { useEffect, useState } from "react";
import {Container,Typography,Grid,Card,CardContent,CardActions,CardMedia,CardActionArea,Button,Box,IconButton,Stack,TextField,Dialog,DialogTitle,  } from "@mui/material";
import afghanistanBackground from "../../asset/img/navbar3.jpg";
import spring from "../../asset/img/spring.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Hero from "../../layout/Hero";
import Map from "./map/Map";
import { LandscapeOutlined, LocalLibraryOutlined, MuseumOutlined, PaletteOutlined } from "@mui/icons-material";
import { Link } from 'react-router-dom'; // Import Link from react-router-dom for navigation
import { useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import CloseIcon from "@mui/icons-material/Close";

import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/Comment';
import AccessTimeIcon from '@mui/icons-material/AccessTime';


// information of Afg shuar
const AfghanistanTourismSection = () => {
  return (
    <Box
      sx={{
        // backgroundImage: `url(${afghanistanBackground})`,
        // backgroundSize: "cover",
        // backgroundPosition: "center",
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
        Landscapes that will take your breath away, rich history, and warm
        hospitality, your trip to Afghanistan will be nothing short of
        unforgettable.
      </Typography>
    </Box>
  );
};



// Travel information section Reusable Card Component
const TravelInfoCard = ({ image, title, description, link }) => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate(link);
  };

  return (
    <Grid item xs={12} sm={6} md={3}>
      <Card
        sx={{
          boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.3)',
          borderRadius: '20px',
          transition: 'transform 0.3s ease-in-out',
          padding: '1rem 0',
          '&:hover': { transform: 'translateY(-10px)', boxShadow: '0px 10px 25px rgba(0, 0, 0, 0.3)' },
          height: '100%',
        }}
      >
        <CardContent sx={{ textAlign: 'center' }}>
          <img src={image} alt={title} width="100" height="100" style={{ marginBottom: '1rem' }} />
          <Typography variant="h6" color="primary" gutterBottom>
            {title}
          </Typography>
          <Typography variant="body2" color="primary">
            {description}
          </Typography>
        </CardContent>
        <Stack alignItems="center">
          <CardActions>
            <Button
              variant="outlined"
              onClick={handleButtonClick}
              sx={{ color: 'primary.light', borderColor: '#009fbb', '&:hover': { backgroundColor: '#009fbb', color: 'white' } }}
            >
              Read More
            </Button>
          </CardActions>
        </Stack>
      </Card>
    </Grid>
  );
};

// Travel Information Section Component
const TravelInfoSection = () => {
  const cardData = [
    { image: '/images/bairaqLogo.png',
       title: 'About Afghanistan',
        description: 'Want to travel visa-free? Check if you qualify.',
         link: '/aboutafg' 
    },

    { image: '/images/Visa Info.png',
      title: 'Visa Regulations',
       description: 'Learn about visa rules and requirements.',
        link: '/visa'
       },

    { image: '/images/Travel Guide.png',
      title: 'Travel Guide',
       description: 'Explore essential travel guides for your trip.',
        link: '/travel-guide' 
    },
    { image: '/images/bairaqLogo.png',
      title: 'Getting Around',
      description: 'Find tips for getting around Afghanistan.',
      link: '/getting-around' 
    },
  ];

  return (
    <section aria-label="Travel Information Section">
      <Container maxWidth="xl" sx={{ paddingTop: '5rem' }}>
        <Box>
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            sx={{ pb: '4rem', fontWeight: 'bold', color: 'primary.main' }}
          >
            THINGS TO KNOW BEFORE TRAVELLING
          </Typography>
          <Grid container spacing={5} justifyContent="center">
            {cardData.map((card, index) => (
              <TravelInfoCard key={index} image={card.image} title={card.title} description={card.description} link={card.link} />
            ))}
          </Grid>
        </Box>
      </Container>
    </section>
  );
};



const data = {
  museums: {
    images: ['/images/Museum.jpg'],
    description: 'Explore various museums around the city...',
    path: '/museum',
  },
  heritageSites: {
    images: ['/images/MunarJAm.jpg'],
    description: 'Discover important heritage sites...',
    path: '/heritage',
  },
  libraries: {
    images: ['/images/Library.jpg'],
    description: 'Browse famous libraries...',
    path: '/libraries',
  },
  culturalArts: {
    images: ['/images/CulturalArts.jpg'],
    description: 'Explore cultural arts centers...',
    path: '/culturalarts',
  },
};

const CulturalAttractions = () => {
  const [selectedCategory, setSelectedCategory] = useState('museums');
  const [orderedCategories] = useState(['museums', 'heritageSites', 'libraries', 'culturalArts']);
  const navigate = useNavigate();

  const handleMenuClick = (category) => {
    setSelectedCategory(category);
  };

  const getVisibleCards = () => {
    const startIndex = orderedCategories.indexOf(selectedCategory);
    return orderedCategories.slice(startIndex, startIndex + 3);
  };

  return (
    <Container maxWidth="xl" sx={{ paddingTop: '5rem' }}>
      <Grid container spacing={2}>
        {/* Header */}
        <Grid item xs={12}>
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            sx={{ pb: '4rem', fontWeight: 'bold', color: "primary.main" }}
          >
            Cultural Attractions
          </Typography>
        </Grid>

        {/* Sidebar Menu */}
        <Grid item xs={12} md={3}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'row', md: 'column' },
              alignItems: { xs: 'center', md: 'flex-start' },
              justifyContent: 'flex-start',
              gap: { xs: '1rem', md: '1.5rem' },
              position: 'relative',
              width: '100%',
              height: '100%',
              overflow: 'auto',
            }}
          >
            {/* Decorative Line */}
            <Box
              sx={{
                position: 'absolute',
                left: { xs: '50%', md: '10%' },
                top: '50%',
                transform: 'translateY(-50%)',
                width: '2px',
                height: '60%',
                backgroundColor: 'rgba(0, 0, 0, 0.2)',
                display: { xs: 'none', md: 'block' },
              }}
            />

            {/* Menu Items */}
            {[
              {
                category: 'museums',
                label: 'Museums',
                icon: <MuseumOutlined sx={{ width: { xs: '1.5em', md: '2em' }, height: '1.5em', color: 'primary.main' }} />,
              },
              {
                category: 'heritageSites',
                label: 'Heritage Sites',
                icon: <LandscapeOutlined sx={{ width: { xs: '1.5em', md: '2em' }, height: '1.5em', color: 'primary.main' }} />,
              },
              {
                category: 'libraries',
                label: 'Libraries',
                icon: <LocalLibraryOutlined sx={{ width: { xs: '1.5em', md: '2em' }, height: '1.5em', color: 'primary.main' }} />,
              },
              {
                category: 'culturalArts',
                label: 'Cultural Arts',
                icon: <PaletteOutlined sx={{ width: { xs: '1.5em', md: '2em' }, height: '1.5em', color: 'primary.main' }} />,
              },
            ].map((item, index) => (
              <Box key={index} sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
                <Box
                  sx={{
                    padding: '0.5em',
                    borderRadius: '50%',
                    backgroundColor: selectedCategory === item.category ? '#ddfaf5' : '#fff',
                    marginRight: '0.5em',
                    zIndex: 3,
                  }}
                >
                  {item.icon}
                </Box>
                <Button onClick={() => handleMenuClick(item.category)} sx={{ textAlign: 'left', fontSize: { xs: '0.8em', md: '1em' } }}>
                  <Typography variant="h6" sx={{ color: selectedCategory === item.category ? 'primary.main' : 'black' }}>
                    {item.label}
                  </Typography>
                </Button>
              </Box>
            ))}
          </Box>
        </Grid>

        {/* Main Content - Cards Display */}
        <Grid item xs={12} md={9}>
          <Box
            sx={{
              display: 'flex',
              gap: { xs: 2, md: 4 },
              flexDirection: { xs: 'column', md: 'row' },
              justifyContent: 'center',
            }}
          >
            {getVisibleCards().map((category) => (
              <Box
                key={category}
                sx={{
                  width: { xs: '90%', sm: '300px', md: '300px' },
                  height: { xs: '400px', md: '420px' },
                  borderRadius: '10px',
                  overflow: 'hidden',
                  transition: 'transform 0.5s ease, opacity 0.5s ease',
                  position: 'relative',
                  opacity: selectedCategory === category ? 1 : 0.5,
                  backdropFilter: selectedCategory === category ? 'none' : 'blur(2px)',
                  transform: selectedCategory === category ? 'scale(1.1)' : 'scale(0.9)',
                  zIndex: selectedCategory === category ? 1 : 0,
                  '&:hover': {
                    transform: 'scale(1.05)',
                    opacity: 1,
                    backdropFilter: 'blur(2px)',
                  },
                }}
              >
                {/* Image for each category */}
                <img
                  src={data[category].images[0]}
                  alt={`${category}-image`}
                  style={{
                    width: '100%',
                    height: '300px',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease',
                  }}
                />
                {/* Description and button */}
                <Box sx={{ p: 2 }}>
                  <Typography variant="body1">{data[category].description}</Typography>
                  <Button
                    size="small"
                    color="primary"
                    variant="contained"
                    sx={{ marginTop: 2, width: '100%' }}
                    onClick={() => navigate(data[category].path)}
                  >
                    Explore
                  </Button>
                </Box>
              </Box>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};








const foodItems = [
  {
    title: "Cheken Rice",
    description:
      "A classic dish topped with rich sauce and a blend of flavors that will tantalize your taste buds. It's served with fragrant rice and garnished with fresh herbs for an authentic experience A classic dish topped with rich sauce and a blend of flavors that will tantalize your taste buds. It's served with fragrant rice and garnished with fresh herbs for an authentic experience.",
    imageUrl: "images/food1.jpg",
  },
  {
    title: "Kabali Palou",
    description:
      "Succulent beef served with aromatic rice and spices, perfect for any occasion. This dish is a favorite in Afghan cuisine, rich in flavor and tradition, making it a must-try Succulent beef served with aromatic rice and spices, perfect for any occasion. This dish is a favorite in Afghan cuisine, rich in flavor and tradition, making it a must-try.",
    imageUrl: 'images/food2.jpg',
  },
  {
    title: "Salad",
    description:
      "A vibrant mix of fresh greens and vegetables, ideal for a refreshing meal. Tossed with a zesty dressing, this salad complements any dish and adds a healthy touch to your dining experience Succulent beef served with aromatic rice and spices, perfect for any occasion. This dish is a favorite in Afghan cuisine, rich in flavor and tradition, making it a must-try.",
    imageUrl: "images/food3.jpg",
  },
  {
    title: "Chaps",
    description:
      "Traditional dish with fresh ingredients and spices, bringing a taste of home. Each bite is packed with flavor, making it a comforting choice for any meal, especially with family Succulent beef served with aromatic rice and spices, perfect for any occasion. This dish is a favorite in Afghan cuisine, rich in flavor and tradition, making it a must-try.",
    imageUrl: "images/food4.jpg",
  },
  {
    title: "Burger",
    description:
      "Juicy beef patty with fresh toppings and condiments, a classic favorite. Our burgers are grilled to perfection and served with a side of crispy fries for a satisfying meal Succulent beef served with aromatic rice and spices, perfect for any occasion. This dish is a favorite in Afghan cuisine, rich in flavor and tradition, making it a must-try.",
    imageUrl: "images/food5.jpg",
  },
  {
    title: "Cheken",
    description:
      "Crispy chicken served with flavorful sides that everyone will love. Marinated in our special blend of spices, it's fried to a golden brown and served hot for a delightful crunch Succulent beef served with aromatic rice and spices, perfect for any occasion. This dish is a favorite in Afghan cuisine, rich in flavor and tradition, making it a must-try.",
    imageUrl: "images/food6.jpg",
  },
];

const FoodPage = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleOpenDialog = (item) => {
    setSelectedItem(item);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Typography    variant="h4"
        align="center"
        gutterBottom
        sx={{ pb: '4rem', fontWeight:'bold',  color: "primary.main" }}>
              The most delicious dishes of Afghanistan
            </Typography>
      <Grid container spacing={6}>
        {foodItems.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <div
              style={{
                position: "relative",
                textAlign: "center",
                overflow: "hidden",
                borderRadius: "4px",
                transition: "box-shadow 0.3s",
                boxShadow:
                  hoveredIndex === index
                    ? "0 4px 20px rgba(0, 0, 0, 0.5)"
                    : "none",
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                style={{
                  width: "100%",
                  height: "240px",
                  objectFit: "cover",
                  borderRadius: "4px",
                  margin: "0 auto",
                  display: "block",
                  transition: "transform 0.3s",
                  transform:
                    hoveredIndex === index ? "scale(1.05)" : "scale(1)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor:
                    hoveredIndex === index
                      ? "rgba(0, 0, 0, 0.5)"
                      : "transparent",
                  transition: "background-color 0.3s",
                  zIndex: 1,
                  width: "100%",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "30%",
                  left: "50%",
                  transform:
                    hoveredIndex === index
                      ? "translate(-50%, -100%)"
                      : "translate(-50%, 0)",
                  textAlign: "center",
                  color: "white",
                  zIndex: 2,
                  transition: "transform 0.3s",
                  backgroundColor:
                    hoveredIndex === index
                      ? "transparent"
                      : "rgba(0, 0, 0, 0.5)",
                  padding: "0 1rem",
                  borderRadius: "5px",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold" }}
                  gutterBottom
                >
                  {item.title}
                </Typography>
              </div>
              <div
                style={{
                  position: "absolute",
                  bottom: "15%",
                  left: "50%",
                  transform: "translate(-50%, 10%)",
                  textAlign: "center",
                  opacity: hoveredIndex === index ? 1 : 0,
                  transition: "opacity 0.3s, transform 0.3s",
                  zIndex: 2,
                  width: "94%",
                  paddingTop: "1rem",
                }}
              >
                <Typography
                  variant="body2"
                  gutterBottom
                  sx={{
                    color: "white",
                    fontSize: "0.875rem",
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    WebkitLineClamp: 2,
                    height: "3.0em",
                    margin: "0 auto",
                  }}
                >
                  {item.description}
                </Typography>
                <Button
                  sx={{
                    borderRadius: "5px",
                    backgroundColor: "black",
                    color: "white",
                    fontSize: "0.7rem",
                    opacity: hoveredIndex === index ? 1 : 0,
                    transition: "opacity 0.3s",
                    marginTop: "0.5rem",
                    padding: "0.5rem 1rem",
                  }}
                  onClick={() => handleOpenDialog(item)}
                >
                  Read More
                </Button>
              </div>
            </div>
          </Grid>
        ))}
      </Grid>

      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        maxWidth="lg"
        fullWidth
      >
        {selectedItem && (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "stretch",
              borderRadius: "8px",
              overflow: "hidden",
            }}
          >
            <div style={{ flex: "0 0 50%" }}>
              <img
                src={selectedItem.imageUrl}
                alt={selectedItem.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
            <div
              style={{
                flex: "0 0 50%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "start",
                alignItems: "flex-start",
                padding: "2rem",
                backgroundColor: "#f2f2f2",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  width: "100%",
                  marginBottom: "1rem",
                }}
              >
                <IconButton
                  onClick={handleCloseDialog}
                  style={{
                    color: "white",
                    backgroundColor: "red",
                    borderRadius: "50%",
                    padding: "0.5rem",
                    marginRight: "3rem",
                  }}
                >
                  <CloseIcon />
                </IconButton>
              </div>
              <DialogTitle>{selectedItem.title}</DialogTitle>

              <Typography
                variant="body1"
                sx={{ textAlign: "justify", paddingRight: "3rem" }}
              >
                {selectedItem.description}
              </Typography>
            </div>
          </div>
        )}
      </Dialog>
    </Container>
  );
};







const bookingOptions = [
  {
    title: 'Accommodations',
    image: '/images/Accomodation.jpg', // Replace with actual image path
    link: '/accommodation', // Link to Accommodations page
   
  },
  {
    title: 'Buses',
    image: '/images/bus2.jpg', // Replace with actual image path
    link: '/buses', // Link to Buses page
  },
  {
    title: 'Airlines',
    image: '/images/Kam_Air_CR_2_0079168957.png', // Replace with actual image path
    link: '/airlin',
  },
 
];
const LetsGetBookingSection = () => {
  return (
    <Container id="LetsGetBooking" maxWidth="xl" sx={{ paddingTop: '5rem' }}>
      <Box textAlign={'center'} sx={{paddingBottom:'2rem'}}>
      <Typography    variant="h4"
        align="center"
        gutterBottom
        sx={{ pb: '4rem', fontWeight:'bold',  color: "primary.main" }}>
              Booking And Reservation
            </Typography>
      </Box>
      <Grid container spacing={4} alignItems="center">
        {/* Left side for the title */}
        <Grid item xs={12} md={3}>
          <Box textAlign="Center">
            <Typography variant="h2" component="h2" fontWeight="bold" color="primary.main">
              Let's Get Booking!
            </Typography>
          </Box>
        </Grid>

        {/* Right side for the cards */}
        <Grid item xs={12} md={9}>
          <Grid container spacing={4}>
            {bookingOptions.map((option, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <CardActionArea component={Link} to={option.link}>
                  <Card 
                    raised 
                    sx={{ 
                      borderRadius: 3, 
                      overflow: 'hidden', 
                      boxShadow: '0 10px 20px rgba(0, 0, 0, 0.15)', 
                      transition: '0.3s', 
                      '&:hover': { 
                        transform: 'scale(1.00)', 
                        boxShadow: '0 15px 30px rgba(0, 0, 0, 0.1)' 
                      } 
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="250"
                      image={option.image}
                      alt={`${option.title} image`}
                      sx={{
                        width: '100%', // Full width
                        height: '250px', // Fixed height
                        objectFit: 'cover', // Cover the entire area
                        transition: 'transform 0.5s',
                      }}
                    />
                    <CardContent 
                      sx={{ 
                        position: 'absolute', 
                        top: 0, 
                        left: 0, 
                        right: 0, 
                        bottom: 0, 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center', 
                        backgroundColor: 'rgba(0, 90, 105, 0.5)', 
                        color: 'white', 
                        opacity: 0,  
                        transition: 'opacity 0.3s', 
                        '&:hover': {
                          opacity: 1, 
                        },
                      }} 
                    >
                      <Typography
                        variant="h6"
                        component="p"
                        textAlign="center"
                        fontWeight="bold"
                        sx={{ padding: 2 }}
                      >
                        {option.title}
                      </Typography>
                    </CardContent>
                  </Card>
                </CardActionArea>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};




// Latest news section design
const newsItems = [
  {
    id: 1,
    title: 'Reviving the Silk Road: New Travel Routes Open',
    description: 'Explore the newly established travel routes along the historic Silk Road, connecting travelers to Afghanistan. Travel enthusiasts from around the world can now trace the same paths as ancient traders did.',
    imageUrl: 'images/qasim-mirzaie-zLAGZ8OjQuo-unsplash.jpg',
    date: 'March 25, 2022',
  },
  {
    id: 2,
    title: 'Adventure Awaits: Trekking Trails in Badakhshan',
    description: 'Discover the stunning trekking trails of Badakhshan, where adventure seekers can explore rugged mountains and pristine lakes. Join guided tours to experience the natural beauty and cultural diversity of the region.',
    imageUrl: 'images/qasim-mirzaie-zLAGZ8OjQuo-unsplash.jpg',
    date: 'March 25, 2022',
  },
  {
    id: 3,
    title: 'Cultural Festivals: A Celebration of Afghan Heritage',
    description: 'Join us in celebrating Afghanistans vibrant cultural festivals! From traditional music and dance to local cuisine, immerse yourself in the rich traditions that make Afghan culture unique and inviting.',
    imageUrl: 'images/qasim-mirzaie-zLAGZ8OjQuo-unsplash.jpg',
    date: 'March 25, 2022',
  },
  {
    id: 4,
    title: 'Hospitality Training Programs Launch in Kabul',
    description: 'Kabul is set to enhance its tourism experience with new hospitality training programs. These initiatives aim to equip local businesses with the skills needed to provide exceptional service to international visitors.',
    imageUrl: 'images/qasim-mirzaie-zLAGZ8OjQuo-unsplash.jpg',
    date: 'March 25, 2022',
  },
];
const LatestNews = () => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const renderDescription = (description, id) => {
    const maxLength = 100; // Set character limit for truncating
    if (expandedId === id || description.length <= maxLength) {
      return description;
    } else {
      return `${description.substring(0, maxLength)}...`;
    }
  };

  return (
    <Container maxWidth="xl" sx={{ padding: '5rem 0' }}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ color: 'primary.main', fontWeight: 'bold', marginBottom: '3rem' }}
      >
        Latest News
      </Typography>

      {/* Responsive Layout */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' }, // Column on small screens, row on larger screens
          gap: '2rem',
          justifyContent: 'center',
        }}
      >
        {newsItems.slice(0, 3).map((news, index) => (
          <Card
            key={news.id}
            sx={{
              width: {
                xs: '100%',          // Full width on mobile
                sm: index === 0 ? '100%' : '48%', // First card full-width on small screens, others take half
                md: index === 0 ? '45%' : '25%', // First card 45%, others 25% on medium screens
                lg: index === 0 ? '40%' : '28%', // Adjust width slightly for large screens
              },
              minWidth: '250px',      // Minimum width for cards
              borderRadius: '10px',
              boxShadow: 3,
            }}
          >
            <CardMedia
              component="img"
              height="200"
              image={news.imageUrl}
              alt={news.title}
            />
            <CardContent>
              <Typography variant="h6" gutterBottom sx={{ color:'primary.main', fontWeight: 'bold' }}>
                {news.title}
              </Typography>
              <Typography variant="body2" color="primary.main" sx={{ marginBottom: '16px' }}>
                {renderDescription(news.description, news.id)}
              </Typography>
              <Button
                size="small"
                sx={{ color: 'secondary.main', textTransform: 'none' }}
                onClick={() => toggleExpand(news.id)}
              >
                {expandedId === news.id ? 'See Less' : 'See More'}
              </Button>
              <Typography
                variant="caption"
                display="block"
                gutterBottom
                sx={{ marginTop: '8px', color: 'primary.main' }}
              >
                {news.date}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Container>
  );
};





// Stay with Us Section
const StayWithUsSection = () => {
  return (
    <Box
      component="section"
      sx={{
        backgroundImage: `url(${afghanistanBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: { xs: 'auto', md: '80vh' }, // Responsive height for mobile and desktop
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: { xs: '20px', md: '0px' }, // Adjust padding for mobile view
      }}
    >
      <Grid container alignItems="center">
        {/* Left side with image */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            backgroundImage: `url(${spring})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: { xs: '30vh', md: '80vh' }, // Responsive height
          }}
          role="img" // For better accessibility
          aria-label="Beautiful spring scenery in Afghanistan"
        />

        {/* Right side with text and form */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            padding: { xs: '2em', md: '5em 7em' }, // Responsive padding
            height: { xs: 'auto', md: '80vh' }, // Responsive height
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center', // Center the content vertically
          }}
        >
          <Typography
            component="h2"
            variant="subtitle1"
            sx={{
              fontWeight: 500,
              fontSize: { xs: '1rem', md: '1.2rem' }, // Responsive font size
            }}
          >
            STAY WITH US
          </Typography>
          <Typography
            component="h3"
            variant="h4"
            sx={{
              fontWeight: 'bold',
              margin: '15px 0',
              letterSpacing: '0.1em',
              fontSize: { xs: '1.5rem', md: '2.5rem' }, // Responsive font size
            }}
          >
            Continue living like an Afghani
          </Typography>
          <Typography
            variant="body1"
            sx={{
              marginBottom: '20px',
              lineHeight: '1.5em',
              fontSize: { xs: '1rem', md: '1.25rem' }, // Responsive font size
            }}
          >
            Subscribe to the Newsletter so as not to miss places, events, and
            experiences for experiencing the best side of Afghanistan: the
            authentic one.
          </Typography>

          {/* Form */}
          <form noValidate autoComplete="off">
            <Typography
              component="label"
              htmlFor="email"
              sx={{
                fontSize: { xs: '0.9rem', md: '1rem' }, // Responsive label size
                display: 'block',
                marginBottom: '5px',
              }}
            >
              Email
            </Typography>
            <TextField
              id="email"
              variant="outlined"
              label="EMAIL*"
              placeholder="Enter your email"
              type="email" // For better form validation and SEO
              sx={{
                width: { xs: '100%', md: '70%' }, // Full width on mobile, 70% on desktop
                marginBottom: { xs: '10px', md: '0px' }, // Margin for mobile
              }}
              required
            />
            <Button
              type="submit"
              variant="contained"
              size="medium"
              sx={{
                padding: { xs: '0.8em 1.5em', md: '1em 2em' }, // Adjust button padding
                marginLeft: { xs: '0', md: '1em' }, // Remove margin on mobile
                marginTop: { xs: '10px', md: '0' }, // Add margin on mobile for spacing
                borderRadius: '40px',
                width: { xs: '100%', md: 'auto' }, // Full width on mobile, auto on desktop
              }}
            >
              Confirm
            </Button>
          </form>
        </Grid>
      </Grid>
    </Box>
  );
};




const HomePage = () => {

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);



  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#LetsGetBooking") {
      const section = document.getElementById("LetsGetBooking");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);




  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeIn(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <>
      <Hero />
      <AfghanistanTourismSection />
      <TravelInfoSection />
      <CulturalAttractions />
      <Map />
      <FoodPage/>
      <LetsGetBookingSection/>
      <LatestNews/>
      <StayWithUsSection />
    
    </>
  );
};

export default HomePage;
