import React, { useEffect } from 'react';
import SEO from '../components/SEO';

const TermsOfService = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 pb-16 bg-primary text-white min-h-screen">
      <SEO title="Terms of Service - Marlytix" description="Terms of Service and Conditions for Marlytix Ecom Solutions." />
      <div className="container max-w-4xl mx-auto px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8 text-white">Terms of Service</h1>
        
        <div className="prose prose-invert prose-lg max-w-none text-gray-300 space-y-6">
          <p>
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>

          <p>
            Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the marlytix.com website operated by Marlytix Ecom Solutions.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">1. Acceptance of Terms</h2>
          <p>
            By accessing or using our services, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the service.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">2. Description of Services</h2>
          <p>
            Marlytix provides e-commerce account management, advertising optimization, SEO, and consulting services for Amazon and Flipkart sellers. The specifics of the deliverables will be outlined in separate service agreements signed by both parties.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">3. Intellectual Property</h2>
          <p>
            The Service and its original content, features, and functionality are and will remain the exclusive property of Marlytix and its licensors. The Service is protected by copyright, trademark, and other laws of India. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Marlytix.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">4. Limitation of Liability</h2>
          <p>
            In no event shall Marlytix, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">5. Disclaimer</h2>
          <p>
            While we strive for excellence and employ industry-best practices, Marlytix does not guarantee specific sales volumes, rankings, or ROAS, as these are dependent on external market variables, algorithm changes, and marketplace platform policies beyond our control.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">6. Changes</h2>
          <p>
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. What constitutes a material change will be determined at our sole discretion.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
