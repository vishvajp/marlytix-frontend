import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-glow"></div>
      <div className="container footer-grid">
        <div className="footer-brand-section">
          <div className="logo footer-logo">
            Marlytix<span>.</span>
          </div>
          <p className="footer-description">
            Helping Brands Scale Across Global Marketplaces. We are your premier Ecommerce growth partners driving unparalleled results.
          </p>
        </div>
        
        <div className="footer-links-section">
          <h4 className="footer-title">Quick Links</h4>
          <ul className="footer-links">
            <li><Link to="/"><ArrowRight size={14} className="link-arrow"/> Home</Link></li>
            <li><Link to="/about"><ArrowRight size={14} className="link-arrow"/> About Us</Link></li>
            <li><Link to="/contact"><ArrowRight size={14} className="link-arrow"/> Contact Us</Link></li>
            <li><Link to="/admin"><ArrowRight size={14} className="link-arrow"/> Admin Portal</Link></li>
          </ul>
        </div>

        <div className="footer-links-section">
          <h4 className="footer-title">Our Services</h4>
          <ul className="footer-links">
            <li><Link to="/amazon/seller-central"><ArrowRight size={14} className="link-arrow"/> Amazon Management</Link></li>
            <li><Link to="/flipkart/seller-management"><ArrowRight size={14} className="link-arrow"/> Flipkart Management</Link></li>
            <li><Link to="/amazon/product-catalogue"><ArrowRight size={14} className="link-arrow"/> Product Cataloging</Link></li>
            <li><Link to="/amazon/seo-services"><ArrowRight size={14} className="link-arrow"/> SEO & Optimization</Link></li>
            <li><Link to="/amazon/a-plus-content"><ArrowRight size={14} className="link-arrow"/> A+ & Enhanced Content</Link></li>
            <li><Link to="/amazon/account-health"><ArrowRight size={14} className="link-arrow"/> Account Health</Link></li>
          </ul>
        </div>

        <div className="footer-contact-section">
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
        <div className="container footer-bottom-inner">
          <p>&copy; {new Date().getFullYear()} Marlytix Ecom Solutions. All Rights Reserved.</p>
          <div className="footer-legal">
            <Link to="#">Privacy Policy</Link>
            <Link to="#">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
