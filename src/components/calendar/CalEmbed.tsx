import React from 'react';

interface CalEmbedProps {
  src: string;
  title: string;
  width?: string;
  height?: string;
  className?: string;
  style?: React.CSSProperties;
}

const CalEmbed: React.FC<CalEmbedProps> = ({
  src,
  title,
  width = '100%',
  height = '700px',
  className = '',
  style = {}
}) => {
  return (
    <iframe
      loading="lazy"
      src={src}
      title={title}
      width={width}
      height={height}
      frameBorder="0"
      scrolling="no"
      className={className}
      style={{
        border: 'none',
        borderRadius: '0.5rem',
        overflow: 'hidden',
        ...style
      }}
    ></iframe>
  );
};

export default CalEmbed;