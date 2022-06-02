import { ReactNode } from 'react';

export interface CommonButtonProps {
  onPress: () => void;
  leftIcon?: ReactNode;
  style?: Record<string, unknown>;
  labelStyle?: Record<string, unknown>;
  isDisabled?: boolean;
  isLoading?: boolean;
}
