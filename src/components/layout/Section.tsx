import React from 'react';

type SectionSize = 'small' | 'medium' | 'large';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  size?: SectionSize;
  as?: React.ElementType;
  id?: string;
}

const Section: React.FC<SectionProps> = ({
  children,
  className = '',
  size = 'medium',
  as: Component = 'section',
  id,
}) => {
  const sizeClasses = {
    small: 'section-sm',
    medium: 'section',
    large: 'section-lg',
  };

  return (
    <Component id={id} className={`${sizeClasses[size]} ${className}`}>
      {children}
    </Component>
  );
};

export default Section;