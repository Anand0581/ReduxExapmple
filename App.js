/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import HomePageContainer from './src/containers/HomePageContainer';
import { Provider } from 'react-redux';
import HomePage from './src/components/HomePage';
import { createStore } from 'redux';
import countReducer from './src/services/reducers/reduce';
import SeperateComponent from './src/components/SeperateComponent';
import SeperateComponentConainer from './src/containers/SeperateComponentConainer';

const App: () => Node = () => {
  const store = createStore(countReducer);

  return (
    <Provider store={store}>
      <HomePageContainer/>
      <SeperateComponentConainer/>
    </Provider>
  );
};

export default App;
