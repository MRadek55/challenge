import { Dimensions, Platform, StatusBar } from 'react-native';

const { width, height } = Dimensions.get('window');

const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;
const WINDOW_HEIGHT = Dimensions.get('window').height;
const STATUS_BAR = StatusBar.currentHeight || 24;

const realHeight =
  Platform.OS === 'ios' ? WINDOW_HEIGHT : WINDOW_HEIGHT - STATUS_BAR;

const xScale = (size: number): number => (width / guidelineBaseWidth) * size;
const yScale = (size: number): number =>
  (realHeight / guidelineBaseHeight) * size;

export { xScale, yScale, width, height };
