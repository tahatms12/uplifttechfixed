import React from 'react';
import { Helmet } from 'react-helmet';
import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import CaseStudies from '../components/home/CaseStudies';
import Testimonials from '../components/home/Testimonials';
import CallToAction from '../components/home/CallToAction';

const HomePage: React.FC = () => {
  return (
    <div className="overflow-x-hidden">
      <Helmet>
        <title>UPLIFT Technologies | People-Powered Outsourcing Partner</title>
        <meta name="description" content="Transform your operations with UPLIFT Technologies. Expert outsourcing solutions across sales, marketing, collections & more. Available 24/7 in US, Canada & UK." />
      </Helmet>

      {/* Hero section loads immediately */}
      <Hero />
      
      {/* Lazy load below-the-fold sections with loading states */}
      <Services />
      
      <CaseStudies />
      
      <Testimonials />
      
      <CallToAction />
    </div>
  );
};

export default HomePage;