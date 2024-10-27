import { ReactNode } from 'react';

export interface IconButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'filled' | 'outlined' | 'standard';
  size?: 'small' | 'medium' | 'large';
  color?: 'primary' | 'secondary' | 'surface' | 'error';
  ariaLabel?: string;
}
