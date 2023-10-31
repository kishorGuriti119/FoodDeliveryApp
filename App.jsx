import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigations from './src/Screens/Authenticate/SecureNavigations/navigations';


const App = () => {


  return (
    <SafeAreaProvider>
      <Navigations />
    </SafeAreaProvider>
  );
};



export default App;
