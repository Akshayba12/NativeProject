/**
 * @format
 */

import {AppRegistry, Settings} from 'react-native';
import {name as appName} from './app.json';
import CameraVision from './src/components/CameraVision';
import CameraInstall from './src/components/CameraVision';
import Gallery from './src/components/Gallery';
import Settingspage from './src/components/ProfilePage/Settings';
import BottomTabs from './src/components/ProfilePage/BottomTabs';
import AsyncStorages from './src/components/AsyncStorage';
import MainPage from './src/components/ProfilePage/Settings';
import { Edit } from './src/components/ProfilePage/Cards';
import App from './src/components/ProfilePage/BottonSheet';
import Index from './src/redux';
 

AppRegistry.registerComponent(appName, () => MainPage);
