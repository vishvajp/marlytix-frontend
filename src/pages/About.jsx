import React, { useState } from 'react';
import { Users, Award, ShieldCheck, Target, Lightbulb, TrendingUp, Zap } from 'lucide-react';
import ContactDrawer from '../components/ContactDrawer';
import SEO from '../components/SEO';
import './Home.css';

const About = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  return (
    <div>
      <SEO title="About Us - Marlytix E-Commerce Agency" description="Learn about Marlytix, our mission, our dedicated team of e-commerce experts, and our core values for growing brands on Amazon and Flipkart." />
      <ContactDrawer isOpen={isDrawerOpen} onClose={() => setDrawerOpen(false)} />

      {/* Hero Section */}
      <section className="hero" style={{ padding: '160px 0 100px', background: 'radial-gradient(circle at top, #f0f0f0 0%, var(--primary-color) 100%)' }}>
        <div className="container text-center px-4">
          <h1 className="hero-title text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
            Redefining <span className="text-accent">E-Commerce Success</span>
          </h1>
          <p className="hero-subtitle text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            At Marlytix, we don't just run ads—we engineer scalable growth. We are a collective of data scientists, marketing strategists, and e-commerce veterans obsessed with dominating the Amazon and Flipkart marketplaces.
          </p>
        </div>
      </section>

      {/* Our Story & Mission */}
      <section className="section-padding bg-secondary">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '20px' }}>Our Journey</h2>
              <p style={{ color: 'var(--text-muted)', marginBottom: '20px', lineHeight: '1.8', fontSize: '1.05rem' }}>
                Marlytix was born out of a simple frustration: seeing exceptional products fail to gain traction simply due to poor visibility and mismanaged advertising. What started as a small group of elite sellers decoding the A9 algorithm has rapidly evolved into India's premier Amazon & Flipkart Advertising Agency.
              </p>
              <p style={{ color: 'var(--text-muted)', marginBottom: '30px', lineHeight: '1.8', fontSize: '1.05rem' }}>
                Today, we are the driving force behind the success of over 150+ leading brands. We manage massive ad portfolios, navigating the complexities of PPC, SEO, and Brand Analytics so our clients can focus on what they do best: creating phenomenal products. Our mission is clear: to transform your Amazon and Flipkart presence into an unstoppable, hands-free profit engine.
              </p>
              <div className="flex flex-wrap gap-8 mt-10">
                <div>
                  <h3 style={{ fontSize: '2.5rem', color: 'var(--accent-blue)', marginBottom: '5px' }}>150+</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Brands Scaled</p>
                </div>
                <div>
                  <h3 style={{ fontSize: '2.5rem', color: 'var(--accent-blue)', marginBottom: '5px' }}>$50M+</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Ad Spend Managed</p>
                </div>
              </div>
            </div>
            <div>
              <div style={{ position: 'relative' }}>
                <div style={{ 
                  position: 'absolute', top: '-20px', left: '-20px', width: '100%', height: '100%', 
                  border: '2px solid var(--accent-light)', borderRadius: '12px', zIndex: '0', opacity: '0.5' 
                }}></div>
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Marlytix Team Strategy" 
                  style={{ width: '100%', borderRadius: '12px', position: 'relative', zIndex: '1', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding">
        <div className="container text-center">
          <h2 className="section-title">The Principles We Stand By</h2>
          <p className="section-subtitle max-w-3xl mx-auto mb-12">
            Our relentless pursuit of excellence is guided by a core set of values that prioritize our clients' long-term profitability and sustainable brand health.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="service-card">
              <div className="service-icon"><ShieldCheck size={28} /></div>
              <h3>Radical Transparency</h3>
              <p>No hidden fees, no obscured data. We provide crystal-clear reporting so you always know exactly how every rupee of your ad spend is performing.</p>
            </div>
            <div className="service-card">
              <div className="service-icon"><TrendingUp size={28} /></div>
              <h3>ROI-Obsessed</h3>
              <p>Vanity metrics don't pay the bills. We ruthlessly optimize for profitability, ensuring your True ACoS (TACoS) remains healthy while scaling your top line.</p>
            </div>
            <div className="service-card">
              <div className="service-icon"><Lightbulb size={28} /></div>
              <h3>Agile Innovation</h3>
              <p>Marketplaces like Amazon and Flipkart shift constantly. Our strategies are highly adaptable, utilizing the latest beta tools, API integrations, and market intelligence.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why We Are Different Grid */}
      <section className="section-padding bg-secondary">
        <div className="container">
          <h2 className="section-title text-center" style={{ marginBottom: '50px' }}>What Makes Marlytix Different?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div style={{ background: 'var(--glass-bg)', padding: '30px', borderRadius: '15px', border: '1px solid var(--glass-border)' }}>
              <Users className="text-accent" size={32} style={{ marginBottom: '15px' }} />
              <h4 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>Specialized Squads</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6' }}>You don't get a generic account manager. You get a dedicated pod of PPC buyers, SEO copywriters, and catalog experts.</p>
            </div>
            <div style={{ background: 'var(--glass-bg)', padding: '30px', borderRadius: '15px', border: '1px solid var(--glass-border)' }}>
              <Award className="text-accent" size={32} style={{ marginBottom: '15px' }} />
              <h4 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>Award-Winning Results</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6' }}>Recognized as top e-commerce growth partners, our case studies reflect millions in verified incremental revenue.</p>
            </div>
            <div style={{ background: 'var(--glass-bg)', padding: '30px', borderRadius: '15px', border: '1px solid var(--glass-border)' }}>
              <Target className="text-accent" size={32} style={{ marginBottom: '15px' }} />
              <h4 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>Data-Backed Decisions</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6' }}>We eliminate the guesswork. Every bid adjustment and keyword insertion is backed by hard statistical evidence.</p>
            </div>
            <div style={{ background: 'var(--glass-bg)', padding: '30px', borderRadius: '15px', border: '1px solid var(--glass-border)' }}>
              <Zap className="text-accent" size={32} style={{ marginBottom: '15px' }} />
              <h4 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>Holistic Approach</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6' }}>We don't look at ads in a vacuum. We optimize your supply chain, pricing, and overall listing health for maximum impact.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding text-center" style={{ 
        background: 'linear-gradient(135deg, rgba(255,87,34,0.06) 0%, rgba(255,138,101,0.08) 100%)',
        borderTop: '1px solid rgba(255,87,34,0.1)'
      }}>
        <div className="container max-w-3xl mx-auto">
          <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Ready to Dominate Your Category?</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '40px' }}>
            Stop leaving money on the table. Partner with Marlytix today and let our experts uncover hidden revenue opportunities in your Amazon and Flipkart accounts.
          </p>
          <button onClick={() => setDrawerOpen(true)} className="btn btn-primary" style={{ padding: '15px 40px', fontSize: '1.1rem' }}>
            Book Your Free Strategy Call
          </button>
        </div>
      </section>

    </div>
  );
};

export default About;
