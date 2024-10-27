import React, { useState } from 'react';
import { useTheme } from '../../hooks';
import { ChipProps } from '../../types/Chips';
import { Theme } from '../../types/Theme';

const Chip: React.FC<ChipProps> = ({
  label,
  selected = false,
  deletable = false,
  icon,
  onDelete,
  onSelect,
}) => {
  const { theme } = useTheme();
  const [isSelected, setIsSelected] = useState(selected);

  const handleSelect = () => {
    const newSelectedState = !isSelected;
    setIsSelected(newSelectedState);
    onSelect?.(newSelectedState);
  };

  return (
    <div style={chipContainerStyles(isSelected, theme)} onClick={handleSelect}>
      {icon && <span style={iconStyles}>{icon}</span>}
      <span style={labelStyles(theme)}>{label}</span>
      {isSelected && (
        <span style={selectedIconStyles(theme)}>
          <input type="checkbox" id="scales" name="scales" checked />
        </span>
      )}
      {deletable && (
        <span
          style={deleteIconStyles(theme)}
          onClick={(e) => {
            e.stopPropagation();
            onDelete?.();
          }}
        >
          {'<FiX size={12} />'}
        </span>
      )}
    </div>
  );
};

const chipContainerStyles = (isSelected: boolean, theme: Theme) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(0.2),
  padding: `${theme.spacing(0.5)} ${theme.spacing(1.5)}`,
  backgroundColor: theme.colors.surface,
  border: 'none',
  cursor: 'pointer',
  transition: 'background-color 0.2s ease, color 0.2s ease',
  fontSize: theme.fontSizes.small,
});

const iconStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const labelStyles = (theme: any) => ({
  flexGrow: 1,
  color: theme.colors.onSurface,
});

const selectedIconStyles = (theme: any) => ({
  display: 'flex',
  alignItems: 'center',
  color: theme.colors.onPrimaryContainer,
  marginLeft: theme.spacing(0.5),
});

const deleteIconStyles = (theme: any) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.colors.onSurfaceVariant,
  marginLeft: theme.spacing(0.5),
  cursor: 'pointer',
});

export default Chip;
