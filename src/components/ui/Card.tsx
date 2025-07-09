import React, { memo } from 'react';

interface CardProps {
  className?: string;
  children: React.ReactNode;
  hoverEffect?: boolean;
}

const Card: React.FC<CardProps> = memo(({ 
  className = '', 
  children, 
  hoverEffect = true,
}) => {
  return (
    <div
      className={`glass-card p-4 sm:p-6 ${hoverEffect ? 'hover:border-electric-violet/50' : ''} ${className}`}
    >
      {children}
    </div>
  );
}, (prevProps, nextProps) => {
  return (
    prevProps.className === nextProps.className &&
    prevProps.hoverEffect === nextProps.hoverEffect
  );
});

Card.displayName = 'Card';

export default Card;