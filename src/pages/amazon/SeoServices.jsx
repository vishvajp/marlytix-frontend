import React, { useState } from 'react';
import { Search, TrendingUp, BarChart, Target, Eye, Key } from 'lucide-react';
import ContactDrawer from '../../components/ContactDrawer';
import SEO from '../../components/SEO';
import '../Home.css';

const SeoServices = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  return (
    <div>
      <SEO title="Amazon SEO & Listing Optimization Services - Marlytix" description="Rank higher on Amazon search results with our advanced SEO and keyword optimization strategies." />
      <ContactDrawer isOpen={isDrawerOpen} onClose={() => setDrawerOpen(false)} />

      <section className="hero" style={{ padding: '160px 0 100px', background: 'radial-gradient(circle at top, #f0f0f0 0%, var(--primary-color) 100%)' }}>
        <div className="container text-center">
          <h1 className="hero-title">Amazon <span className="text-accent">SEO Services</span></h1>
          <p className="hero-subtitle" style={{ maxWidth: '800px', margin: '0 auto' }}>
            Dominate page one of Amazon Search results. We engineer data-driven SEO strategies that drastically increase organic traffic and scale your sales velocity.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '50px', alignItems: 'center' }}>
            <div>
              <h2 className="section-title" style={{ textAlign: 'left' }}>The Science of A9 Algorithm</h2>
              <p style={{ color: 'var(--text-muted)', marginBottom: '20px', lineHeight: '1.8' }}>
                Being on page 2 of Amazon is like not existing at all. Over 70% of Amazon shoppers never click past the first page of search results. To capture this massive audience, your listings must speak perfectly to both the human buyer and Amazon's highly complex A9 ranking algorithm.
              </p>
              <p style={{ color: 'var(--text-muted)', marginBottom: '30px', lineHeight: '1.8' }}>
                At Marlytix, we don't just guess keywords. We utilize advanced reverse-ASIN lookups, search volume analysis, and conversion rate tracking to identify the exact search terms your competitors are capitalizing on. We then strategically weave these high-intent keywords into your titles, bullets, and backend search terms to catapult your organic rankings.
              </p>
              <button onClick={() => setDrawerOpen(true)} className="btn btn-primary">Boost Organic Ranking</button>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1533750349088-cd871a92f312?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Amazon SEO Strategy" 
                style={{ width: '100%', borderRadius: '12px', boxShadow: '0 20px 40px rgba(0,0,0,0.4)' }} 
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-secondary">
        <div className="container">
          <h2 className="section-title text-center" style={{ marginBottom: '50px' }}>Our Proven SEO Framework</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
            <div className="service-card">
              <Key className="text-accent" size={32} style={{ marginBottom: '20px' }} />
              <h3>Advanced Keyword Research</h3>
              <p style={{ color: 'var(--text-muted)' }}>We discover hidden, high-converting long-tail keywords and high-volume short-tail terms that your competitors are completely missing.</p>
            </div>
            <div className="service-card">
              <Target className="text-accent" size={32} style={{ marginBottom: '20px' }} />
              <h3>Title Optimization</h3>
              <p style={{ color: 'var(--text-muted)' }}>We craft compelling, keyword-rich titles that adhere strictly to Amazon's character limits while maximizing click-through rates (CTR).</p>
            </div>
            <div className="service-card">
              <BarChart className="text-accent" size={32} style={{ marginBottom: '20px' }} />
              <h3>Backend Search Terms</h3>
              <p style={{ color: 'var(--text-muted)' }}>We fully utilize the 250-byte limit in the backend search terms section, ensuring maximum indexation for colloquial terms and misspellings.</p>
            </div>
            <div className="service-card">
              <TrendingUp className="text-accent" size={32} style={{ marginBottom: '20px' }} />
              <h3>Bullet Points (Features)</h3>
              <p style={{ color: 'var(--text-muted)' }}>We write persuasive, benefit-driven bullet points packed with secondary keywords that answer customer objections and drive conversions.</p>
            </div>
            <div className="service-card">
              <Eye className="text-accent" size={32} style={{ marginBottom: '20px' }} />
              <h3>Competitor Benchmarking</h3>
              <p style={{ color: 'var(--text-muted)' }}>We conduct deep reverse-ASIN analysis to uncover the exact keyword strategies driving the top sellers in your specific category.</p>
            </div>
            <div className="service-card">
              <Search className="text-accent" size={32} style={{ marginBottom: '20px' }} />
              <h3>Continuous Index Tracking</h3>
              <p style={{ color: 'var(--text-muted)' }}>SEO isn't a one-time task. We monitor your organic rank positioning weekly and adjust our strategies to ensure you never lose your spot on Page 1.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SeoServices;
