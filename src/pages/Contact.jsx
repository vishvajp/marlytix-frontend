import React, { useState } from 'react';
import axios from 'axios';
import { Mail, Phone, MapPin } from 'lucide-react';
import toast from 'react-hot-toast';
import SEO from '../components/SEO';
import './Home.css';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Amazon Account Management',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/contact`, formData);
      if (res.data) {
        toast.success('Success! We will get back to you shortly.');
        setFormData({ name: '', email: '', phone: '', service: 'Amazon Account Management', message: '' });
      }
    } catch (error) {
      console.error(error);
      toast.error('Error submitting form. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <SEO title="Contact Us - Marlytix" description="Get in touch with Marlytix for a free e-commerce audit. We help brands dominate Amazon and Flipkart." />
      <section className="hero py-16 md:py-28" style={{ background: 'radial-gradient(circle at top, #1a1a1a 0%, var(--primary-color) 100%)' }}>
        <div className="container text-center px-4">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">Let's Talk <span className="text-accent">Growth.</span></h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Ready to scale your e-commerce business? Get in touch with our experts for a free audit and consultation.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            
            {/* Contact Info */}
            <div>
              <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>Get in Touch</h2>
              <p style={{ color: 'var(--text-muted)', marginBottom: '40px' }}>
                Fill out the form and our team will reach out to schedule a free 30-minute discovery call.
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
                  <div style={{ backgroundColor: 'rgba(37,99,235,0.1)', padding: '15px', borderRadius: '50%' }}>
                    <Mail className="text-accent" size={24} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.1rem', marginBottom: '5px' }}>Email Us</h4>
                    <p style={{ color: 'var(--text-muted)' }}>info@marlytix.com</p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
                  <div style={{ backgroundColor: 'rgba(37,99,235,0.1)', padding: '15px', borderRadius: '50%' }}>
                    <Phone className="text-accent" size={24} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.1rem', marginBottom: '5px' }}>Call Us</h4>
                    <p style={{ color: 'var(--text-muted)' }}>+91 98765 43210</p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
                  <div style={{ backgroundColor: 'rgba(37,99,235,0.1)', padding: '15px', borderRadius: '50%' }}>
                    <MapPin className="text-accent" size={24} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.1rem', marginBottom: '5px' }}>Visit Us</h4>
                    <p style={{ color: 'var(--text-muted)' }}>123 Ecom Street, Tech Park<br/>Chennai, Tamil Nadu, India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div style={{ backgroundColor: 'var(--secondary-color)', padding: '40px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
              <h3 style={{ marginBottom: '30px', fontSize: '1.5rem' }}>Request a Free Audit</h3>

              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-label">Full Name</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} className="form-control" required placeholder="John Doe" />
                </div>
                <div className="form-group">
                  <label className="form-label">Email Address</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} className="form-control" required placeholder="john@company.com" />
                </div>
                <div className="form-group">
                  <label className="form-label">Phone Number</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="form-control" required placeholder="+91 98765 43210" />
                </div>
                <div className="form-group">
                  <label className="form-label">Service Interested In</label>
                  <select name="service" value={formData.service} onChange={handleChange} className="form-control">
                    <option value="Amazon Account Management">Amazon Account Management</option>
                    <option value="Amazon PPC">Amazon PPC & Advertising</option>
                    <option value="Amazon SEO">Amazon SEO & Listing</option>
                    <option value="Amazon A+ Content">Amazon A+ Content & Brand Store</option>
                    <option value="Flipkart Account Management">Flipkart Account Management</option>
                    <option value="Flipkart SEO & Ads">Flipkart SEO & Advertising</option>
                    <option value="Account Health">Account Health & Reinstatement</option>
                    <option value="Other / General Inquiry">Other / General Inquiry</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Message</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} className="form-control" required placeholder="Tell us about your brand and goals..."></textarea>
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: '100%' }} disabled={isLoading}>
                  {isLoading ? 'Submitting...' : 'Submit Request'}
                </button>
              </form>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
