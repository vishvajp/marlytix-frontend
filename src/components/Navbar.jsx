import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import ContactDrawer from './ContactDrawer';
import './Navbar.css';
import logoImg from '../assets/images/icon.png';


const Navbar = () => {
  const location = useLocation();
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  const isParentActive = (prefix) => {
    return location.pathname.startsWith(prefix) ? 'active' : '';
  };

  return (
    <>
      <ContactDrawer isOpen={isDrawerOpen} onClose={() => setDrawerOpen(false)} />
      <nav className="navbar">
        <div className="container nav-container">
          <Link to="/" className="logo">
            <img src={logoImg} alt="Marlytix Logo" style={{ width: '100px', transform: 'scale(1.4)', transformOrigin: 'left center' }} />

          </Link>

          <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
            <li className="nav-item">
              <Link to="/" className={`nav-link ${isActive('/')}`} onClick={closeMobileMenu}>Home</Link>
            </li>

            <li className="nav-item">
              <span className={`nav-link ${isParentActive('/amazon') || isParentActive('/flipkart') ? 'active' : ''}`} style={{ cursor: 'pointer' }}>
                Ecommerce <ChevronDown size={16} />
              </span>
              <ul className="dropdown-menu">
                <li className="dropdown-item">
                  <span className={`dropdown-link ${isParentActive('/amazon')}`} style={{ cursor: 'pointer' }}>
                    Amazon <ChevronDown size={16} style={{ transform: 'rotate(-90deg)' }} />
                  </span>
                  <ul className="sub-menu">
                    <li className="dropdown-item"><Link to="/amazon/product-catalogue" className={`dropdown-link ${isActive('/amazon/product-catalogue')}`} onClick={closeMobileMenu}>Amazon Product Catalogue</Link></li>
                    <li className="dropdown-item"><Link to="/amazon/seo-services" className={`dropdown-link ${isActive('/amazon/seo-services')}`} onClick={closeMobileMenu}>Amazon SEO Services</Link></li>
                    <li className="dropdown-item"><Link to="/amazon/seller-central" className={`dropdown-link ${isActive('/amazon/seller-central')}`} onClick={closeMobileMenu}>Seller Central Management</Link></li>
                    <li className="dropdown-item"><Link to="/amazon/vendor-central" className={`dropdown-link ${isActive('/amazon/vendor-central')}`} onClick={closeMobileMenu}>Vendor Central Management</Link></li>
                    <li className="dropdown-item"><Link to="/amazon/a-plus-content" className={`dropdown-link ${isActive('/amazon/a-plus-content')}`} onClick={closeMobileMenu}>Amazon A+ Content</Link></li>
                    <li className="dropdown-item"><Link to="/amazon/account-health" className={`dropdown-link ${isActive('/amazon/account-health')}`} onClick={closeMobileMenu}>Account Health Management</Link></li>
                  </ul>
                </li>
                <li className="dropdown-item">
                  <span className={`dropdown-link ${isParentActive('/flipkart')}`} style={{ cursor: 'pointer' }}>
                    Flipkart <ChevronDown size={16} style={{ transform: 'rotate(-90deg)' }} />
                  </span>
                  <ul className="sub-menu">
                    <li className="dropdown-item"><Link to="/flipkart/product-catalogue" className={`dropdown-link ${isActive('/flipkart/product-catalogue')}`} onClick={closeMobileMenu}>Flipkart Product Catalogue</Link></li>
                    <li className="dropdown-item"><Link to="/flipkart/seo-services" className={`dropdown-link ${isActive('/flipkart/seo-services')}`} onClick={closeMobileMenu}>Flipkart SEO Services</Link></li>
                    <li className="dropdown-item"><Link to="/flipkart/seller-management" className={`dropdown-link ${isActive('/flipkart/seller-management')}`} onClick={closeMobileMenu}>Seller Account Management</Link></li>
                    <li className="dropdown-item"><Link to="/flipkart/smart-fulfillment" className={`dropdown-link ${isActive('/flipkart/smart-fulfillment')}`} onClick={closeMobileMenu}>Smart Fulfillment Services</Link></li>
                    <li className="dropdown-item"><Link to="/flipkart/enhanced-content" className={`dropdown-link ${isActive('/flipkart/enhanced-content')}`} onClick={closeMobileMenu}>Enhanced Brand Content</Link></li>
                    <li className="dropdown-item"><Link to="/flipkart/account-health" className={`dropdown-link ${isActive('/flipkart/account-health')}`} onClick={closeMobileMenu}>Account Health Management</Link></li>
                  </ul>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <Link to="/about" className={`nav-link ${isActive('/about')}`} onClick={closeMobileMenu}>About Us</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className={`nav-link ${isActive('/contact')}`} onClick={closeMobileMenu}>Contact Us</Link>
            </li>
          </ul>

          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <button onClick={() => { setDrawerOpen(true); closeMobileMenu(); }} className="btn btn-primary" id="nav-cta" style={{ padding: '8px 20px', fontSize: '0.9rem', cursor: 'pointer' }}>Get Free Audit</button>
            <button className="mobile-menu-icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
