import React from 'react';

import { Provider } from 'react-redux';

import store from './src/store';
import { Home } from './src/screens';
import { PaperProvider } from 'react-native-paper';

const App = () => {
  return (
    <Provider store={store}>
      <PaperProvider>
        <Home />
      </PaperProvider>
    </Provider>
  );
};

export default App;
