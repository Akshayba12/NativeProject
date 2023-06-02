import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Settingspage from './src/components/ProfilePage/Settings';
import WelComePage from './src/components/ProfilePage/Settings';
import MainPage from './src/components/ProfilePage/Settings';
import AsyncStorages from './src/components/AsyncStorage';

const App = () => {
  return (
    <View>
      <MainPage />
    </View>
  );
};

export default App;
