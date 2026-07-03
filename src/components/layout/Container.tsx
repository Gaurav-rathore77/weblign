import React from 'react';

type ContainerSize = 'small' | 'medium' | 'large' | 'full';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: ContainerSize;
  as?: React.ElementType;
}

const Container: React.FC<ContainerProps> = ({
  children,
  className = '',
  size = 'large',
  as: Component = 'div',
}) => {
  const sizeClasses = {
    small: 'container-sm',
    medium: 'container-md',
    large: 'container',
    full: 'container-full',
  };

  return (
    <Component className={`${sizeClasses[size]} ${className}`}>
      {children}
    </Component>
  );
};

export default Container;