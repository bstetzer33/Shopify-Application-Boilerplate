import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ApolloProvider } from '@apollo/client';
import { store, persistor } from './src/store';
import client from './src/api/shopify';
import AppNavigator from './src/navigation/AppNavigator';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ApolloProvider client={client}>
          <AppNavigator />
          <StatusBar style="auto" />
        </ApolloProvider>
      </PersistGate>
    </Provider>
  );
}
