export interface ChipProps {
  label: string;
  selected?: boolean;
  deletable?: boolean;
  icon?: React.ReactNode;
  onDelete?: () => void;
  onSelect?: (selected: boolean) => void;
}
