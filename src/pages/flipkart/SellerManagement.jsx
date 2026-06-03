import React, { useState } from 'react';
import { Settings, HelpCircle, TrendingUp, UserCheck } from 'lucide-react';
import ContactDrawer from '../../components/ContactDrawer';
import SEO from '../../components/SEO';
import '../Home.css';

const FkSellerManagement = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  return (
    <div>
      <SEO title="Flipkart Seller Account Management - Marlytix" description="Full-service management of your Flipkart Seller Hub. Let us handle operations while you scale." />
      <ContactDrawer isOpen={isDrawerOpen} onClose={() => setDrawerOpen(false)} />

      <section className="hero" style={{ padding: '160px 0 100px', background: 'radial-gradient(circle at top, #0f172a 0%, var(--primary-color) 100%)' }}>
        <div className="container text-center">
          <h1 className="hero-title">Flipkart <span className="text-accent">Seller Management</span></h1>
          <p className="hero-subtitle" style={{ maxWidth: '800px', margin: '0 auto' }}>
            We manage your entire Flipkart Seller Hub operations daily, allowing you to focus purely on sourcing and manufacturing.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '50px', alignItems: 'center' }}>
            <div>
              <h2 className="section-title" style={{ textAlign: 'left' }}>End-to-End Operational Control</h2>
              <p style={{ color: 'var(--text-muted)', marginBottom: '20px', lineHeight: '1.8' }}>
                Managing the Flipkart Seller Hub requires constant vigilance. From handling order processing metrics to responding to buyer queries within strict SLAs, the operational overhead can overwhelm any growing brand. 
              </p>
              <p style={{ color: 'var(--text-muted)', marginBottom: '30px', lineHeight: '1.8' }}>
                Our team takes complete ownership of your Flipkart Seller account. We raise tickets with Flipkart Seller Support for payment reconciliations, manage return disputes (SPF claims), and participate in Big Billion Days (BBD) and Big Saving Days events to maximize your promotional ROI.
              </p>
              <button onClick={() => setDrawerOpen(true)} className="btn btn-primary">Manage My Account</button>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Flipkart Seller Dashboard" 
                style={{ width: '100%', borderRadius: '12px', boxShadow: '0 20px 40px rgba(0,0,0,0.4)' }} 
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FkSellerManagement;
