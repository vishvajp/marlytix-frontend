import React, { useState } from 'react';
import { Search, TrendingUp, Key, Target } from 'lucide-react';
import ContactDrawer from '../../components/ContactDrawer';
import SEO from '../../components/SEO';
import '../Home.css';

const FkSeoServices = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  return (
    <div>
      <SEO title="Flipkart SEO & Visibility Services - Marlytix" description="Improve your organic rankings and product visibility on Flipkart with our specialized SEO strategies." />
      <ContactDrawer isOpen={isDrawerOpen} onClose={() => setDrawerOpen(false)} />

      <section className="hero" style={{ padding: '160px 0 100px', background: 'radial-gradient(circle at top, #0f172a 0%, var(--primary-color) 100%)' }}>
        <div className="container text-center">
          <h1 className="hero-title">Flipkart <span className="text-accent">SEO Services</span></h1>
          <p className="hero-subtitle" style={{ maxWidth: '800px', margin: '0 auto' }}>
            Rank higher, sell faster. We decode Flipkart's search algorithm to position your products at the top of organic search results.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '50px', alignItems: 'center' }}>
            <div>
              <h2 className="section-title" style={{ textAlign: 'left' }}>Mastering Flipkart SEO</h2>
              <p style={{ color: 'var(--text-muted)', marginBottom: '20px', lineHeight: '1.8' }}>
                Flipkart's search algorithm heavily favors precise product titles, rich attributes, and high conversion velocities. To rank organically on Flipkart, you need more than just keyword stuffing; you need semantic relevance.
              </p>
              <p style={{ color: 'var(--text-muted)', marginBottom: '30px', lineHeight: '1.8' }}>
                We conduct extensive keyword mining specific to the Indian consumer mindset. By seamlessly integrating high-volume search terms into your titles and descriptions, we significantly increase your click-through rates (CTR) and organic traffic, driving consistent sales without heavy ad spending.
              </p>
              <button onClick={() => setDrawerOpen(true)} className="btn btn-primary">Boost My Ranking</button>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Flipkart SEO" 
                style={{ width: '100%', borderRadius: '12px', boxShadow: '0 20px 40px rgba(0,0,0,0.4)' }} 
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FkSeoServices;
