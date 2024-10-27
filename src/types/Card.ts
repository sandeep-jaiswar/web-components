import { ReactNode } from 'react';

export interface CardProps {
  variant?: CardVariant;
  header?: ReactNode;
  content: ReactNode;
  footer?: ReactNode;
  image?: string;
}

export enum CardVariant {
  ELEVATED = 'ELEVATED',
  FILLED = 'FILLED',
  OUTLINED = 'OUTLINED',
}
