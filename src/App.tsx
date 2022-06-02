import { ApolloProvider } from '@apollo/client';
import React from 'react';
import client from './api/apolloConfig';
import RootNavigator from './navigation/RootNavigator';
import { store } from './store/store';
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';
import { i18n } from './locales';
import { Host } from 'react-native-portalize';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <I18nextProvider i18n={i18n}>
        <Provider store={store}>
          <Host>
            <RootNavigator />
          </Host>
        </Provider>
      </I18nextProvider>
    </ApolloProvider>
  );
};

export default App;
