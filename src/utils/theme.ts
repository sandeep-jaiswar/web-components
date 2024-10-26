import { Theme } from '../types/Theme';

const colors = {
  primary: '#007bff',
  primaryLight: '#66b3ff',
  primaryDark: '#0056b3',
  secondary: '#6c757d',
  secondaryLight: '#adb5bd',
  secondaryDark: '#495057',
  accent: '#ff4081',
  background: '#ffffff',
  surface: '#f8f9fa',
  error: '#dc3545',
  warning: '#ffc107',
  info: '#17a2b8',
  success: '#28a745',
  text: {
    primary: '#343a40',
    secondary: '#6c757d',
    disabled: '#adb5bd',
    hint: '#868e96',
  },
  grey: {
    50: '#f8f9fa',
    100: '#e9ecef',
    200: '#dee2e6',
    300: '#ced4da',
    400: '#adb5bd',
    500: '#868e96',
    600: '#495057',
    700: '#343a40',
    800: '#212529',
    900: '#000000',
  },
};

const fontSizes = {
  small: '0.75rem',
  medium: '1rem',
  large: '1.25rem',
};

const borderRadius = {
  none: 'none',
  small: '4px',
  medium: '8px',
  large: '10px',
  round: '50%',
};

const defaultTheme: Theme = {
  colors,
  fontSizes,
  spacing: (value: number) => `${(value * 5) / 16}rem`,
  borderRadius,
};

export default defaultTheme;
