import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, ArrowRight } from 'lucide-react';
import Button from '../components/ui/Button';



const CreativeDirectionPage: React.FC = () => {
  // Record analytics event when page loads
  useEffect(() => {
    if (window.gtag) {
      window.gtag('event', 'portfolio_view', {
        'event_category': 'portfolio',
        'event_label': 'Creative Direction Portfolio View',
      });
    }
  }, []);
  
  const handleRedirect = () => {
    // Record click event
    if (window.gtag) {
      window.gtag('event', 'portfolio_redirect', {
        'event_category': 'outbound',
        'event_label': 'Creative Direction Portfolio Redirect',
      });
    }
    
    // Open in new tab
    window.open('https://shnwzrf.com/', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen flex items-center justify-center gradient-bg">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-electric-violet/20 rounded-full filter blur-[100px]"></div>
      
      <div 
        className="glass-card p-6 md:p-12 text-center max-w-md mx-4 relative z-10"
      >
        <h1 className="text-2xl md:text-3xl font-semibold mb-4">
          <span className="gradient-text">Creative Direction</span>
        </h1>
        
        <p className="text-lg md:text-xl text-white/80 mb-8">
          Our Creative Direction portfolio showcases our brand strategy and design work. 
          It's available on a separate specialized website.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            variant="primary"
            size="lg"
            className="group w-full sm:w-auto"
            onClick={handleRedirect}
          >
            <ExternalLink size={18} className="mr-2" />
            View Portfolio
            <ArrowRight size={18} className="ml-2 group-hover:translate-x-1" />
          </Button>
          
          <Link to="/case-studies" className="w-full sm:w-auto">
            <Button
              variant="outline"
              size="lg"
              className="w-full"
            >
              View Case Studies
            </Button>
          </Link>
        </div>
        
        <p className="mt-6 text-sm text-white/60">
          Note: Clicking "View Portfolio" will take you to our external portfolio site at shnwzrf.com
        </p>
      </div>
    </div>
  );
};

export default CreativeDirectionPage;