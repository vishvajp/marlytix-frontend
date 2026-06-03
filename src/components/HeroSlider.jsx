import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { Link } from 'react-router-dom';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import './HeroSlider.css';

const HeroSlider = ({ onCtaClick }) => {
  return (
    <section className="hero-slider-section">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="slide-content" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)' }}>
            <div className="overlay"></div>
            <div className="container slide-text-container">
              <h1 className="slide-title">
                Data Driven <span className="text-accent">Amazon Advertising Agency</span>
              </h1>
              <p className="slide-subtitle">
                Maximize Your E-Commerce Sales With The Premier Amazon Ads Agency
              </p>
              <div className="slide-buttons">
                <button onClick={onCtaClick} className="btn btn-primary">Boost Your Sales</button>
                <Link to="/about" className="btn btn-outline slide-btn-outline">Learn More</Link>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide-content" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)' }}>
            <div className="overlay"></div>
            <div className="container slide-text-container">
              <h1 className="slide-title">
                End-To-End <span className="text-accent">Ecommerce Management</span>
              </h1>
              <p className="slide-subtitle">
                From SEO and PPC to Account Health, we manage everything so you can focus on growth.
              </p>
              <div className="slide-buttons">
                <button onClick={onCtaClick} className="btn btn-primary">Get Free Audit</button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide-content" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)' }}>
            <div className="overlay"></div>
            <div className="container slide-text-container">
              <h1 className="slide-title">
                Dominate <span className="text-accent">Flipkart Marketplace</span>
              </h1>
              <p className="slide-subtitle">
                Scale your business with expert Flipkart SEO, Smart Fulfillment, and Advertising Strategies.
              </p>
              <div className="slide-buttons">
                <button onClick={onCtaClick} className="btn btn-primary">Scale on Flipkart</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default HeroSlider;
