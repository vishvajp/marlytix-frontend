import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { TrendingUp, Target, Search, BarChart3, CheckCircle2, ShieldAlert, Award, Globe, LineChart, ShieldCheck, Zap, DollarSign, Layers } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import HeroSlider from '../components/HeroSlider';
import ContactDrawer from '../components/ContactDrawer';
import './Home.css';

const Home = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  return (
    <div>
      <SEO title="Marlytix - Premier E-Commerce Management Agency" description="Scale your Amazon and Flipkart sales with Marlytix, India's leading e-commerce marketing and management agency." />
      <ContactDrawer isOpen={isDrawerOpen} onClose={() => setDrawerOpen(false)} />

      <HeroSlider onCtaClick={() => setDrawerOpen(true)} />

      {/* Intro Section */}
      <section className="py-20 md:py-28 text-center">
        <div className="container max-w-4xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold mb-8 leading-tight" style={{ color: 'var(--text-main)' }}>
            Your Trusted Partner in Amazon & Flipkart Growth
          </h2>
          <p className="leading-relaxed text-base md:text-lg mb-10 mx-auto max-w-4xl" style={{ color: 'var(--text-muted)' }}>
            At Marlytix, we deploy a 360-degree methodology to dramatically elevate your brand's performance on Amazon and Flipkart. As industry-leading experts in navigating complex e-commerce ecosystems, we provide a robust suite of marketing solutions specifically designed to increase your product visibility, accelerate revenue, and guarantee the highest possible Return on Ad Spend (ROAS). From launching highly targeted ad campaigns to meticulously refining your keywords, our dedicated specialists craft unique blueprints that capture your ideal audience. Armed with profound insights into Amazon's A9 and Flipkart's search algorithms, we equip businesses with the tools they need to dominate their niche. Partner with Marlytix to unleash your brand's true potential.
          </p>
          <div>
            <button onClick={() => setDrawerOpen(true)} className="btn btn-primary px-8 py-4 text-lg">Claim Your Free Audit</button>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="client-banner py-16 md:py-24" style={{
        backgroundImage: 'linear-gradient(rgba(245, 245, 245, 0.92), rgba(240, 240, 240, 0.95)), url(https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)',
        backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed'
      }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h3 style={{ color: 'var(--accent-blue)' }}>India's Premier E-Commerce Growth Agency – Marlytix</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3" style={{ color: 'var(--text-main)' }}>₹1.48M+</h2>
              <p className="uppercase tracking-wider text-sm md:text-base" style={{ color: 'var(--text-muted)' }}>Revenue Generated (YTD)</p>
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3" style={{ color: 'var(--text-main)' }}>15+</h2>
              <p className="uppercase tracking-wider text-sm md:text-base" style={{ color: 'var(--text-muted)' }}>Successful Brands</p>
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3" style={{ color: 'var(--text-main)' }}>4.8X</h2>
              <p className="uppercase tracking-wider text-sm md:text-base" style={{ color: 'var(--text-muted)' }}>Average Campaign ROAS</p>
            </div>
          </div>
        </div>
      </section>

      {/* High-Quality Services */}
      <section className="section-padding bg-secondary">
        <div className="container">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h2 className="section-title">Elite Marketing Solutions for E-Commerce Sellers</h2>
            <p className="section-subtitle">
              Dive into our extensive array of specialized Amazon advertising strategies, precisely engineered to scale your brand identity and secure sustainable market dominance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="service-card text-left">
              <div style={{ color: 'var(--accent-blue)', marginBottom: '15px' }}><Award size={32} /></div>
              <h3>Dedicated Specialists</h3>
              <p>Marlytix houses a premier team of e-commerce veterans. We design campaigns that instantly connect with your buyers by applying our unparalleled expertise in Amazon search dynamics and shopping behaviors.</p>
            </div>
            <div className="service-card text-left">
              <div style={{ color: 'var(--accent-blue)', marginBottom: '15px' }}><Globe size={32} /></div>
              <h3>Custom Storefront Design</h3>
              <p>We are experts at building visually stunning Amazon Brand Stores. From high-converting graphics to engaging lifestyle imagery, we construct a frictionless shopping journey that dramatically boosts conversion rates.</p>
            </div>
            <div className="service-card text-left">
              <div style={{ color: 'var(--accent-blue)', marginBottom: '15px' }}><TrendingUp size={32} /></div>
              <h3>Advanced PPC Management</h3>
              <p>Our analytical methodology guarantees your ad spend drives tangible results. We offer masterful oversight of keyword bidding, competitor targeting, and placement optimization to stretch your advertising budget further.</p>
            </div>
            <div className="service-card text-left">
              <div style={{ color: 'var(--accent-blue)', marginBottom: '15px' }}><BarChart3 size={32} /></div>
              <h3>Data-Driven Insights</h3>
              <p>We deliver transparent, in-depth reports tracking vital KPIs like ACoS, TACoS, and click-through rates. Our strategists transform complex data into clear, actionable steps to continuously propel your business forward.</p>
            </div>
            <div className="service-card text-left">
              <div style={{ color: 'var(--accent-blue)', marginBottom: '15px' }}><Target size={32} /></div>
              <h3>Performance-Centric Growth</h3>
              <p>Profitability is at the core of our operations. We vigilantly optimize your campaigns to ensure every rupee invested yields a substantial return, cementing your brand's longevity in the marketplace.</p>
            </div>
            <div className="service-card text-left">
              <div style={{ color: 'var(--accent-blue)', marginBottom: '15px' }}><Layers size={32} /></div>
              <h3>Customized Action Plans</h3>
              <p>No two brands are alike, and neither are our strategies. We formulate bespoke growth roadmaps that proactively adapt to algorithm shifts, seasonal trends, and evolving consumer demands.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Marlytix The Best Amazon Marketing Company */}
      <section className="section-padding" style={{
        backgroundImage: 'linear-gradient(rgba(248, 249, 250, 0.95), rgba(242, 242, 242, 0.95)), url(https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)',
        backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed'
      }}>
        <div className="container">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h2 className="section-title">Why Marlytix is Your Ultimate Growth Partner</h2>
            <p className="section-subtitle">Mastering highly competitive marketplaces like Amazon and Flipkart requires more than just launching ads—it demands a visionary partner.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left">
            <div>
              <h3 style={{ marginBottom: '15px' }}>Custom-Tailored Blueprints</h3>
              <p style={{ color: 'var(--text-muted)' }}>We discard the cookie-cutter approach. Our team immerses itself in your business model to construct tailored strategies that align perfectly with your unique market positioning and long-term vision.</p>
            </div>
            <div>
              <h3 style={{ marginBottom: '15px' }}>All-in-One Solutions</h3>
              <p style={{ color: 'var(--text-muted)' }}>Whether it's overhauling product listings, designing premium A+ content, or aggressively scaling Sponsored Products, Marlytix serves as your comprehensive hub for Amazon and Flipkart success.</p>
            </div>
            <div>
              <h3 style={{ marginBottom: '15px' }}>Agile Market Response</h3>
              <p style={{ color: 'var(--text-muted)' }}>Amazon changes daily. We proactively track algorithm modifications and competitor movements, instantly pivoting our tactics to ensure your brand always maintains its competitive edge.</p>
            </div>
            <div>
              <h3 style={{ marginBottom: '15px' }}>Clear & Honest Reporting</h3>
              <p style={{ color: 'var(--text-muted)' }}>We believe in absolute transparency. You will always know exactly where your ad spend goes through our detailed weekly updates, scheduled strategy calls, and candid communication.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Listing Optimization & Catalogs */}
      <section className="section-padding bg-secondary">
        <div className="container flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1">
            <h2 className="section-title">Maximize Product Visibility with Elite Listing Optimization</h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '30px' }}>
              A perfectly engineered product listing is the backbone of Amazon sales. We excel at transforming dull product pages into high-converting assets that dominate search results. By executing rigorous keyword analysis and utilizing persuasive copywriting, we drastically improve your organic indexing and ultimately, your bottom line.
            </p>
            <h3 style={{ marginBottom: '15px' }}>Flawless Catalog Management</h3>
            <p style={{ color: 'var(--text-muted)' }}>
              A disorganized catalog leads to lost sales. We take charge of your inventory architecture, intelligently grouping parent-child variations to provide an intuitive shopping experience. Let us iron out the technical backend so your customers can shop effortlessly.
            </p>
            <button onClick={() => setDrawerOpen(true)} className="btn btn-primary" style={{ marginTop: '20px' }}>Scale Your Sales Now</button>
          </div>
          <div className="flex-1 w-full">
            <img
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Amazon Listing Optimization"
              style={{ width: '100%', borderRadius: '12px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
            />
          </div>
        </div>
      </section>

      {/* Unlock Your Potential */}
      <section className="section-padding" style={{
        backgroundImage: 'linear-gradient(rgba(248, 249, 250, 0.95), rgba(242, 242, 242, 0.95)), url(https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)',
        backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed'
      }}>
        <div className="container">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h2 className="section-title">Achieve Peak Performance through Strategic Advertising</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="service-card flex-1">
              <h3>In-Depth Catalog Review</h3>
              <ul style={{ color: 'var(--text-muted)', marginTop: '15px', paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <li>Executing extensive deep-dives into your current product portfolio.</li>
                <li>Mining highly relevant backend keywords and category terms.</li>
                <li>Rewriting titles, bullet points, and descriptions for maximum SEO impact.</li>
                <li>Repurposing existing brand assets into compelling infographics.</li>
              </ul>
            </div>
            <div className="service-card flex-1">
              <h3>Dynamic Pricing & Promos</h3>
              <ul style={{ color: 'var(--text-muted)', marginTop: '15px', paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <li>Evaluating competitor trends to pinpoint your most profitable price point.</li>
                <li>Deploying aggressive Sponsored Brand and Lightning Deal campaigns.</li>
                <li>Structuring limited-time offers, coupons, and bulk discounts.</li>
                <li>A/B testing price elasticity for consistent revenue generation.</li>
              </ul>
            </div>
            <div className="service-card flex-1">
              <h3>Path to Best Seller Rank</h3>
              <ul style={{ color: 'var(--text-muted)', marginTop: '15px', paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <li>Establishing total search dominance through high-velocity sales tactics.</li>
                <li>Securing valuable organic placements for primary search terms.</li>
                <li>Designing mobile-first storefronts tailored for on-the-go shoppers.</li>
                <li>Safeguarding margins through intelligent inventory forecasting.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Elevate Your Presence */}
      <section className="section-padding bg-secondary text-center">
        <div className="container max-w-4xl mx-auto">
          <h2 className="section-title">Protect and Enhance Your Brand Identity</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '20px' }}>
            We elevate your brand above the noise by fully leveraging Amazon's A+ Content modules, Brand Registry features, and Flipkart's Enhanced Image guidelines. Registering your trademark is a critical first step; our team assists you throughout the IP application process to ensure your brand is officially protected on all marketplaces.
          </p>
          <p style={{ color: 'var(--text-muted)' }}>
            Furthermore, we fiercely defend your digital storefront. By continuously scanning for unauthorized hijackers, counterfeiters, and copyright violations, we take swift legal action to issue takedown requests—ensuring your Buy Box and brand reputation remain entirely in your control.
          </p>
        </div>
      </section>

      {/* Top Marketing Services Grid */}
      <section className="section-padding" style={{
        backgroundImage: 'linear-gradient(rgba(248, 249, 250, 0.95), rgba(242, 242, 242, 0.95)), url(https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)',
        backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed'
      }}>
        <div className="container text-center">
          <h2 className="section-title">Accelerate Your Traffic With Our Core Solutions</h2>
          <div style={{ marginTop: '50px', paddingBottom: '50px' }}>
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              breakpoints={{
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              style={{ padding: '20px 10px 50px 10px' }}
              className="services-swiper"
            >
              <SwiperSlide>
                <div className="service-card h-100" style={{ height: '100%' }}>
                  <div className="service-icon"><Globe size={24} /></div>
                  <h3>Strategic Advisory</h3>
                  <p>Gain a competitive edge with bespoke consultations focused on market positioning and long-term brand equity.</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="service-card h-100" style={{ height: '100%' }}>
                  <div className="service-icon"><Zap size={24} /></div>
                  <h3>High-Impact Launches</h3>
                  <p>Generate immediate momentum for new products using proven velocity-building marketing frameworks.</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="service-card h-100" style={{ height: '100%' }}>
                  <div className="service-icon"><Search size={24} /></div>
                  <h3>Organic SEO Mastery</h3>
                  <p>Capture highly-converting traffic by infusing your listings with rigorously researched backend search terms.</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="service-card h-100" style={{ height: '100%' }}>
                  <div className="service-icon"><Target size={24} /></div>
                  <h3>Targeted Ad Campaigns</h3>
                  <p>Dominate your category with hyper-focused PPC strategies that lower acquisition costs and maximize scale.</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="service-card h-100" style={{ height: '100%' }}>
                  <div className="service-icon"><LineChart size={24} /></div>
                  <h3>Continuous Tracking</h3>
                  <p>Stay ahead of the curve with real-time analytics monitoring, ensuring your ads perform optimally around the clock.</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="service-card h-100" style={{ height: '100%' }}>
                  <div className="service-icon"><CheckCircle2 size={24} /></div>
                  <h3>End-to-End Management</h3>
                  <p>Delegate the heavy lifting to us. We handle daily operations, case logs, and inventory planning seamlessly.</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="service-card h-100" style={{ height: '100%' }}>
                  <div className="service-icon"><DollarSign size={24} /></div>
                  <h3>Competitive Pricing</h3>
                  <p>Secure the Buy Box more frequently through sophisticated market analysis and automated repricing strategies.</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="service-card h-100" style={{ height: '100%' }}>
                  <div className="service-icon"><Award size={24} /></div>
                  <h3>Niche Growth Strategies</h3>
                  <p>From DSP advertising to global marketplace expansion, we provide the specialized tools necessary for elite sellers.</p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-secondary">
        <div className="container flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1">
            <h2 className="section-title">Why E-Commerce Leaders Choose Marlytix?</h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '30px' }}>
              Navigating the saturated world of digital retail requires an agency that consistently delivers. Here is why partnering with Marlytix guarantees an unfair advantage:
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'flex', gap: '15px' }}>
                <div style={{ color: 'var(--accent-blue)', fontWeight: 'bold', fontSize: '1.2rem' }}>1.</div>
                <div>
                  <h4 style={{ marginBottom: '5px' }}>Proven Track Record of Excellence</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>We bring years of documented success and an intricate understanding of Amazon's complex ecosystem.</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '15px' }}>
                <div style={{ color: 'var(--accent-blue)', fontWeight: 'bold', fontSize: '1.2rem' }}>2.</div>
                <div>
                  <h4 style={{ marginBottom: '5px' }}>Technologically Advanced Strategies</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>We merge proprietary software insights with human expertise to engineer campaigns that outsmart competitors.</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '15px' }}>
                <div style={{ color: 'var(--accent-blue)', fontWeight: 'bold', fontSize: '1.2rem' }}>3.</div>
                <div>
                  <h4 style={{ marginBottom: '5px' }}>Expertise in Global Expansion</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Ready to sell internationally? Our team is equipped to launch and scale your products across global Amazon marketplaces.</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '15px' }}>
                <div style={{ color: 'var(--accent-blue)', fontWeight: 'bold', fontSize: '1.2rem' }}>4.</div>
                <div>
                  <h4 style={{ marginBottom: '5px' }}>Relentless Focus on Profitability</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>We don't just chase vanity metrics. We obsess over improving your profit margins and lowering your ACoS.</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '15px' }}>
                <div style={{ color: 'var(--accent-blue)', fontWeight: 'bold', fontSize: '1.2rem' }}>5.</div>
                <div>
                  <h4 style={{ marginBottom: '5px' }}>Unwavering Client Support</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Expect rapid response times, clear performance dashboards, and dedicated account managers who truly care.</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '15px' }}>
                <div style={{ color: 'var(--accent-blue)', fontWeight: 'bold', fontSize: '1.2rem' }}>6.</div>
                <div>
                  <h4 style={{ marginBottom: '5px' }}>Future-Proofing Your Brand</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>We build resilient, compliant brands capable of surviving algorithm updates and thriving for decades.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 w-full">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Team discussing ecommerce strategy"
              style={{ width: '100%', borderRadius: '12px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
            />
          </div>
        </div>
      </section>

      {/* Account Suspension Help */}
      <section className="section-padding">
        <div className="container text-center max-w-3xl mx-auto">
          <ShieldAlert size={48} className="text-accent" style={{ margin: '0 auto 20px auto' }} />
          <h2 className="section-title">Need Help Resolving Amazon Account Suspensions?</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '20px' }}>
            An unexpected account deactivation can cripple your cash flow and destroy momentum. If you've received a dreaded suspension notification, our crisis management team is on standby. We expertly draft Plans of Action (POAs) and navigate Amazon's rigid appeal process to reinstate your selling privileges rapidly.
          </p>
          <p style={{ color: 'var(--text-muted)', marginBottom: '30px' }}>
            More importantly, we conduct proactive audits to ensure your operations remain 100% compliant with Amazon's Terms of Service, shielding your business from future risks. We believe in ethical, white-hat marketing strategies that build lasting value.
          </p>
          <button onClick={() => setDrawerOpen(true)} className="btn btn-outline">Speak to a Suspension Expert</button>
        </div>
      </section>

      {/* Trusted Clients */}
      <section className="client-banner py-10 md:py-16">
        <div className="container text-center">
          <p style={{ color: 'var(--text-muted)', marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.85rem' }}>Trusted By Innovative Brands</p>
          <div className="client-logos">
            <img className="client-logo-img" src="https://placehold.co/150x50/eeeeee/555555?text=BRAND+ONE" alt="Client 1" style={{ height: '40px', objectFit: 'contain', opacity: '0.6', transition: 'all 0.3s ease', cursor: 'pointer' }} onMouseOver={(e) => e.currentTarget.style.opacity = '1'} onMouseOut={(e) => e.currentTarget.style.opacity = '0.6'} />
            <img className="client-logo-img" src="https://placehold.co/150x50/eeeeee/555555?text=NATURES+BEST" alt="Client 2" style={{ height: '40px', objectFit: 'contain', opacity: '0.6', transition: 'all 0.3s ease', cursor: 'pointer' }} onMouseOver={(e) => e.currentTarget.style.opacity = '1'} onMouseOut={(e) => e.currentTarget.style.opacity = '0.6'} />
            <img className="client-logo-img" src="https://placehold.co/150x50/eeeeee/555555?text=TECHCORP" alt="Client 3" style={{ height: '40px', objectFit: 'contain', opacity: '0.6', transition: 'all 0.3s ease', cursor: 'pointer' }} onMouseOver={(e) => e.currentTarget.style.opacity = '1'} onMouseOut={(e) => e.currentTarget.style.opacity = '0.6'} />
            <img className="client-logo-img" src="https://placehold.co/150x50/eeeeee/555555?text=ELEVATE" alt="Client 4" style={{ height: '40px', objectFit: 'contain', opacity: '0.6', transition: 'all 0.3s ease', cursor: 'pointer' }} onMouseOver={(e) => e.currentTarget.style.opacity = '1'} onMouseOut={(e) => e.currentTarget.style.opacity = '0.6'} />
            <img className="client-logo-img" src="https://placehold.co/150x50/eeeeee/555555?text=LUMINA" alt="Client 5" style={{ height: '40px', objectFit: 'contain', opacity: '0.6', transition: 'all 0.3s ease', cursor: 'pointer' }} onMouseOver={(e) => e.currentTarget.style.opacity = '1'} onMouseOut={(e) => e.currentTarget.style.opacity = '0.6'} />
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
