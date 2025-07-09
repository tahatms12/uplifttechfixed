import React, { useEffect, useState } from 'react';

const ProgressBar: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      if (totalHeight > 0) {
        setScrollProgress((scrolled / totalHeight) * 100);
      } else {
        setScrollProgress(0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 z-50 h-1 bg-electric-violet"
      style={{ width: `${scrollProgress}%` }}
    ></div>
  );
};

export default ProgressBar;