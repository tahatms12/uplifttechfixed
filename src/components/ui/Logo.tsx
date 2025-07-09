import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center justify-center">
      <img 
        src="/assets/logo.svg" 
        alt="Uplift Technologies Logo" 
        width={667}
        height={196}
        className="h-12 w-auto"
        loading="eager"
        fetchpriority="high"
      />
    </div>
  );
};

export default Logo;