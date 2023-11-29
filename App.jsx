import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigations from './src/Screens/Authenticate/SecureNavigations/navigations';
import { Provider } from 'react-redux'
import { store } from './src/Store/Store';

const App = () => {


  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <Navigations />
      </Provider>
    </SafeAreaProvider>
  );
};



export default App;
