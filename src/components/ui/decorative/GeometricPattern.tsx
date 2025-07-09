import React from 'react';

interface GeometricPatternProps {
  className?: string;
  pattern?: 'triangles' | 'hexagons';
}

const GeometricPattern: React.FC<GeometricPatternProps> = ({
  className = '',
  pattern = 'hexagons'
}) => {
  return (
    <div
      className={`absolute pointer-events-none ${className}`}
    >
      <svg
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-16 h-16"
      >
        {pattern === 'hexagons' ? (
          <path
            d="M32 4L56 18V46L32 60L8 46V18L32 4Z"
            stroke="currentColor"
            strokeWidth="0.5"
            className="text-electric-violet/20"
          />
        ) : (
          <path
            d="M32 4L56 52H8L32 4Z"
            stroke="currentColor"
            strokeWidth="0.5"
            className="text-electric-violet/20"
          />
        )}
      </svg>
    </div>
  );
};

export default GeometricPattern;