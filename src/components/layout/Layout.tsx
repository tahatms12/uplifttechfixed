import React from 'react';
import { Outlet } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:fixed focus:z-50 focus:top-4 focus:left-4 bg-electric-violet text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-electric-violet"
      >
        Skip to main content
      </a>
      <Navbar />
      <main 
          id="main-content"
          className="flex-grow"
          tabIndex={-1}
        >
          <Outlet />
        </main>
      <Footer />
      
      {/* Mobile optimization meta tag */}
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes" />
      </Helmet>
    </div>
  );
};

export default Layout;