import AsyncStorage from '@react-native-async-storage/async-storage';

export const TOKEN_KEY = 'TOKEN';

export const getTokenFromAsyncStorage = () => {
  return AsyncStorage.getItem(TOKEN_KEY).then(async token => token ?? null);
};

export const saveTokenToAsyncStorage = (token: string) => {
  return AsyncStorage.setItem(TOKEN_KEY, token);
};
