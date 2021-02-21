/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
import MusicPlayScreen from './src/screens/musicPlay';
import PlayListScreen from './src/screens/playList';

import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => PlayListScreen);
