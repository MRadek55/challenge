import { ItemProps } from '../Item/Item.types';

export interface SelectedItemComponentProps extends ItemProps {
  onClose: () => void;
  onDelete: (item: ItemProps) => void;
  onShare: (item: ItemProps) => void;
  onDuplicate: (item: ItemProps) => void;
}
