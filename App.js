/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useEffect } from 'react';
import { I18nManager, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import store from 'src/redux/store';
import WindowStack from './src/lib/windowStack';


const App = () => {
  useEffect(() => { I18nManager.allowRTL(false); }, []);
  return (
    <Provider store={store}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" animated />
      <WindowStack />
    </Provider>
  );
};

export default App;
