import React, { CSSProperties, ReactNode } from 'react';
import { useTheme } from '../../hooks';
import { CardProps, CardVariant } from '../../types/Card';
import { Theme } from '../../types';

const Card: React.FC<CardProps> = ({
  variant = CardVariant.ELEVATED,
  header,
  content,
  footer,
  image,
}) => {
  const { theme } = useTheme();

  const variantStyles = getVariantStyles(theme, variant);

  const cardStyles: CSSProperties = {
    borderRadius: theme.borderRadius.medium,
    padding: theme.spacing(4),
    ...variantStyles,
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    boxSizing: 'border-box',
  };

  const imageStyles: CSSProperties = {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    borderTopLeftRadius: theme.borderRadius.medium,
    borderTopRightRadius: theme.borderRadius.medium,
  };

  const headerStyles: CSSProperties = {};

  const contentStyles: CSSProperties = {};

  const footerStyles: CSSProperties = {};

  return (
    <div style={cardStyles}>
      {image && <img src={image} alt="Card Image" style={imageStyles} />}
      {header && <div style={headerStyles}>{header}</div>}
      <div style={contentStyles}>{content}</div>
      {footer && <div style={footerStyles}>{footer}</div>}
    </div>
  );
};

const getVariantStyles = (
  theme: Theme,
  variant: CardVariant,
): CSSProperties => {
  switch (variant) {
    case CardVariant.FILLED:
      return {
        backgroundColor: theme.colors.background,
        color: theme.colors.text.primary,
        boxShadow: 'none',
      };
    case CardVariant.OUTLINED:
      return {
        backgroundColor: theme.colors.background,
        border: `1px solid ${theme.colors.text.primary}`,
        color: theme.colors.text.primary,
        boxShadow: 'none',
      };
    case CardVariant.ELEVATED:
    default:
      return {
        backgroundColor: theme.colors.surface,
        boxShadow: `0px 4px 6px rgba(0, 0, 0, 0.1)`,
        color: theme.colors.text.primary,
      };
  }
};

export default Card;
