import React from 'react';
import { ScrollView, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import palette from '../../styles/palette';
import BetaVersionLabel from '../BetaVersionLabel/BetaVersionLabel';
import Header from './Header/Header';
import styles from './SignOutScreenWrapper.styles';
import { SignOutScreenWrapperProps } from './SignOutScreenWrapper.types';

const SignOutScreenWrapper: React.FC<SignOutScreenWrapperProps> = ({
  children,
  withBetaLabel,
  title,
  disableScroll,
}) => {
  const { bottom: paddingBottom, top: paddingTop } = useSafeAreaInsets();

  return (
    <>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        colors={[palette.MAIZE, palette.ORANGISH]}
        style={[styles.gradientWrapper]}
      />
      <ScrollView
        scrollEnabled={!disableScroll}
        contentContainerStyle={[styles.wrapper, { paddingTop, paddingBottom }]}>
        {!!title && <Header title={title} />}
        <View style={styles.contentWrapper}>{children}</View>
      </ScrollView>
      {withBetaLabel && <BetaVersionLabel />}
    </>
  );
};

export default SignOutScreenWrapper;
