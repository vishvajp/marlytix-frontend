import React, { useState } from 'react';
import { Image, PenTool, ShoppingCart, Layout, Smartphone, CheckSquare } from 'lucide-react';
import ContactDrawer from '../../components/ContactDrawer';
import SEO from '../../components/SEO';
import '../Home.css';

const APlusContent = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  return (
    <div>
      <SEO title="Amazon A+ Content & Brand Store Design - Marlytix" description="Enhance your Amazon listings with premium A+ Content, EBC, and custom Brand Storefront designs." />
      <ContactDrawer isOpen={isDrawerOpen} onClose={() => setDrawerOpen(false)} />

      <section className="hero" style={{ padding: '160px 0 100px', background: 'radial-gradient(circle at top, #1a1a1a 0%, var(--primary-color) 100%)' }}>
        <div className="container text-center">
          <h1 className="hero-title">Amazon <span className="text-accent">A+ Content</span></h1>
          <p className="hero-subtitle" style={{ maxWidth: '800px', margin: '0 auto' }}>
            Elevate your brand story. We design visually stunning A+ Content and Brand Stores that build trust and skyrocket conversion rates.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '50px', alignItems: 'center' }}>
            <div>
              <h2 className="section-title" style={{ textAlign: 'left' }}>Visual Storytelling that Converts</h2>
              <p style={{ color: 'var(--text-muted)', marginBottom: '20px', lineHeight: '1.8' }}>
                On Amazon, customers can't touch or feel your product. Your imagery and design are your only salespeople. Basic text descriptions no longer cut it. A+ Content (formerly EBC) allows brand-registered sellers to use rich text, high-definition images, and comparison charts to tell a compelling brand story.
              </p>
              <p style={{ color: 'var(--text-muted)', marginBottom: '30px', lineHeight: '1.8' }}>
                At Marlytix, our in-house creative studio specializes in e-commerce design psychology. We blend persuasive copywriting with stunning graphic design to create A+ modules and Amazon Storefronts that answer customer objections instantly, reduce return rates, and increase overall sales conversion by up to 20%.
              </p>
              <button onClick={() => setDrawerOpen(true)} className="btn btn-primary">Upgrade My Content</button>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Creative Design Team" 
                style={{ width: '100%', borderRadius: '12px', boxShadow: '0 20px 40px rgba(0,0,0,0.4)' }} 
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-secondary">
        <div className="container">
          <h2 className="section-title text-center" style={{ marginBottom: '50px' }}>Our Creative Arsenal</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
            <div className="service-card">
              <Layout className="text-accent" size={32} style={{ marginBottom: '20px' }} />
              <h3>A+ Content Modules</h3>
              <p style={{ color: 'var(--text-muted)' }}>We design seamless, visually cohesive A+ modules that highlight unique product features and cross-sell your other catalog items via comparison charts.</p>
            </div>
            <div className="service-card">
              <ShoppingCart className="text-accent" size={32} style={{ marginBottom: '20px' }} />
              <h3>Brand Storefronts</h3>
              <p style={{ color: 'var(--text-muted)' }}>We architect fully-branded Amazon Storefronts that act as a mini-website within Amazon, driving brand loyalty and increasing average order value (AOV).</p>
            </div>
            <div className="service-card">
              <Image className="text-accent" size={32} style={{ marginBottom: '20px' }} />
              <h3>Infographics & Lifestyle Images</h3>
              <p style={{ color: 'var(--text-muted)' }}>Our designers turn your main image stack into a powerful sales funnel using text-overlay infographics and relatable lifestyle composite imagery.</p>
            </div>
            <div className="service-card">
              <PenTool className="text-accent" size={32} style={{ marginBottom: '20px' }} />
              <h3>Persuasive Copywriting</h3>
              <p style={{ color: 'var(--text-muted)' }}>Beautiful design needs powerful words. Our copywriters craft compelling narratives that resonate emotionally with buyers while remaining SEO-compliant.</p>
            </div>
            <div className="service-card">
              <Smartphone className="text-accent" size={32} style={{ marginBottom: '20px' }} />
              <h3>Mobile-First Design</h3>
              <p style={{ color: 'var(--text-muted)' }}>Over 60% of Amazon sales happen on mobile. We explicitly design A+ content and images to look crisp, legible, and stunning on smaller screens.</p>
            </div>
            <div className="service-card">
              <CheckSquare className="text-accent" size={32} style={{ marginBottom: '20px' }} />
              <h3>Premium A+ (A++) Ready</h3>
              <p style={{ color: 'var(--text-muted)' }}>If you qualify for Premium A+ Content, we create interactive modules like video carousels, hotspot images, and Q&A modules to blow away the competition.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default APlusContent;
