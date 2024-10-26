import React, { CSSProperties } from 'react';
import { ButtonProps, ButtonVariant } from '../../types';
import { useTheme } from '../../hooks';

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  textTransform,
  type = 'button',
  color = 'primary',
  variant = ButtonVariant.FILLED,
}) => {
  const { theme } = useTheme();
  const styleObj = {
    [ButtonVariant.FILLED]: {
      backgroundColor: theme.colors[color],
      color: theme.colors.background,
      border: 'none',
      boxShadow: 'none',
    },
    [ButtonVariant.OUTLINED]: {
      backgroundColor: 'transparent',
      color: theme.colors[color],
      border: `1px solid ${theme.colors[color]}`,
      boxShadow: 'none',
    },
    [ButtonVariant.TEXT]: {
      backgroundColor: 'transparent',
      color: theme.colors[color],
      border: 'none',
      boxShadow: 'none',
    },
    [ButtonVariant.ELEVATED]: {
      backgroundColor: theme.colors[color],
      color: theme.colors.background,
      border: 'none',
      boxShadow: `0px 2px 4px rgba(0, 0, 0, 0.1)`,
    },
  };
  // @ts-expect-error
  const selectedStyle = styleObj[variant];
  const style: CSSProperties = {
    backgroundColor: theme.colors.primaryDark,
    fontSize: theme.fontSizes.small,
    textTransform: textTransform || 'none',
    textDecoration: 'none',
    cursor: 'pointer',
    color: theme.colors.background,
    border: theme.borderRadius.large,
    borderRadius: theme.borderRadius.large,
    paddingRight: theme.spacing(5),
    paddingLeft: theme.spacing(5),
    height: '2.5rem',
    textAlign: 'center',
    transition: 'background-color 0.3s ease, color 0.3s ease',
    ...selectedStyle,
  };

  return (
    <button type={type} onClick={onClick} style={style}>
      {children}
    </button>
  );
};

export default Button;
