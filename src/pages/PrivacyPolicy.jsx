import React, { useEffect } from 'react';
import SEO from '../components/SEO';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 pb-16 bg-primary text-gray-900 min-h-screen">
      <SEO title="Privacy Policy - Marlytix" description="Privacy Policy for Marlytix Ecom Solutions." />
      <div className="container max-w-4xl mx-auto px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">Privacy Policy</h1>
        
        <div className="prose prose-invert prose-lg max-w-none text-gray-600 space-y-6">
          <p>
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>

          <p>
            At Marlytix Ecom Solutions, we are committed to protecting your privacy. This Privacy Policy explains how your personal information is collected, used, and disclosed by Marlytix.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Information We Collect</h2>
          <p>
            We collect information from you when you visit our website, register on our site, place an order, subscribe to our newsletter, respond to a survey or fill out a form.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Personal Information:</strong> Name, email address, mailing address, phone number.</li>
            <li><strong>Business Information:</strong> Company name, Amazon/Flipkart store details, revenue metrics (only when voluntarily provided for audits).</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. How We Use Your Information</h2>
          <p>
            Any of the information we collect from you may be used in one of the following ways:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>To personalize your experience and better respond to your individual needs.</li>
            <li>To improve our website based on the information and feedback we receive from you.</li>
            <li>To improve customer service and effectively respond to your requests and support needs.</li>
            <li>To send periodic emails regarding updates, related product or service information.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. Data Security</h2>
          <p>
            We implement a variety of security measures to maintain the safety of your personal information when you enter, submit, or access your personal information. We use secure servers and do not share your private store data with third parties.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Cookies</h2>
          <p>
            Yes, we use cookies. Cookies are small files that a site or its service provider transfers to your computer's hard drive through your Web browser (if you allow) that enables the site's or service provider's systems to recognize your browser and capture and remember certain information.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. Contact Us</h2>
          <p>
            If there are any questions regarding this privacy policy, you may contact us using the information below.
          </p>
          <p>
            marlytix2026@gmail.com<br />
            +91 8608858838
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
