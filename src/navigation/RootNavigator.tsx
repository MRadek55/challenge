import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import LoginScreen from '../screens/LoginScreen/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen/RegisterScreen';
import { Routes } from './routes';
import { RootState } from '../store/store';
import { useSelector } from 'react-redux';
import HomeScreen from '../screens/HomeScreen/HomeScreen';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  const { token } = useSelector((state: RootState) => state.auth);

  const screenOptions = {
    headerShown: false,
  };

  return (
    <NavigationContainer>
      {!token ? (
        <Stack.Navigator screenOptions={screenOptions}>
          <Stack.Screen name={Routes.Register} component={RegisterScreen} />
          <Stack.Screen name={Routes.Login} component={LoginScreen} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator screenOptions={screenOptions}>
          <Stack.Screen name={Routes.Home} component={HomeScreen} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default RootNavigator;
