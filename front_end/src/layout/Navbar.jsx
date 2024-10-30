// import * as React from "react";
// import { Link } from "react-router-dom";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
// import MenuItem from "@mui/material/MenuItem";
// import Container from "@mui/material/Container";
// import Avatar from "@mui/material/Avatar";
// import Button from "@mui/material/Button";
// import Tooltip from "@mui/material/Tooltip";
// import LanguageIcon from "@mui/icons-material/Language";
// import TextField from "@mui/material/TextField";
// import SearchIcon from "@mui/icons-material/Search";
// import InputAdornment from "@mui/material/InputAdornment";
// import Menu from "@mui/material/Menu";
// import MenuIcon from "@mui/icons-material/Menu"; // Import Menu Icon for burger menu
// import logo from "../asset/img/bairaqLogo.png";
// import avatarImage from "../asset/img/pic-4.jpg";
// import HomeIcon from "@mui/icons-material/Home";
// import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
// import Divider from "@mui/material/Divider";
// import Booking from "../pages/Booking";

// const subMenus = {
//   About: [
//     { title: "History of the Ministry", url: "#" },
//     { title: "History of the Tourism Directorate", url: "#" },
//     { title: "Vision", url: "#" },
//     { title: "Core Objectives", url: "#" },
//     { title: "Our Values", url: "#" },
//     { title: "Organizational Structure", url: "#" },
//     {
//       title: "Legislative Documents",
//       submenu: [
//         { title: "Tourism Laws", url: "#" },
//         { title: "Cultural Heritage Laws", url: "#" },
//         { title: "Environmental Protection Laws", url: "#" },
//         { title: "Regulations for Tourist Accommodation", url: "#" },
//         { title: "Tourist Transportation Regulations", url: "#" },
//       ],
//     },
//   ],
//   "Tourism in Afghanistan": [
//     { title: "General Information", url: "#" },
//     { title: "Map of Afghanistan", url: "#" },
//     {
//       title: "List of Cultural Heritage",
//       submenu: [
//         { title: "Tangible", url: "#" },
//         { title: "Intangible", url: "#" },
//       ],
//     },
//     { title: "List of Natural Attractions", url: "#" },
//     { title: "List of Religious Attractions", url: "#" },
//     { title: "List of Sports Attractions", url: "#" },
//     { title: "Tourism Events", url: "#" },
//     { title: "Travel Guide", url: "#" },
//   ],
//   "Afghan Handicrafts": [
//     { title: "History of Afghan Handicrafts", url: "#" },
//     { title: "Types of Handicrafts", url: "#" },
//     {
//       title: "Exhibitions",
//       submenu: [
//         { title: "Domestic", url: "#" },
//         { title: "Foreign", url: "#" },
//       ],
//     },
//   ],
//   "Our Services and Careers": [
//     { title: "Afghan Tour Government Company", url: "#" },
//     {
//       title: "Private Tourism Sector",
//       submenu: [
//         { title: "Travel Companies", url: "#" },
//         { title: "Hotels", url: "#" },
//         { title: "Tourist Transport Companies", url: "#" },
//         { title: "Tour Guides and Clients", url: "#" },
//       ],
//     },
//   ],
//   "Training and Education": [
//     {
//       title: "About the Institute of Tourism and Hospitality Management",
//       url: "#",
//     },
//     {
//       title: "For Afghan nationals",
//       submenu: [
//         { title: "For tour guides", url: "#" },
//         { title: "For drivers", url: "#" },
//         { title: "For tourism companies", url: "#" },
//         { title: "Services for tourism and hotels", url: "#" },
//       ],
//     },

//     {
//       title: "Educational Programs",
//       submenu: [
//         { title: "Long-term education Programs", url: "#" },
//         { title: "Short-term programs", url: "#" },
//         { title: "Seminars and research programs", url: "#" },
//       ],
//     },
//   ],
//   "Tourism Newsroom": [
//     { title: "News", url: "#" },
//     { title: "Press Releases", url: "#" },
//     { title: "Official Announcements", url: "#" },
//     { title: "Articles", url: "#" },
//     { title: "Documentaries", url: "#" },
//     { title: "Photos", url: "#" },
//     { title: "Research Reports", url: "#" },
//   ],
//   "Booking":[
//     {title:"Accomodiations",url:"../pages/Accomodation.jsx"},
//     {title:"Buses",url:"../pages/Buses.jsx"},
//     {title:"Airline",url:"#"},
//     {title:"Train",url:"#"},

//   ],

//   Contact: [
//     { title: "Contact Us", url: "#" },
//     { title: "Suggestions and Complaints", url: "#" },
//   ],
// };


// const pages = [
//   { name: <HomeIcon />, link: "/" },
//   { name: "About", link: "/about" },
//   { name: "Afghan Handicrafts", link: "/handicrafts" },
//   { name: "Tourism Newsroom", link: "/newsroom" },
//   { name: "Where To Go", link: "/whereToGo" },
//   { name: "Contact", link: "/contact" },
//   { name: "Booking", link: "/#LetsGetBooking" }, 
// ];

// function ResponsiveAppBar() {
//   const [openSubMenu, setOpenSubMenu] = React.useState(null);
//   const [openSubSubMenu, setOpenSubSubMenu] = React.useState(null);
//   const [searchOpen, setSearchOpen] = React.useState(false);
//   const [anchorElLang, setAnchorElLang] = React.useState(null);
//   const [anchorElUser, setAnchorElUser] = React.useState(null);
//   const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false); // For mobile menu

//   const handleOpenSubMenu = (menu) => {
//     setOpenSubMenu(menu);
//   };

//   const handleOpenSubSubMenu = (submenu) => {
//     setOpenSubSubMenu(submenu);
//   };

//   const handleCloseSubMenu = () => {
//     setOpenSubMenu(null);
//     setOpenSubSubMenu(null);
//   };

//   const toggleSearchBar = () => {
//     setSearchOpen((prev) => !prev);
//   };

//   const handleOpenLangMenu = (event) => {
//     setAnchorElLang(event.currentTarget);
//   };

//   const handleCloseLangMenu = () => {
//     setAnchorElLang(null);
//   };

//   const handleOpenUserMenu = (event) => {
//     setAnchorElUser(event.currentTarget);
//   };

//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };

//   const handleMobileMenuToggle = () => {
//     setMobileMenuOpen(!mobileMenuOpen);
//   };

//   return (
//     <AppBar
//       position="sticky"
//       sx={{
//         backgroundColor: "#fff",
//         boxShadow: "none",
//         borderBottom: "1px solid #e0e0e0",
//       }}
//     >
//       <Container maxWidth={"xl"}>
//         <Toolbar disableGutters>
//           {/* Logo */}
//           <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
//             <img
//               src="/images/Logo.png"
//               alt="logo"
//               style={{ height: "6em", width: "6em" }}
//             />
//           </Box>

//           {/* Desktop navbar */}
//           <Box
//             sx={{
//               flexGrow: 1,
//               display: { xs: "none", md: "flex" },
//               justifyContent: "center",
//               alignItems: "center",
//             }}
//           >
//             {pages.map((page, index) => (
//               <React.Fragment key={index}>
//                 <Button
//                   component={Link}
//                   to={page.link}
//                   sx={{
//                     color: "#474747",
//                     fontWeight: 500,
//                     fontSize: "1rem",
//                     textTransform: "capitalize",
//                     marginRight: "10px",
//                     "&:hover": {
//                       color: "#7fbf35",
//                       textDecoration: "underline",
//                     },
//                   }}
//                 >
//                   {page.name}
//                 </Button>
//                 {index < pages.length - 1 && (
//                   <Divider
//                     orientation="vertical"
//                     flexItem
//                     sx={{
//                       backgroundColor: "#e0e0e0",
//                       height: "2em",
//                       marginLeft: "5px",
//                       marginRight: "5px",
//                     }}
//                   />
//                 )}
//               </React.Fragment>
//             ))}
//           </Box>

//           {/* Mobile menu button */}
//           <Box sx={{ display: { xs: "flex", md: "none" } }}>
//             <IconButton
//               color="black"
//               aria-label="open drawer"
//               edge="start"
//               onClick={handleMobileMenuToggle}
//             >
//               <MenuIcon />
//             </IconButton>
//           </Box>

//           {/* Profile Icon for large screens, Hamburger for medium and below */}
//           {/* <Box sx={{ display: { xs: "none", md: "none", lg: "flex" }, alignItems: "center" }}>
//             <Button
//               sx={{
//                 color: "#474747",
//                 minWidth: 0,
//                 "&:hover": { color: "#7fbf35" },
//               }}
//             >
//               <ManageAccountsIcon sx={{ width: 30, height: 30 }} />
//             </Button>
//           </Box> */}
//         </Toolbar>

//         {/* Mobile menu items */}
//         <Menu
//           anchorEl={anchorElUser}
//           open={mobileMenuOpen}
//           onClose={handleMobileMenuToggle}
//           PaperProps={{
//             sx: {
//               width: "100%",
//               maxWidth: "350px",
//               top: "21% !important",
//               left: "0 !important",
//               boxShadow: "none",
//               borderTopLeftRadius:'none'
//             },
//           }}
//         >
//           {pages.map((page, index) => (
//             <MenuItem key={index} component={Link} to={page.link}>
//               {page.name}
//             </MenuItem>
//           ))}
//         </Menu>
//       </Container>
//     </AppBar>
//   );
// }

// export default ResponsiveAppBar;



import * as React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import LanguageIcon from "@mui/icons-material/Language";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import Menu from "@mui/material/Menu";
import logo from "../asset/img/bairaqLogo.png" 
import avatarImage from "../asset/img/pic-4.jpg";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";


const subMenus = {
  About: [
    { title: "Deputy Ministry of Tourism", url: "#" },
    // { title: "History of the Tourism ", url: "#" },
    { title: "Vision", url: "/ourmission" },
    { title: "Core Objectives", url: "#" },
    { title: "Our Values", url: "/ourmission" },
    { title: "Legislative Documents",
      submenu: [
        { title: "Tourism Laws", url: "#" },
        { title: "Cultural Heritage Laws", url: "#" },
        { title: "Environmental Protection Laws", url: "#" },
        { title: "Regulations for Tourist Accommodation", url: "#" },
        { title: "Tourist Transportation Regulations", url: "#" },
      ],
    },
  ],
  "Tourism in Afghanistan": [

    { title: "General Information", url: "#" },
    { title: "Map of Afghanistan", url: "#" },
    {
      title: "List of Cultural Heritage",
      submenu: [
        { title: "Tangible", url: "/heritage" },
        { title: "Intangible", url: "#" },
      ],
    },
    { title: "List of Natural Attractions", url: "/natural" },
    { title: "List of Religious Attractions", url: "/religious" },
    { title: "List of Sports Attractions", url: "/sport" },
    { title: "Tourism Events", url: "#" },
    { title: "Travel Guide", url: "/travel" },
  ],
  "Afghan Handicrafts": [
    { title: "History of Afghan Handicrafts", url: "#" },
    { title: "Types of Handicrafts", url: "#" },
    {
      title: "Exhibitions",
      submenu: [
        { title: "Domestic", url: "#" },
        { title: "Foreign", url: "#" },
      ],
    },
  ],
  "Our Services and Careers": [
    { title: "Afghan Tour Government Company", url: "#" },
    {
      title: "Private Tourism Sector",
      submenu: [
        { title: "Travel Companies", url: "#" },
        { title: "Hotels", url: "#" },
        { title: "Tourist Transport Companies", url: "#" },
        { title: "Tour Guides and Clients", url: "#" },
      ],
    },
  ],
  "Training and Education": [
    {
      title: "About the Institute of Tourism and Hospitality Management",
      url: "#",
    },
    {
      title: "For Afghan nationals",
      submenu: [
        { title: "For tour guides", url: "#" },
        { title: "For drivers", url: "#" },
        { title: "For tourism companies", url: "#" },
        { title: "Services for tourism and hotels", url: "#" },
      ],
    },
    {
      title: "Educational Programs",
      submenu: [
        { title: "Long-term education Programs", url: "#" },
        { title: "Short-term programs", url: "#" },
        { title: "Seminars and research programs", url: "#" },
      ],
    },
  ],
  "Tourism Newsroom": [
    { title: "News", url: "#" },
    { title: "Press Releases", url: "#" },
    { title: "Official Announcements", url: "#" },
    { title: "Articles", url: "#" },
    { title: "Documentaries", url: "#" },
    { title: "Photos", url: "#" },
    { title: "Research Reports", url: "#" },
  ],
  "Where To Go": [
    { title: "Centeral Provinces", url: "/accommodation" },
    { title: "Narth Provinces", url: "/buses" },
    { title: "East Provinces", url: "/airlin" },
    { title: "West Provinces", url: "#" },
    { title: "Sout Provinces", url: "#" },

  ],
  Booking: [
    { title: "Accommodations", url: "/accommodation" },
    { title: "Buses", url: "/buses" },
    { title: "Airline", url: "/airlin" },
    { title: "Taxi", url: "#" },
  ],
  Contact: [
    { title: "Contact Us", url: "#" },
    { title: "Suggestions and Complaints", url: "#" },
  ],
};

const pages = [
  { name: <HomeIcon />, link: "/" }, 
  { name: "About", link: "/about" },
  {name: "Tourism in Afghanistan", link: "/"},
  { name: "Afghan Handicrafts", link: "/handicrafts" },
  { name: "Tourism Newsroom", link: "/newsroom" },
  { name: "Where To Go", link: "/whereToGo" },
  { name: "Booking", link: "/#LetsGetBooking" },
  { name: "Contact", link: "/contact" },
];

function ResponsiveAppBar() {
  const [openMenu, setOpenMenu] = React.useState(null);
  const [openSubMenu, setOpenSubMenu] = React.useState(null);

  const handleMouseEnterMenu = (menu) => {
    setOpenMenu(menu);
  };

  const handleMouseLeaveMenu = () => {
    setOpenMenu(null);
    setOpenSubMenu(null);
  };

  const handleMouseEnterSubMenu = (submenu) => {
    setOpenSubMenu(submenu);
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "#fff",
        boxShadow: "none",
        borderBottom: "1px solid #e0e0e0",
      }}
    >
      <Container maxWidth={"xl"}>
        <Toolbar disableGutters>
          {/* Logo */}
          <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
            <img
              src="/images/Logo.png"
              alt="logo"
              style={{ height: "6em", width: "6em" }}
            />
          </Box>

          {/* Desktop navbar */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
            }}
          >
            {pages.map((page, index) => (
              <React.Fragment key={index}>
                <Box
                  onMouseEnter={() => handleMouseEnterMenu(page.name)}
                  onMouseLeave={handleMouseLeaveMenu}
                  sx={{ position: "relative", marginRight: "10px" }}
                >
                  <Button
                    component={Link}
                    to={page.link}
                    sx={{
                      color: 'primary',
                      fontWeight: 500,
                      fontSize: "1rem",
                      textTransform: "capitalize",
                      transition:'1s ease',
                      "&:hover": {
                        color: "primary.dark",// textDecoration: "underline",
                      },
                    }}
                  >
                    {page.name}
                  </Button>

                  {/* Submenu */}
                  {subMenus[page.name] && openMenu === page.name && (
                    <Box
                      sx={{
                        position: "absolute",
                        top: "100%",
                        left: 0,
                        backgroundColor: "#fff",
                        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                        zIndex: 10,
                        minWidth: "15rem",
                        padding: "0.5rem",
                        textTransform:'capitalize',
                        borderRadius:'4px'
                      }}
                      onMouseEnter={() => handleMouseEnterMenu(page.name)}
                      onMouseLeave={handleMouseLeaveMenu}
                    >
                      {subMenus[page.name].map((submenu, subIndex) => (
                        <Box
                          key={subIndex}
                          onMouseEnter={() =>
                            submenu.submenu
                              ? handleMouseEnterSubMenu(submenu.title)
                              : null
                          }
                          onMouseLeave={() =>
                            submenu.submenu ? setOpenSubMenu(null) : null
                          }
                          sx={{ position: "relative" }}
                        >
                          <Button
                            component={Link}
                            to={submenu.url}
                            sx={{
                              color: "#474747",
                              display: "block",
                              textAlign: "left",
                              textTransform:'capitalize',
                              width: "100%",
                              "&:hover": {
                                color: "primary.light",
                               
                              },
                            }}
                          >
                            {submenu.title}
                          </Button>

                          {/* Sub-Submenu */}
                          {submenu.submenu && openSubMenu === submenu.title && (
                            <Box
                              sx={{
                                position: "absolute",
                                top: 0,
                                left: "100%",
                                backgroundColor: "#fff",
                                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                                zIndex: 10,
                                minWidth: "200px",
                                padding: "10px 0",
                              }}
                            >
                              {submenu.submenu.map((subSubItem, subSubIndex) => (
                                <Button
                                  key={subSubIndex}
                                  component={Link}
                                  to={subSubItem.url}
                                  sx={{
                                    color: "#474747",
                                    display: "block",
                                    textAlign: "left",
                                    width: "100%",
                                    "&:hover": {
                                      color: "primary.light",
                                    },
                                  }}
                                >
                                  {subSubItem.title}
                                </Button>
                              ))}
                            </Box>
                          )}
                        </Box>
                      ))}
                    </Box>
                  )}
                </Box>
                {index < pages.length - 1 && (
                  <Divider
                    orientation="vertical"
                    flexItem
                    sx={{
                      backgroundColor: "#e0e0e0",
                      height: "2em",
                      marginLeft: "5px",
                      marginRight: "5px",
                    }}
                  />
                )}
              </React.Fragment>
            ))}
          </Box>
 {/* Profile Icon for large screens, Hamburger for medium and below */}
          <Box sx={{ display: { xs: "none", md: "none", lg: "flex" }, alignItems: "center" }}>
            <Button
              sx={{
                color: "#primary",
                minWidth: 0,
                "&:hover": { color: "#7fbf35" },
              }}
            >
              <ManageAccountsIcon sx={{ width: 30, height: 30 }} />
            </Button>
          </Box>


          {/* Mobile menu button */}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton color="black" aria-label="open drawer" edge="start">
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
