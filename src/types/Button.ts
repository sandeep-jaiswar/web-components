import { ReactNode } from 'react';

export enum ButtonVariant {
  ELEVATED = 'ELEVATED',
  FILLED = 'FILLED',
  TONAL = 'TONAL',
  OUTLINED = 'OUTLINED',
  TEXT = 'TEXT',
}

export type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  variant?: ButtonVariant;
  type?: 'button' | 'submit' | 'reset';
  color?: 'primary' | 'secondary';
  textTransform?: 'none' | 'uppercase' | 'lowercase' | 'capitalize';
};
