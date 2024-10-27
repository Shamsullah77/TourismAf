import "./App.css";
import Navbar from "./componenets/Navbar.jsx";
import Footer from "./componenets/Footer.jsx";
import Hero from "./componenets/Hero.jsx";
import HomePage from "./pages/Home.jsx"
// import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Header from "./componenets/Header.jsx";
import Contact from "./pages/Contact.jsx";
import WhereToGo from "./pages/Where_to_go.jsx";
import Booking from "./pages/Booking.jsx";
import LetsGetBookingSection from './pages/Home.jsx'  // Import LetsGetBookingSection
import Accommodation from "./pages/Accomodation.jsx";
import Buses from "./pages/Buses.jsx";
import Airlin from "./pages/Airlin.jsx"
import Museum from "./pages/Museum.jsx";
import Library from "./pages/Library.jsx";
import AfghanHandicrafts from "./pages/AfghanHandicrafts.jsx";
import HeritageSite from "./pages/HeritageSite.jsx";
import CultureArt from "./pages/CultureArts.jsx";
// import GoogleTranslateExample from "./componenets/GoogleTransulation/Transulation.jsx";




function App() {
  return (
    <div className="App">
      {/* <GoogleTranslateExample/> */}
      <Header/>
      <Navbar />
      
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact/>} />

          <Route path="/whereToGo" element={<WhereToGo/>} />
          <Route path="/booking" element={<Booking/>}/>
          <Route path="/accommodation" element={<Accommodation />} />
          <Route path="/buses" element={<Buses />} />
          <Route path="/airlin" element={<Airlin/>}/>
          <Route path="/museum" element={<Museum/>}/>
          <Route path="/libraries" element={<Library/>} />
          <Route path="/handicrafts" element={<AfghanHandicrafts/>}/>
          <Route path="/heritage" element={<HeritageSite/>}/>
          <Route path="/culturalarts" element={<CultureArt/>}/>
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
