import React, { useState } from 'react';
import { Image, Layout } from 'lucide-react';
import ContactDrawer from '../../components/ContactDrawer';
import SEO from '../../components/SEO';
import '../Home.css';

const FkEnhancedContent = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  return (
    <div>
      <SEO title="Flipkart Enhanced Brand Content (Rich Media) - Marlytix" description="Increase conversion rates with visually appealing Enhanced Brand Content (Rich Media) for your Flipkart listings." />
      <ContactDrawer isOpen={isDrawerOpen} onClose={() => setDrawerOpen(false)} />

      <section className="hero" style={{ padding: '160px 0 100px', background: 'radial-gradient(circle at top, #0f172a 0%, var(--primary-color) 100%)' }}>
        <div className="container text-center">
          <h1 className="hero-title">Flipkart <span className="text-accent">Enhanced Images</span></h1>
          <p className="hero-subtitle" style={{ maxWidth: '800px', margin: '0 auto' }}>
            Transform scrollers into buyers. We design rich product infographics and lifestyle imagery specifically tailored for the Flipkart mobile app.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '50px', alignItems: 'center' }}>
            <div>
              <h2 className="section-title" style={{ textAlign: 'left' }}>Visual Selling on Flipkart</h2>
              <p style={{ color: 'var(--text-muted)', marginBottom: '20px', lineHeight: '1.8' }}>
                Flipkart is a heavily mobile-dominated platform. In India, most buyers make split-second purchasing decisions based entirely on product images rather than reading long text descriptions. 
              </p>
              <p style={{ color: 'var(--text-muted)', marginBottom: '30px', lineHeight: '1.8' }}>
                We design high-impact secondary images, callout infographics, and sizing charts that answer the customer's questions before they even scroll down. By utilizing Flipkart's image guidelines, we ensure your product looks premium, legitimate, and irresistible.
              </p>
              <button onClick={() => setDrawerOpen(true)} className="btn btn-primary">Upgrade My Images</button>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Flipkart Enhanced Content" 
                style={{ width: '100%', borderRadius: '12px', boxShadow: '0 20px 40px rgba(0,0,0,0.4)' }} 
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FkEnhancedContent;
