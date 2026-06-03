import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu } from 'lucide-react';
import ContactDrawer from './ContactDrawer';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <>
      <ContactDrawer isOpen={isDrawerOpen} onClose={() => setDrawerOpen(false)} />
      <nav className="navbar">
      <div className="container nav-container">
        <Link to="/" className="logo">
          Marlytix<span>.</span>
        </Link>
        
        <ul className="nav-links">
          <li className="nav-item">
            <Link to="/" className={`nav-link ${isActive('/')}`}>Home</Link>
          </li>
          
          <li className="nav-item">
            <span className="nav-link" style={{ cursor: 'pointer' }}>
              Ecommerce <ChevronDown size={16} />
            </span>
            <ul className="dropdown-menu">
              <li className="dropdown-item">
                <span className="dropdown-link" style={{ cursor: 'pointer' }}>
                  Amazon <ChevronDown size={16} style={{ transform: 'rotate(-90deg)' }} />
                </span>
                <ul className="sub-menu">
                  <li><Link to="/amazon/product-catalogue" className="dropdown-link">Amazon Product Catalogue</Link></li>
                  <li><Link to="/amazon/seo-services" className="dropdown-link">Amazon SEO Services</Link></li>
                  <li><Link to="/amazon/seller-central" className="dropdown-link">Seller Central Management</Link></li>
                  <li><Link to="/amazon/vendor-central" className="dropdown-link">Vendor Central Management</Link></li>
                  <li><Link to="/amazon/a-plus-content" className="dropdown-link">Amazon A+ Content</Link></li>
                  <li><Link to="/amazon/account-health" className="dropdown-link">Account Health Management</Link></li>
                </ul>
              </li>
              <li className="dropdown-item">
                <span className="dropdown-link" style={{ cursor: 'pointer' }}>
                  Flipkart <ChevronDown size={16} style={{ transform: 'rotate(-90deg)' }} />
                </span>
                <ul className="sub-menu">
                  <li><Link to="/flipkart/product-catalogue" className="dropdown-link">Flipkart Product Catalogue</Link></li>
                  <li><Link to="/flipkart/seo-services" className="dropdown-link">Flipkart SEO Services</Link></li>
                  <li><Link to="/flipkart/seller-management" className="dropdown-link">Seller Account Management</Link></li>
                  <li><Link to="/flipkart/smart-fulfillment" className="dropdown-link">Smart Fulfillment Services</Link></li>
                  <li><Link to="/flipkart/enhanced-content" className="dropdown-link">Enhanced Brand Content</Link></li>
                  <li><Link to="/flipkart/account-health" className="dropdown-link">Account Health Management</Link></li>
                </ul>
              </li>
            </ul>
          </li>
          
          <li className="nav-item">
            <Link to="/about" className={`nav-link ${isActive('/about')}`}>About Us</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className={`nav-link ${isActive('/contact')}`}>Contact Us</Link>
          </li>
        </ul>

        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <button onClick={() => setDrawerOpen(true)} className="btn btn-primary" id="nav-cta" style={{ padding: '8px 20px', fontSize: '0.9rem', cursor: 'pointer' }}>Get Free Audit</button>
          <button className="mobile-menu-icon">
            <Menu size={24} />
          </button>
        </div>
      </div>
      </nav>
    </>
  );
};

export default Navbar;
