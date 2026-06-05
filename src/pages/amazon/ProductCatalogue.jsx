import React, { useState } from 'react';
import { Layers, CheckCircle, Search, Edit3, Grid, FileText } from 'lucide-react';
import ContactDrawer from '../../components/ContactDrawer';
import SEO from '../../components/SEO';
import '../Home.css';

const ProductCatalogue = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  return (
    <div>
      <SEO title="Amazon Product Catalogue Management - Marlytix" description="Organize and optimize your Amazon Product Catalogue for maximum visibility and sales with Marlytix." />
      <ContactDrawer isOpen={isDrawerOpen} onClose={() => setDrawerOpen(false)} />

      <section className="hero" style={{ padding: '160px 0 100px', background: 'radial-gradient(circle at top, #f0f0f0 0%, var(--primary-color) 100%)' }}>
        <div className="container text-center">
          <h1 className="hero-title">Amazon <span className="text-accent">Product Catalogue</span></h1>
          <p className="hero-subtitle" style={{ maxWidth: '800px', margin: '0 auto' }}>
            Transform your inventory into a high-converting digital storefront. We meticulously organize, structure, and optimize your Amazon catalog to drive massive sales.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '50px', alignItems: 'center' }}>
            <div>
              <h2 className="section-title" style={{ textAlign: 'left' }}>The Foundation of E-Commerce Success</h2>
              <p style={{ color: 'var(--text-muted)', marginBottom: '20px', lineHeight: '1.8' }}>
                Your product catalog is the lifeblood of your Amazon business. A chaotic, poorly structured catalog not only frustrates buyers but actively damages your search rankings. Marlytix provides end-to-end catalog management services that ensure your listings are flawlessly presented, easily discoverable, and perfectly compliant with Amazon's strict guidelines.
              </p>
              <p style={{ color: 'var(--text-muted)', marginBottom: '30px', lineHeight: '1.8' }}>
                From resolving stubborn backend errors to creating intuitive parent-child variations, our catalog specialists take the technical burden off your shoulders. We ensure that every ASIN in your portfolio works harmoniously to maximize your overall brand visibility.
              </p>
              <button onClick={() => setDrawerOpen(true)} className="btn btn-primary">Audit My Catalog</button>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Amazon Product Cataloging" 
                style={{ width: '100%', borderRadius: '12px', boxShadow: '0 20px 40px rgba(0,0,0,0.4)' }} 
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-secondary">
        <div className="container">
          <h2 className="section-title text-center" style={{ marginBottom: '50px' }}>Our Comprehensive Cataloging Services</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
            <div className="service-card">
              <Layers className="text-accent" size={32} style={{ marginBottom: '20px' }} />
              <h3>Flat File & Bulk Uploads</h3>
              <p style={{ color: 'var(--text-muted)' }}>We expertly navigate complex inventory templates (flat files) to upload, update, and manage thousands of SKUs seamlessly without triggering system errors.</p>
            </div>
            <div className="service-card">
              <Grid className="text-accent" size={32} style={{ marginBottom: '20px' }} />
              <h3>Variation Setup & Mapping</h3>
              <p style={{ color: 'var(--text-muted)' }}>We construct logical parent-child relationships (size, color, style) to consolidate reviews, improve ranking, and provide a frictionless shopping experience.</p>
            </div>
            <div className="service-card">
              <CheckCircle className="text-accent" size={32} style={{ marginBottom: '20px' }} />
              <h3>Error Resolution</h3>
              <p style={{ color: 'var(--text-muted)' }}>Stuck with Error 5665, 5461, or 8560? Our team swiftly diagnoses and resolves backend catalog suppression issues to get your products live quickly.</p>
            </div>
            <div className="service-card">
              <Search className="text-accent" size={32} style={{ marginBottom: '20px' }} />
              <h3>Category & Browse Nodes</h3>
              <p style={{ color: 'var(--text-muted)' }}>We ensure your products are placed in the exact right categories and browse nodes to maximize organic discovery and capture niche audiences.</p>
            </div>
            <div className="service-card">
              <Edit3 className="text-accent" size={32} style={{ marginBottom: '20px' }} />
              <h3>Listing Merging</h3>
              <p style={{ color: 'var(--text-muted)' }}>We clean up duplicate listings and merge identical ASINs, pooling your reviews and sales history to strengthen your main product offering.</p>
            </div>
            <div className="service-card">
              <FileText className="text-accent" size={32} style={{ marginBottom: '20px' }} />
              <h3>Content Syndication</h3>
              <p style={{ color: 'var(--text-muted)' }}>We ensure your bullet points, titles, and backend search terms are uniformly updated across your entire catalog for brand consistency.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductCatalogue;
