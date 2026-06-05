import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import { ArrowRight, TrendingUp, ShoppingCart, Target, Globe } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import './HeroSlider.css';

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    subtitle: 'Data-Driven Amazon Advertising',
    title: 'Maximize Your',
    highlight: 'E-Commerce Revenue',
    description: 'We turn ad spend into profit machines with precision PPC, strategic SEO, and relentless optimization.',
  },
  {
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    subtitle: 'End-to-End Management',
    title: 'Scale Across',
    highlight: 'Every Marketplace',
    description: 'From Amazon to Flipkart — we manage listings, ads, account health, and growth strategy so you can focus on your product.',
  },
  {
    image: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    subtitle: 'Strategic Growth Partners',
    title: 'Dominate Your',
    highlight: 'Category Rankings',
    description: 'Our elite team of marketplace experts engineers campaigns that crush competitors and capture the Buy Box.',
  },
];

const AnimatedCounter = ({ end, suffix = '', prefix = '' }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [end]);
  return <>{prefix}{count.toLocaleString()}{suffix}</>;
};

const HeroSlider = ({ onCtaClick }) => {
  return (
    <section className="hero-section">
      {/* Background Image Carousel */}
      <div className="hero-carousel-bg">
        <Swiper
          modules={[Autoplay, EffectFade, Pagination]}
          effect="fade"
          speed={1200}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{
            clickable: true,
            el: '.hero-custom-pagination',
            bulletClass: 'hero-bullet',
            bulletActiveClass: 'hero-bullet-active'
          }}
          loop={true}
          className="hero-swiper"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div
                className="hero-slide-bg"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="hero-overlay"></div>
              </div>
              <div className="hero-slide-container container">
                <div className="hero-slide-content">
                  <div className="hero-slide-badge">{slide.subtitle}</div>
                  <h1 className="hero-slide-title">
                    {slide.title}{' '}
                    <span className="hero-slide-highlight">{slide.highlight}</span>
                  </h1>
                  <p className="hero-slide-desc">{slide.description}</p>
                  <div className="hero-slide-actions">
                    <button onClick={onCtaClick} className="btn btn-primary hero-btn">
                      Get Free Audit <ArrowRight size={18} />
                    </button>
                    <Link to="/about" className="hero-link-btn">
                      Learn More <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="hero-custom-pagination"></div>
      </div>

      {/* Bottom Metrics Bar */}
      <div className="hero-bottom-bar">
        <div className="container">
          <div className="hero-metrics-row">
            <div className="hero-metric">
              <TrendingUp size={20} className="hero-metric-ico" />
              <div>
                <span className="hero-metric-num"><AnimatedCounter end={12.5} prefix="₹" suffix="Cr+" /></span>
                <span className="hero-metric-lbl">Revenue</span>
              </div>
            </div>
            <div className="hero-metric-sep"></div>
            <div className="hero-metric">
              <Target size={20} className="hero-metric-ico" />
              <div>
                <span className="hero-metric-num"><AnimatedCounter end={6} suffix=".8X" /></span>
                <span className="hero-metric-lbl">Avg. ROAS</span>
              </div>
            </div>
            <div className="hero-metric-sep"></div>
            <div className="hero-metric">
              <ShoppingCart size={20} className="hero-metric-ico" />
              <div>
                <span className="hero-metric-num"><AnimatedCounter end={15} suffix="+" /></span>
                <span className="hero-metric-lbl">Brands</span>
              </div>
            </div>
            <div className="hero-metric-sep"></div>
            <div className="hero-metric">
              <Globe size={20} className="hero-metric-ico" />
              <div>
                <span className="hero-metric-num"><AnimatedCounter end={5} suffix="+" /></span>
                <span className="hero-metric-lbl">Marketplaces</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
