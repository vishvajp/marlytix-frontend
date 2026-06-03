import React, { useState } from 'react';
import { Settings, Shield, Clock, TrendingUp, HelpCircle, UserCheck } from 'lucide-react';
import ContactDrawer from '../../components/ContactDrawer';
import SEO from '../../components/SEO';
import '../Home.css';

const SellerCentral = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  return (
    <div>
      <SEO title="Amazon Seller Central Management - Marlytix" description="Complete Amazon Seller Central management services including inventory, PPC, and daily operations." />
      <ContactDrawer isOpen={isDrawerOpen} onClose={() => setDrawerOpen(false)} />

      <section className="hero" style={{ padding: '160px 0 100px', background: 'radial-gradient(circle at top, #1a1a1a 0%, var(--primary-color) 100%)' }}>
        <div className="container text-center">
          <h1 className="hero-title"><span className="text-accent">Seller Central</span> Management</h1>
          <p className="hero-subtitle" style={{ maxWidth: '800px', margin: '0 auto' }}>
            Hand over the daily operational headaches of Amazon Seller Central to the experts. We manage everything from inventory planning to customer service.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '50px', alignItems: 'center' }}>
            <div>
              <h2 className="section-title" style={{ textAlign: 'left' }}>Your Entire Business, Managed Flawlessly</h2>
              <p style={{ color: 'var(--text-muted)', marginBottom: '20px', lineHeight: '1.8' }}>
                Navigating the complex labyrinth of Amazon Seller Central is a full-time job. Between managing inventory limits, responding to customer queries, addressing suppressed listings, and tracking shipments, brand owners often find themselves drowning in operational tasks rather than focusing on growth.
              </p>
              <p style={{ color: 'var(--text-muted)', marginBottom: '30px', lineHeight: '1.8' }}>
                Marlytix acts as your dedicated in-house e-commerce team. We take over the complete day-to-day management of your Seller Central account. From opening critical case logs with Amazon support to forecasting FBA inventory replenishments, we ensure your business runs like a well-oiled machine 24/7.
              </p>
              <button onClick={() => setDrawerOpen(true)} className="btn btn-primary">Automate My Operations</button>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Seller Central Dashboard" 
                style={{ width: '100%', borderRadius: '12px', boxShadow: '0 20px 40px rgba(0,0,0,0.4)' }} 
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-secondary">
        <div className="container">
          <h2 className="section-title text-center" style={{ marginBottom: '50px' }}>What We Manage For You</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
            <div className="service-card">
              <Settings className="text-accent" size={32} style={{ marginBottom: '20px' }} />
              <h3>Daily Account Operations</h3>
              <p style={{ color: 'var(--text-muted)' }}>We monitor your account dashboard daily, resolving suppressed listings, stranded inventory, and ensuring all ASINs are fully buyable.</p>
            </div>
            <div className="service-card">
              <TrendingUp className="text-accent" size={32} style={{ marginBottom: '20px' }} />
              <h3>FBA Inventory Forecasting</h3>
              <p style={{ color: 'var(--text-muted)' }}>We analyze sales velocity to accurately predict inventory needs, creating shipping plans and avoiding dreaded stockouts or overage fees.</p>
            </div>
            <div className="service-card">
              <HelpCircle className="text-accent" size={32} style={{ marginBottom: '20px' }} />
              <h3>Case Log Management</h3>
              <p style={{ color: 'var(--text-muted)' }}>Tired of generic Amazon Seller Support replies? We expertly navigate the ticketing system, escalating cases to get actual resolutions for complex issues.</p>
            </div>
            <div className="service-card">
              <UserCheck className="text-accent" size={32} style={{ marginBottom: '20px' }} />
              <h3>Customer Service & Feedback</h3>
              <p style={{ color: 'var(--text-muted)' }}>We manage buyer-seller messaging within Amazon's 24-hour SLA, and actively work to remove unfair negative feedback and product reviews.</p>
            </div>
            <div className="service-card">
              <Shield className="text-accent" size={32} style={{ marginBottom: '20px' }} />
              <h3>Promotions & Deals</h3>
              <p style={{ color: 'var(--text-muted)' }}>We strategize and submit Lightning Deals, 7-Day Deals, Prime Exclusive Discounts, and customized coupons to drive massive sales velocity.</p>
            </div>
            <div className="service-card">
              <Clock className="text-accent" size={32} style={{ marginBottom: '20px' }} />
              <h3>Reimbursement Recovery</h3>
              <p style={{ color: 'var(--text-muted)' }}>Amazon owes you money. We audit your account for lost/damaged FBA inventory and incorrectly charged fees, clawing back funds directly to your balance.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SellerCentral;
