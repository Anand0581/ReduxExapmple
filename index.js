/**
 * @format
 */

import {AppRegistry} from 'react-native';
import React from 'react';
import {Provider} from 'react-redux';
import App from './App';
import {name as appName} from './app.json';
import { configureStore } from '@reduxjs/toolkit';


AppRegistry.registerComponent(appName, () => App);
