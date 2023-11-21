import React, {useEffect} from 'react';
import {StyleSheet} from 'react-native';
import ApplicationNavigator from './navigation/Application';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import RNBootSplash from 'react-native-bootsplash';

import {Provider} from 'react-redux';
import {persistor, store} from './store';
import {PersistGate} from 'redux-persist/integration/react';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {ToastProvider} from 'react-native-toast-notifications';

function App(): JSX.Element {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        // Define your default query options here
        staleTime: 30000, // Set a default stale time, for example
      },
    },
  });
  useEffect(() => {
    const init = async () => {
      // Perform other init tasks here
    };
    init().finally(async () => {
      await RNBootSplash.hide({fade: true, duration: 500});
    });
  });

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <QueryClientProvider client={queryClient}>
          <ToastProvider duration={2000}>
            <NavigationContainer>
              <ApplicationNavigator />
            </NavigationContainer>
          </ToastProvider>
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({});

export default App;
