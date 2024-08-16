import React from 'react';
import { IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>123 Farm Lane</p>
          <p>AgriCity, AG 45678</p>
          <p>Email:info@smartharvest.com</p>
          <p>Phone:(123)456-7890</p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/services">Services</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Follow Us</h3>
          <IconButton color="inherit" href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FacebookIcon />
            <span>FaceBook</span>
          </IconButton>
          <IconButton color="inherit" href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <TwitterIcon />
            <span>Twitter</span>
          </IconButton>
          <IconButton color="inherit" href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <InstagramIcon />
            <span>Instagram</span>
          </IconButton>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} SmartHarvest. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
