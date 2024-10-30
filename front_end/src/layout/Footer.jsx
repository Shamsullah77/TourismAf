import React from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  LinkedIn,
  Pinterest,
} from "@mui/icons-material";
import "../asset/img/style/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-links grid">
          <div>
            <h4>Discover Afghanistan</h4>
            <ul>
              <li>
                <a href="#where-to-go">Where to Go</a>
              </li>
              <li>
                <a href="#what-to-do">What to Do</a>
              </li>
              <li>
                <a href="#plan-your-trip">Plan Your Trip</a>
              </li>
              <li>
                <a href="#information">Information</a>
              </li>
            </ul>
          </div>

          <div>
            <h4>Follow Us</h4>
            <ul>
              <li>
                <a href="#facebook">Facebook</a>
              </li>
              <li>
                <a href="#instagram">Instagram</a>
              </li>
              <li>
                <a href="#twitter">Twitter</a>
              </li>
              <li>
                <a href="#website">Website</a>
              </li>
              <li>
                <a href="#linkedin">LinkedIn</a>
              </li>
            </ul>
          </div>

          <div>
            <h4>Contact Us</h4>
            <ul>
              <li>
                <a href="#about-us">About Us</a>
              </li>
              <li>
                <a href="#cookies">Cookies Policy</a>
              </li>
              <li>
                <a href="#privacy">Privacy Policy</a>
              </li>
              <li>
                <a href="#accessibility">Accessibility</a>
              </li>
              <li>
                <a href="#terms">Terms and Conditions</a>
              </li>
              <li>
                <a href="#contact">Contact Us</a>
              </li>
            </ul>
          </div>

          <div>
            <h4>Useful Links</h4>
            <ul>
              <li>
                <a href="#enti">National Tourism Agency</a>
              </li>
              <li>
                <a href="#tourism">Ministry of Tourism</a>
              </li>
              <li>
                <a href="#guidelines">Interoperability Guidelines</a>
              </li>
              <li>
                <a href="#open">Open Library</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-social">
          <h4>Connect with Us</h4>
          <br/>
          <div className="social-icons">
            <a href="#facebook" className="social-icon" title="Facebook">
              <Facebook />
            </a>
            <a href="#instagram" className="social-icon" title="Instagram">
              <Instagram />
            </a>
            <a href="#twitter" className="social-icon" title="Twitter">
              <Twitter />
            </a>
            <a href="#linkedin" className="social-icon" title="LinkedIn">
              <LinkedIn />
            </a>
            <a href="#pinterest" className="social-icon" title="Pinterest">
              <Pinterest />
            </a>
          </div>
        </div>
      </div>

      
    </footer>
  );
};

export default Footer;
