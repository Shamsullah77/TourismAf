import Header from "./layout//Header.jsx";
import Navbar from "./layout/Navbar.jsx";
import Hero from "./layout/Hero.jsx";
import HomePage from "./pages/home/Home.jsx"
import Footer from "./layout/Footer.jsx";
import About from "./pages/about/About.jsx"
import Contact from "./pages/contact/Contact.jsx";
import WhereToGo from "./pages/wheretogo/Where_to_go.jsx";
import LetsGetBookingSection from './pages/home/Home.jsx'  // Import LetsGetBookingSection

// import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import AboutAfghanistan from "./pages/home/thinksToKnow/AboutAfghanistan.jsx";
import Visa from "./pages/home/thinksToKnow/Visa.jsx";
// import TravelGuide from "./pages/home/thinksToKnow/TravelGuide.jsx";


import Museum from "./pages/home/cultureAttrictionSection/Museum.jsx";
import HeritageSite from "./pages/home/cultureAttrictionSection/HeritageSite.jsx";
import Library from "./pages/home/cultureAttrictionSection/Library.jsx";
import CultureArt from "./pages/home/cultureAttrictionSection/CultureArts.jsx";


import Accommodation from "./pages/booking/Accomodation.jsx";
import Buses from "./pages/booking/Buses.jsx";
import Airlin from "./pages/booking/Airlin.jsx"

import AfghanHandicrafts from "./pages/handcrafts/AfghanHandicrafts.jsx";
import NaturalAttraction from "./pages/tourism/Natural.jsx";
import ReligousAttraction from "./pages/tourism/ListOfReliagious.jsx";
import SportAtrriction from "./pages/tourism/Sprot.jsx";
import OurMission from "./pages/about/OurMission.jsx"
// import GoogleTranslateExample from "./componenets/GoogleTransulation/Transulation.jsx";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* <Practice/> */}
      {/* <GoogleTranslateExample/> */}
      <Header/>
      <Navbar />
      
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact/>} />

          <Route path="/whereToGo" element={<WhereToGo/>} />
          
          <Route path="/accommodation" element={<Accommodation />} />
          <Route path="/buses" element={<Buses />} />
          <Route path="/airlin" element={<Airlin/>}/>
          <Route path="/museum" element={<Museum/>}/>
          <Route path="/libraries" element={<Library/>} />
          <Route path="/handicrafts" element={<AfghanHandicrafts/>}/>
          <Route path="/heritage" element={<HeritageSite/>}/>
          <Route path="/culturalarts" element={<CultureArt/>}/>
          <Route path="/natural" element={<NaturalAttraction/>}/>
          <Route path="/religious" element={<ReligousAttraction/>}/>
          <Route path="/sport" element={<SportAtrriction/>}/>
          <Route path="/aboutafg" element={<AboutAfghanistan/>}/>
          <Route path="/visa" element={<Visa/>}/>
          <Route path="/ourmission" element={<OurMission/>}/>
          {/* <Route path="/travel" element={<TravelGuide/>}/> */}



          {/* <Route path="/buses" element={<Booking />} /> */}

        </Routes>
        <Footer />
      <div className="Copyright">
        <p>&copy; 2024 Discover Afghanistan. All rights reserved.</p>
      </div>
    </div>
  );
}

export default App;
