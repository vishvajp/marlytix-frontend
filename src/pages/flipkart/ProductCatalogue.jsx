import React, { useState } from 'react';
import { Layers, CheckCircle, Search, Edit3, Grid, FileText } from 'lucide-react';
import ContactDrawer from '../../components/ContactDrawer';
import SEO from '../../components/SEO';
import '../Home.css';

const FkProductCatalogue = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  return (
    <div>
      <SEO title="Flipkart Product Catalogue Management - Marlytix" description="List and optimize your products on Flipkart with Marlytix's catalog management services." />
      <ContactDrawer isOpen={isDrawerOpen} onClose={() => setDrawerOpen(false)} />

      <section className="hero" style={{ padding: '160px 0 100px', background: 'radial-gradient(circle at top, #0f172a 0%, var(--primary-color) 100%)' }}>
        <div className="container text-center">
          <h1 className="hero-title">Flipkart <span className="text-accent">Product Cataloguing</span></h1>
          <p className="hero-subtitle" style={{ maxWidth: '800px', margin: '0 auto' }}>
            Elevate your Flipkart listings. We structure and upload your inventory perfectly so you can dominate India's homegrown e-commerce giant.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '50px', alignItems: 'center' }}>
            <div>
              <h2 className="section-title" style={{ textAlign: 'left' }}>The Key to Flipkart Visibility</h2>
              <p style={{ color: 'var(--text-muted)', marginBottom: '20px', lineHeight: '1.8' }}>
                Flipkart's listing architecture is unique and strict. Uploading products without understanding their specific vertical requirements leads to immediate suppression and lost sales. Marlytix simplifies this process, ensuring your catalog is flawless from day one.
              </p>
              <p style={{ color: 'var(--text-muted)', marginBottom: '30px', lineHeight: '1.8' }}>
                Our team handles single uploads, complex bulk templates, and rigorous QC (Quality Check) rejections. We ensure that your products pass Flipkart's image and attribute guidelines instantly, reducing listing downtime and boosting your discoverability across tier-2 and tier-3 cities.
              </p>
              <button onClick={() => setDrawerOpen(true)} className="btn btn-primary">Fix My Flipkart Catalog</button>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Flipkart Product Cataloging" 
                style={{ width: '100%', borderRadius: '12px', boxShadow: '0 20px 40px rgba(0,0,0,0.4)' }} 
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-secondary">
        <div className="container">
          <h2 className="section-title text-center" style={{ marginBottom: '50px' }}>Our Flipkart Catalog Solutions</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
            <div className="service-card">
              <Layers className="text-accent" size={32} style={{ marginBottom: '20px' }} />
              <h3>Bulk Upload Management</h3>
              <p style={{ color: 'var(--text-muted)' }}>We expertly navigate Flipkart's complex Excel templates for bulk uploads, ensuring all mandatory and optional attributes are filled accurately.</p>
            </div>
            <div className="service-card">
              <CheckCircle className="text-accent" size={32} style={{ marginBottom: '20px' }} />
              <h3>QC Error Resolution</h3>
              <p style={{ color: 'var(--text-muted)' }}>Flipkart's Quality Check can be frustrating. We actively diagnose and resolve image rejections, brand mapping issues, and missing attribute flags.</p>
            </div>
            <div className="service-card">
              <Grid className="text-accent" size={32} style={{ marginBottom: '20px' }} />
              <h3>FSN & Variation Setup</h3>
              <p style={{ color: 'var(--text-muted)' }}>We link products with the correct FSN (Flipkart Serial Number) and build cohesive variations to pool reviews and boost conversion rates.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FkProductCatalogue;
