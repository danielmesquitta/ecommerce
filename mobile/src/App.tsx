import 'react-native-gesture-handler';

import React from 'react';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';

import Routes from './routes';
import store from './store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <StatusBar barStyle="dark-content" backgroundColor="#ddd" />
      <Routes />
    </Provider>
  );
};

export default App;
