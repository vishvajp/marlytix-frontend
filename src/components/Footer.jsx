import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import './Footer.css';
import logoImg from '../assets/images/icon.png';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-glow"></div>
      <div className="container grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10 lg:gap-8 mb-12 relative z-10 px-4">
        <div className="footer-brand-section col-span-2 lg:col-span-1">
          <div className="logo footer-logo" style={{ display: 'flex', alignItems: 'center' }}>
            <img src={logoImg} alt="Marlytix Logo" style={{ width: '200px', transform: 'scale(1.5)', transformOrigin: 'left center' }} />

          </div>
          <p className="footer-description">
            Helping Brands Scale Across Global Marketplaces. We are your premier Ecommerce growth partners driving unparalleled results.
          </p>
        </div>

        <div className="footer-links-section col-span-1">
          <h4 className="footer-title">Quick Links</h4>
          <ul className="footer-links">
            <li><Link to="/"><ArrowRight size={14} className="link-arrow" /> Home</Link></li>
            <li><Link to="/about"><ArrowRight size={14} className="link-arrow" /> About Us</Link></li>
            <li><Link to="/contact"><ArrowRight size={14} className="link-arrow" /> Contact Us</Link></li>
            <li><Link to="/admin"><ArrowRight size={14} className="link-arrow" /> Admin Portal</Link></li>
          </ul>
        </div>

        <div className="footer-links-section col-span-1">
          <h4 className="footer-title">Our Services</h4>
          <ul className="footer-links">
            <li><Link to="/amazon/seller-central"><ArrowRight size={14} className="link-arrow" /> Amazon Management</Link></li>
            <li><Link to="/flipkart/seller-management"><ArrowRight size={14} className="link-arrow" /> Flipkart Management</Link></li>
            <li><Link to="/amazon/product-catalogue"><ArrowRight size={14} className="link-arrow" /> Product Cataloging</Link></li>
            <li><Link to="/amazon/seo-services"><ArrowRight size={14} className="link-arrow" /> SEO & Optimization</Link></li>
            <li><Link to="/amazon/a-plus-content"><ArrowRight size={14} className="link-arrow" /> A+ & Enhanced Content</Link></li>
            <li><Link to="/amazon/account-health"><ArrowRight size={14} className="link-arrow" /> Account Health</Link></li>
          </ul>
        </div>

        <div className="footer-contact-section col-span-2 lg:col-span-1">
          <h4 className="footer-title">Get In Touch</h4>
          <ul className="footer-contact-info">
            <li>
              <div className="contact-icon-wrapper"><Mail size={16} /></div>
              <span>info@marlytix.com</span>
            </li>
            <li>
              <div className="contact-icon-wrapper"><Phone size={16} /></div>
              <span>+91 98765 43210</span>
            </li>
            <li>
              <div className="contact-icon-wrapper"><MapPin size={16} /></div>
              <span>Chennai, Tamil Nadu, India</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left px-4">
          <p>&copy; {new Date().getFullYear()} Marlytix Ecom Solutions. All Rights Reserved.</p>
          <div className="footer-legal">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-of-service">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
