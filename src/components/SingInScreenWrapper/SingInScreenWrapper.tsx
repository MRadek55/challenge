import React from 'react';
import { Image, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import palette from '../../styles/palette';
import { xScale } from '../../styles/scale';
import FullPageLoader from '../FullPageLoader/FullPageLoader';
import styles from './SingInScreenWrapper.styles';
import { SingInScreenWrapperProps } from './SingInScreenWrapper.types';

const SingInScreenWrapper: React.FC<SingInScreenWrapperProps> = ({
  children,
  isLoading,
  withLogo,
}) => {
  const { bottom: paddingBottom, top: paddingTop } = useSafeAreaInsets();

  return (
    <>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        colors={[palette.ORANGISH, palette.MAIZE]}
        style={[styles.gradientWrapper]}
      />
      <View style={styles.background} />
      <View
        style={[
          styles.wrapper,
          { paddingTop, paddingBottom: paddingBottom || xScale(50) },
        ]}>
        {isLoading ? (
          <FullPageLoader />
        ) : (
          <>
            {withLogo && (
              <Image
                resizeMode="contain"
                source={require('../../assets/logo/logo.png')}
                style={styles.image}
              />
            )}
            <View>{children}</View>
          </>
        )}
      </View>
      <View style={styles.footer} />
    </>
  );
};

export default SingInScreenWrapper;
