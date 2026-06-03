import React, { useState } from 'react';
import { ShieldAlert, CheckCircle } from 'lucide-react';
import ContactDrawer from '../../components/ContactDrawer';
import SEO from '../../components/SEO';
import '../Home.css';

const FkAccountHealth = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  return (
    <div>
      <SEO title="Flipkart Account Health & Reinstatement - Marlytix" description="Maintain a flawless Flipkart seller tier and recover from suspensions with our account health services." />
      <ContactDrawer isOpen={isDrawerOpen} onClose={() => setDrawerOpen(false)} />

      <section className="hero" style={{ padding: '160px 0 100px', background: 'radial-gradient(circle at top, #0f172a 0%, var(--primary-color) 100%)' }}>
        <div className="container text-center">
          <h1 className="hero-title">Flipkart <span className="text-accent">Account Health</span></h1>
          <p className="hero-subtitle" style={{ maxWidth: '800px', margin: '0 auto' }}>
            Maintain tier-1 seller status. We monitor your seller metrics to prevent listing suspensions and tier downgrades on Flipkart.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '50px', alignItems: 'center' }}>
            <div>
              <h2 className="section-title" style={{ textAlign: 'left' }}>Protecting Your Seller Tier</h2>
              <p style={{ color: 'var(--text-muted)', marginBottom: '20px', lineHeight: '1.8' }}>
                Flipkart strictly enforces its seller metrics (Seller Cancellations, RTD breaches, and Return rates). Slipping into the Bronze tier drastically increases your shipping fees and reduces your visibility. Even worse, consistent metric failures lead to account blacklisting.
              </p>
              <p style={{ color: 'var(--text-muted)', marginBottom: '30px', lineHeight: '1.8' }}>
                We actively monitor your Seller Scorecard. By preemptively identifying operational bottlenecks and appealing unfair return metrics (SPF claims), we ensure you maintain Silver or Gold tier status, keeping your margins healthy and your account safe.
              </p>
              <button onClick={() => setDrawerOpen(true)} className="btn btn-primary">Audit My Account Health</button>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Account Health Monitoring" 
                style={{ width: '100%', borderRadius: '12px', boxShadow: '0 20px 40px rgba(0,0,0,0.4)' }} 
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FkAccountHealth;
