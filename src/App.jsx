import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import { Toaster } from 'react-hot-toast';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';

// Amazon Services
import ProductCatalogue from './pages/amazon/ProductCatalogue';
import SeoServices from './pages/amazon/SeoServices';
import SellerCentral from './pages/amazon/SellerCentral';
import VendorCentral from './pages/amazon/VendorCentral';
import APlusContent from './pages/amazon/APlusContent';
import AccountHealth from './pages/amazon/AccountHealth';

// Flipkart Services
import FkProductCatalogue from './pages/flipkart/ProductCatalogue';
import FkSeoServices from './pages/flipkart/SeoServices';
import FkSellerManagement from './pages/flipkart/SellerManagement';
import FkSmartFulfillment from './pages/flipkart/SmartFulfillment';
import FkEnhancedContent from './pages/flipkart/EnhancedContent';
import FkAccountHealth from './pages/flipkart/AccountHealth';

// Admin
import AdminLogin from './pages/admin/AdminLogin';
import AdminLayout from './pages/admin/AdminLayout';
import AdminStats from './pages/admin/AdminStats';
import AdminLeads from './pages/admin/AdminLeads';

function AppContent() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <>
      <ScrollToTop />
      {!isAdminRoute && <Navbar />}
      <main style={{ minHeight: '80vh' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          
          {/* Amazon Service Routes */}
          <Route path="/amazon/product-catalogue" element={<ProductCatalogue />} />
          <Route path="/amazon/seo-services" element={<SeoServices />} />
          <Route path="/amazon/seller-central" element={<SellerCentral />} />
          <Route path="/amazon/vendor-central" element={<VendorCentral />} />
          <Route path="/amazon/a-plus-content" element={<APlusContent />} />
          <Route path="/amazon/account-health" element={<AccountHealth />} />
          
          {/* Flipkart Service Routes */}
          <Route path="/flipkart/product-catalogue" element={<FkProductCatalogue />} />
          <Route path="/flipkart/seo-services" element={<FkSeoServices />} />
          <Route path="/flipkart/seller-management" element={<FkSellerManagement />} />
          <Route path="/flipkart/smart-fulfillment" element={<FkSmartFulfillment />} />
          <Route path="/flipkart/enhanced-content" element={<FkEnhancedContent />} />
          <Route path="/flipkart/account-health" element={<FkAccountHealth />} />
          
          {/* Admin Routes */}
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/admin/panel" element={<AdminLayout />}>
            <Route path="dashboard" element={<AdminStats />} />
            <Route path="leads" element={<AdminLeads />} />
          </Route>
        </Routes>
      </main>
      {!isAdminRoute && <Footer />}
    </>
  );
}

function App() {
  return (
    <>
      <Toaster 
        position="top-right" 
        toastOptions={{ 
          style: { background: '#333', color: '#fff' },
          success: {
            iconTheme: {
              primary: '#ff5722',
              secondary: '#fff',
            },
          },
        }} 
        containerStyle={{ zIndex: 99999 }}
      />
      <Router>
        <AppContent />
      </Router>
    </>
  );
}

export default App;
