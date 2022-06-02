export interface FloatingButtonProps {
  onPress?: () => void;
  type: FloatingButtonImageType;
}

export type FloatingButtonImageType = 'share' | 'delete' | 'duplicate';
