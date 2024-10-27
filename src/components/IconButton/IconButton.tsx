import React, { CSSProperties, useState } from 'react';
import { useTheme } from '../../hooks';
import { IconButtonProps } from '../../types/IconButton';

const IconButton: React.FC<IconButtonProps> = ({
  children,
  onClick,
  variant = 'standard',
  size = 'medium',
  color = 'primary',
  ariaLabel,
}) => {
  const { theme } = useTheme();
  const [isRippling, setIsRippling] = useState(false);
  const [rippleStyle, setRippleStyle] = useState<CSSProperties | null>(null);

  const sizeStyles = {
    small: { width: '32px', height: '32px', iconSize: '18px' },
    medium: { width: '40px', height: '40px', iconSize: '24px' },
    large: { width: '48px', height: '48px', iconSize: '28px' },
  };

  const styles: CSSProperties = {
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: sizeStyles[size].width,
    height: sizeStyles[size].height,
    fontSize: sizeStyles[size].iconSize,
    cursor: 'pointer',
    borderRadius: theme.borderRadius.round,
    transition: 'background-color 0.3s ease',
    position: 'relative',
    overflow: 'hidden',
    ...getVariantStyles(theme, variant, color),
  };

  const handleRipple = (event: React.MouseEvent<HTMLButtonElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const rippleX = event.clientX - rect.left - size / 2;
    const rippleY = event.clientY - rect.top - size / 2;

    setRippleStyle({
      width: size,
      height: size,
      left: rippleX,
      top: rippleY,
    });

    setIsRippling(true);
    setTimeout(() => setIsRippling(false), 500);

    onClick?.();
  };

  return (
    <button
      onClick={handleRipple}
      style={styles}
      aria-label={ariaLabel}
      type="button"
    >
      {isRippling && (
        <span
          style={{
            ...rippleStyle,
            position: 'absolute',
            borderRadius: '50%',
            backgroundColor: 'rgba(255, 255, 255, 0.5)',
            transform: 'scale(0)',
            animation: 'ripple 0.6s ease-out',
          }}
        />
      )}
      {children}
      <style>
        {`
          @keyframes ripple {
            to {
              transform: scale(4);
              opacity: 0;
            }
          }
        `}
      </style>
    </button>
  );
};

const getVariantStyles = (
  theme: any,
  variant: string,
  color: string,
): CSSProperties => {
  switch (variant) {
    case 'filled':
      return {
        backgroundColor: theme.colors[color],
        color: theme.colors.background,
        border: 'none',
      };
    case 'outlined':
      return {
        backgroundColor: 'transparent',
        color: theme.colors[color],
        border: `1px solid ${theme.colors[color]}`,
      };
    case 'standard':
    default:
      return {
        backgroundColor: 'transparent',
        color: theme.colors[color],
        border: 'none',
      };
  }
};

export default IconButton;
