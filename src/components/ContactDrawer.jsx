import React, { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { X } from 'lucide-react';
import './ContactDrawer.css';

const ContactDrawer = ({ isOpen, onClose }) => {
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
        toast.success('Success! We will contact you soon.');
        setFormData({ name: '', email: '', phone: '', service: 'Amazon Account Management', message: '' });
        setTimeout(() => {
          onClose();
        }, 1500);
      }
    } catch (error) {
      console.error(error);
      toast.error('Error submitting form. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Overlay */}
      <div 
        className={`drawer-overlay ${isOpen ? 'open' : ''}`} 
        onClick={onClose}
      ></div>

      {/* Drawer */}
      <div className={`contact-drawer ${isOpen ? 'open' : ''}`}>
        <div className="drawer-header">
          <h3>Get Free Amazon & Flipkart Audit</h3>
          <button className="close-btn" onClick={onClose}>
            <X size={24} />
          </button>
        </div>
        
        <div className="drawer-content">
          <p style={{ color: 'var(--text-muted)', marginBottom: '30px', fontSize: '0.95rem' }}>
            Timely Responses within 2 Hours. Scale your Amazon & Flipkart Sales with smart advertising strategies.
          </p>
          
          <form onSubmit={handleSubmit} className="drawer-form">
            <div className="form-group">
              <label>Name</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Your full name" />
            </div>
            
            <div className="form-group">
              <label>Email</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="you@company.com" />
            </div>
            
            <div className="form-group">
              <label>Phone</label>
              <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required placeholder="Your phone number" />
            </div>

            <div className="form-group">
              <label>Service Interested In</label>
              <select name="service" value={formData.service} onChange={handleChange} required>
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
              <label>Message</label>
              <textarea name="message" value={formData.message} onChange={handleChange} required placeholder="Tell us about your goals..." rows="4"></textarea>
            </div>
            
            <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '10px' }} disabled={isLoading}>
              {isLoading ? 'Submitting...' : 'Submit Request'}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactDrawer;
