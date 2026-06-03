import React, { useState } from 'react';
import { Box, FileText, BarChart2, ShieldCheck, PenTool, Database } from 'lucide-react';
import ContactDrawer from '../../components/ContactDrawer';
import SEO from '../../components/SEO';
import '../Home.css';

const VendorCentral = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  return (
    <div>
      <SEO title="Amazon Vendor Central Management - Marlytix" description="Expert Amazon Vendor Central management to negotiate better terms, handle POs, and scale retail sales." />
      <ContactDrawer isOpen={isDrawerOpen} onClose={() => setDrawerOpen(false)} />

      <section className="hero" style={{ padding: '160px 0 100px', background: 'radial-gradient(circle at top, #1a1a1a 0%, var(--primary-color) 100%)' }}>
        <div className="container text-center">
          <h1 className="hero-title"><span className="text-accent">Vendor Central</span> Management</h1>
          <p className="hero-subtitle" style={{ maxWidth: '800px', margin: '0 auto' }}>
            Scale your 1P wholesale business on Amazon. We handle PO processing, catalog negotiations, and chargeback disputes so you can focus on manufacturing.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '50px', alignItems: 'center' }}>
            <div>
              <h2 className="section-title" style={{ textAlign: 'left' }}>Mastering 1P Wholesale Operations</h2>
              <p style={{ color: 'var(--text-muted)', marginBottom: '20px', lineHeight: '1.8' }}>
                Operating as a first-party (1P) vendor on Amazon brings immense volume but introduces a completely different set of operational hurdles. Vendor Central is notoriously unforgiving when it comes to catalog issues, purchase order fulfillment, and operational chargebacks.
              </p>
              <p style={{ color: 'var(--text-muted)', marginBottom: '30px', lineHeight: '1.8' }}>
                Marlytix provides specialized management for Vendor Central partners. We streamline the flow of purchase orders, optimize your Vendor catalog (NIS templates), and fiercely dispute erroneous chargebacks and shortages. We ensure your wholesale relationship with Amazon remains highly profitable and operationally efficient.
              </p>
              <button onClick={() => setDrawerOpen(true)} className="btn btn-primary">Optimize My Vendor Account</button>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1512428559087-560fa5ceab42?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Warehouse and Vendor Operations" 
                style={{ width: '100%', borderRadius: '12px', boxShadow: '0 20px 40px rgba(0,0,0,0.4)' }} 
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-secondary">
        <div className="container">
          <h2 className="section-title text-center" style={{ marginBottom: '50px' }}>Our Vendor Central Solutions</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
            <div className="service-card">
              <Box className="text-accent" size={32} style={{ marginBottom: '20px' }} />
              <h3>Purchase Order (PO) Management</h3>
              <p style={{ color: 'var(--text-muted)' }}>We monitor and process incoming POs efficiently, ensuring timely acknowledgments and preventing cancellation penalties from Amazon.</p>
            </div>
            <div className="service-card">
              <Database className="text-accent" size={32} style={{ marginBottom: '20px' }} />
              <h3>NIS (New Item Setup)</h3>
              <p style={{ color: 'var(--text-muted)' }}>We expertly fill out and upload complex New Item Setup templates, ensuring your products go live faster with zero backend catalog errors.</p>
            </div>
            <div className="service-card">
              <ShieldCheck className="text-accent" size={32} style={{ marginBottom: '20px' }} />
              <h3>Chargeback & Shortage Disputes</h3>
              <p style={{ color: 'var(--text-muted)' }}>We actively investigate and dispute operational chargebacks and shortage claims, recovering significant revenue that Amazon wrongfully withheld.</p>
            </div>
            <div className="service-card">
              <PenTool className="text-accent" size={32} style={{ marginBottom: '20px' }} />
              <h3>A+ Content & Premium Brand Store</h3>
              <p style={{ color: 'var(--text-muted)' }}>We leverage Vendor-specific creative privileges to build Premium A+ Content modules that dramatically increase product conversion rates.</p>
            </div>
            <div className="service-card">
              <BarChart2 className="text-accent" size={32} style={{ marginBottom: '20px' }} />
              <h3>ARA (Amazon Retail Analytics)</h3>
              <p style={{ color: 'var(--text-muted)' }}>We extract actionable insights from ARA Premium data, analyzing geographic sales, search behavior, and forecasting future demand.</p>
            </div>
            <div className="service-card">
              <FileText className="text-accent" size={32} style={{ marginBottom: '20px' }} />
              <h3>Born to Run / Vendor Promotions</h3>
              <p style={{ color: 'var(--text-muted)' }}>We strategize and execute "Born to Run" campaigns and Vine enrollments to generate initial traction and reviews for new product launches.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VendorCentral;
