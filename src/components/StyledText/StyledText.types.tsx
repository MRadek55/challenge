import palette from '../../styles/palette';

export interface StyledTextProps {
  color?: keyof typeof palette;
  style?: Record<string, unknown>;
}
