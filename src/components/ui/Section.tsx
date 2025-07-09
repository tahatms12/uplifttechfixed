import React from 'react';

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  centered?: boolean;
  maxWidth?: string;
}

const Section: React.FC<SectionProps> = ({
  id,
  className = '',
  children,
  title,
  subtitle,
  centered = false,
  maxWidth = 'max-w-7xl',
}) => {
  return (
    <section id={id} className={`py-12 sm:py-16 md:py-20 lg:py-24 ${className}`}>
      <div className={`container-custom ${maxWidth} mx-auto px-4 sm:px-6`}>
        {(title || subtitle) && (
          <div
            className={`mb-8 sm:mb-12 ${centered ? 'text-center mx-auto' : ''} ${centered ? 'max-w-xl sm:max-w-2xl md:max-w-3xl' : ''}`}
          >
            {title && (
              <h2
                className="gradient-text mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl"
              >
                {title}
              </h2>
            )}
            {subtitle && (
              <p
                className="text-base sm:text-lg md:text-xl text-white/80"
              >
                {subtitle}
              </p>
            )}
          </div>
        )}
        <div>
          {children}
        </div>
      </div>
    </section>
  );
};

export default Section;