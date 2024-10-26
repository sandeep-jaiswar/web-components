export interface Theme {
  colors: {
    primary: string;
    primaryLight: string;
    primaryDark: string;
    secondary: string;
    secondaryLight: string;
    secondaryDark: string;
    accent: string;
    background: string;
    surface: string;
    error: string;
    warning: string;
    info: string;
    success: string;
    text: {
      primary: string;
      secondary: string;
      disabled: string;
      hint: string;
    };
    grey: {
      50: string;
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
      700: string;
      800: string;
      900: string;
    };
  };
  fontSizes: {
    small: string;
    medium: string;
    large: string;
  };
  spacing: (factor: number) => string;
  borderRadius: {
    none: string;
    small: string;
    medium: string;
    large: string;
    round: string;
  };
}
