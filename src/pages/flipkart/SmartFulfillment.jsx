import React, { useState } from 'react';
import { Box, Truck, CheckCircle } from 'lucide-react';
import ContactDrawer from '../../components/ContactDrawer';
import SEO from '../../components/SEO';
import '../Home.css';

const FkSmartFulfillment = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  return (
    <div>
      <SEO title="Flipkart Smart Fulfillment Services - Marlytix" description="Earn the F-Assured badge and speed up your deliveries with Flipkart Smart Fulfillment setup and management." />
      <ContactDrawer isOpen={isDrawerOpen} onClose={() => setDrawerOpen(false)} />

      <section className="hero" style={{ padding: '160px 0 100px', background: 'radial-gradient(circle at top, #0f172a 0%, var(--primary-color) 100%)' }}>
        <div className="container text-center">
          <h1 className="hero-title">Flipkart <span className="text-accent">Smart Fulfillment</span></h1>
          <p className="hero-subtitle" style={{ maxWidth: '800px', margin: '0 auto' }}>
            Earn the coveted 'F-Assured' badge. We help you transition to Smart Fulfillment for faster deliveries and higher search visibility.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '50px', alignItems: 'center' }}>
            <div>
              <h2 className="section-title" style={{ textAlign: 'left' }}>Unlock 'Flipkart Assured'</h2>
              <p style={{ color: 'var(--text-muted)', marginBottom: '20px', lineHeight: '1.8' }}>
                Products carrying the 'F-Assured' tag convert significantly higher than standard listings. Flipkart's Smart Fulfillment allows sellers to leverage Flipkart's logistics while managing inventory from their own warehouses.
              </p>
              <p style={{ color: 'var(--text-muted)', marginBottom: '30px', lineHeight: '1.8' }}>
                We guide you through the strict warehouse requirements, compliance protocols, and inventory mapping necessary to qualify for Smart Fulfillment. By securing the F-Assured badge, you gain priority ranking, lower shipping costs, and significantly improved customer trust.
              </p>
              <button onClick={() => setDrawerOpen(true)} className="btn btn-primary">Get F-Assured Status</button>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Smart Fulfillment" 
                style={{ width: '100%', borderRadius: '12px', boxShadow: '0 20px 40px rgba(0,0,0,0.4)' }} 
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FkSmartFulfillment;
