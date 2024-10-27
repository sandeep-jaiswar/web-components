import React, { useState } from 'react';
import { useTheme } from '../../hooks';
import { CheckboxProps } from '../../types';

const Checkbox: React.FC<CheckboxProps> = ({
  checked = false,
  label,
  onChange,
  disabled = false,
}) => {
  const { theme } = useTheme();
  const [isChecked, setIsChecked] = useState(checked);

  const handleCheckboxChange = () => {
    if (disabled) return;
    setIsChecked(!isChecked);
    onChange?.(!isChecked);
  };

  return (
    <label style={labelStyles(disabled)}>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
        disabled={disabled}
        style={checkboxStyles(isChecked, theme, disabled)}
      />
      {label && <span style={labelTextStyles(theme)}>{label}</span>}
    </label>
  );
};

const labelStyles = (disabled: boolean) => ({
  display: 'flex',
  alignItems: 'center',
  cursor: disabled ? 'not-allowed' : 'pointer',
});

const checkboxStyles = (isChecked: boolean, theme: any, disabled: boolean) => ({
  border: `2px solid ${isChecked ? theme.colors.primary : theme.colors.outline}`,
  backgroundColor: isChecked ? theme.colors.primary : 'transparent',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'background-color 0.2s ease, border-color 0.2s ease',
  color: theme.colors.onPrimary,
  opacity: disabled ? 0.5 : 1,
  position: 'relative' as const,
});

const labelTextStyles = (theme: any) => ({
  marginLeft: theme.spacing(1.5),
  color: theme.colors.onSurface,
  fontSize: theme.fontSizes.medium,
});

export default Checkbox;
