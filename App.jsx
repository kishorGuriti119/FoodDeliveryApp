import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigations from './src/Screens/Authenticate/SecureNavigations/navigations';
import { Provider } from 'react-redux'
import { store } from './src/Store/Store';
import { PaperProvider } from 'react-native-paper';

const App = () => {


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
