import React, { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigations from './src/Screens/Authenticate/SecureNavigations/navigations';
import { Provider } from 'react-redux'
import { store } from './src/Store/Store';
import { PaperProvider } from 'react-native-paper';
import { requestUserPermission,NotificationServices } from './src/Components/FireStore/FCM/PushNotifications';

const App = () => {
  useEffect(() => {
    requestUserPermission()
    NotificationServices()
  })
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <PaperProvider>
          <Navigations />
        </PaperProvider>
      </Provider>
    </SafeAreaProvider>
  );
};



export default App;
