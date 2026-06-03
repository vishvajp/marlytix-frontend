import React, { useState } from 'react';
import { AlertOctagon, FileText, Scale, ShieldAlert, CheckCircle, Activity } from 'lucide-react';
import ContactDrawer from '../../components/ContactDrawer';
import SEO from '../../components/SEO';
import '../Home.css';

const AccountHealth = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  return (
    <div>
      <SEO title="Amazon Account Health & Reinstatement - Marlytix" description="Protect your Amazon account from suspensions. Expert account health monitoring and reinstatement appeals." />
      <ContactDrawer isOpen={isDrawerOpen} onClose={() => setDrawerOpen(false)} />

      <section className="hero" style={{ padding: '160px 0 100px', background: 'radial-gradient(circle at top, #1a1a1a 0%, var(--primary-color) 100%)' }}>
        <div className="container text-center">
          <h1 className="hero-title"><span className="text-accent">Account Health</span> Management</h1>
          <p className="hero-subtitle" style={{ maxWidth: '800px', margin: '0 auto' }}>
            Safeguard your business. We protect your account from suspensions, hijackers, and policy violations so you can sell with peace of mind.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '50px', alignItems: 'center' }}>
            <div>
              <h2 className="section-title" style={{ textAlign: 'left' }}>Your Amazon Lifeline</h2>
              <p style={{ color: 'var(--text-muted)', marginBottom: '20px', lineHeight: '1.8' }}>
                An Amazon account suspension is a seller's worst nightmare. With thousands (or millions) of dollars in inventory frozen and daily sales halted to zero, navigating Amazon's opaque Seller Performance team can be a terrifying and highly stressful experience.
              </p>
              <p style={{ color: 'var(--text-muted)', marginBottom: '30px', lineHeight: '1.8' }}>
                Marlytix provides expert Account Health management. Whether you've just received a scary policy warning, had an ASIN deactivated, or suffered a complete account suspension, our crisis response team knows exactly what Amazon wants to hear. We draft meticulous Plans of Action (POAs) and preemptively monitor your metrics to prevent disasters before they occur.
              </p>
              <button onClick={() => setDrawerOpen(true)} className="btn btn-primary">Get Suspension Help Now</button>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Account Health Risk" 
                style={{ width: '100%', borderRadius: '12px', boxShadow: '0 20px 40px rgba(0,0,0,0.4)' }} 
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-secondary">
        <div className="container">
          <h2 className="section-title text-center" style={{ marginBottom: '50px' }}>Our Health & Compliance Services</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
            <div className="service-card">
              <FileText className="text-accent" size={32} style={{ marginBottom: '20px' }} />
              <h3>Plan of Action (POA) Appeals</h3>
              <p style={{ color: 'var(--text-muted)' }}>We draft highly effective, professional appeal letters and POAs tailored to Amazon's exact formatting requirements to reinstate your account rapidly.</p>
            </div>
            <div className="service-card">
              <ShieldAlert className="text-accent" size={32} style={{ marginBottom: '20px' }} />
              <h3>ASIN Reinstatement</h3>
              <p style={{ color: 'var(--text-muted)' }}>Whether it's a 'Used Sold as New' complaint or an Intellectual Property (IP) claim, we appeal deactivated ASINs so you can get back to selling.</p>
            </div>
            <div className="service-card">
              <Activity className="text-accent" size={32} style={{ marginBottom: '20px' }} />
              <h3>Daily Metrics Monitoring</h3>
              <p style={{ color: 'var(--text-muted)' }}>We proactively monitor your Order Defect Rate (ODR), Late Dispatch Rate, and Valid Tracking Rate to ensure you stay well within Amazon's green zones.</p>
            </div>
            <div className="service-card">
              <AlertOctagon className="text-accent" size={32} style={{ marginBottom: '20px' }} />
              <h3>Hijacker & Leech Removal</h3>
              <p style={{ color: 'var(--text-muted)' }}>We protect your brand registry by sending cease and desist letters and filing test buys to aggressively remove unauthorized sellers from your listings.</p>
            </div>
            <div className="service-card">
              <Scale className="text-accent" size={32} style={{ marginBottom: '20px' }} />
              <h3>IP & Copyright Defense</h3>
              <p style={{ color: 'var(--text-muted)' }}>We assist in fighting off malicious copyright/trademark infringement claims from competitors attempting to sabotage your business.</p>
            </div>
            <div className="service-card">
              <CheckCircle className="text-accent" size={32} style={{ marginBottom: '20px' }} />
              <h3>Compliance Audits</h3>
              <p style={{ color: 'var(--text-muted)' }}>We conduct deep-dive audits on your product labels, packaging claims, and listing copy to ensure 100% compliance with FDA and Amazon TOS.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AccountHealth;
