import React from 'react';
import { IconType } from 'react-icons';
import { IconBaseProps } from 'react-icons/lib';
import { ElementType } from 'react';

// This is a wrapper component to properly handle React Icons with TypeScript
export const Icon = ({ icon, size = 24, className = '', ...props }: { 
  icon: IconType; 
  size?: number; 
  className?: string;
  [key: string]: any;
}) => {
  return React.createElement(icon as ElementType, { 
    size, 
    className,
    ...props
  } as IconBaseProps);
};
