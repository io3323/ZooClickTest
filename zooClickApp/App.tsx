/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Navigator from './src/navigation/navigator/Navigator';
import {Provider} from 'react-redux';
import store from './src/redux/store/store';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Navigator />
      </Provider>
    </NavigationContainer>
  );
}
export default App;
