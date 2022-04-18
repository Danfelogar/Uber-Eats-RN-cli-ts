import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as ReduxProvider } from 'react-redux';
import { configureStore as store } from './src/store/store';

import StackNavigation from './src/navigation/StackNavigation';

const App = () => {
  return(
    <ReduxProvider store={store}>
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
    </ReduxProvider>
  )
}

export default App
