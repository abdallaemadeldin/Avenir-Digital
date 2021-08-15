/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useEffect } from 'react';
import { I18nManager, StatusBar } from 'react-native';
import WindowStack from './src/lib/windowStack';

const App = () => {
  useEffect(() => { I18nManager.allowRTL(false); }, []);
  return (
    <>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" animated />
      <WindowStack />
    </>
  );
};

export default App;
