import { ImageSourcePropType } from 'react-native';
import { FloatingButtonImageType } from './FloatingButton.types';

const getImageSource: Record<FloatingButtonImageType, ImageSourcePropType> = {
  share: require('../../assets/png/share/share.png'),
  delete: require('../../assets/png/delete/delete.png'),
  duplicate: require('../../assets/png/duplicate/duplicate.png'),
};

export default getImageSource;
