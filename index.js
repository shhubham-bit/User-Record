/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import RecordApp from './RecordApp';
import Route from './appRoute/Route';

AppRegistry.registerComponent(appName, () => RecordApp);
