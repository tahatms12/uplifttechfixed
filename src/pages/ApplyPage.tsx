import React, { useEffect, useState } from 'react';
import Section from '../components/ui/Section';
import '../styles/zoho-form.css';

const ApplyPage: React.FC = () => {
  const [iframeHeight, setIframeHeight] = useState('2820px');
  
  useEffect(() => {
    document.title = 'Apply | UPLIFT Technologies';
    
    // Handle iframe resizing
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIframeHeight('100vh');
      } else {
        setIframeHeight('2820px');
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <div className="pt-32 pb-20 gradient-bg relative overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-electric-violet/20 rounded-full filter blur-[100px]"></div>
        
        <div className="container-custom relative z-10">
          <div
            className="max-w-3xl"
          >
            <h1 className="font-poppins font-semibold mb-6 text-3xl md:text-4xl lg:text-5xl">
              Explore <span className="gradient-text">Career Opportunities</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80">
              Ready for growth? Join our team at UPLIFT Technologies. Submit your application below; we're actively seeking top talent.
            </p>
          </div>
        </div>
      </div>

      <Section className="px-4 md:px-6">
        <div className="glass-card p-4 md:p-8 overflow-hidden">
          <iframe 
            loading="lazy" 
            aria-label="Job Application"
            allow="camera;microphone"
            style={{
              height: iframeHeight,
              width: '100%',
              border: 'none',
              borderRadius: '0.5rem',
              overflow: 'hidden'
            }}
            src="https://forms.zohopublic.com/tahauplifttec1/form/JobApplication/formperma/cxtgCuL2bugI3VbnXsRmnJMkfZjVs5QDAnl7nqhj2qE?zf_enablecamera=true&zf_rszfm=1"
          />
        </div>
      </Section>
    </>
  );
};

export default ApplyPage;