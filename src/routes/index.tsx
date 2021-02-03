import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../pages/Login';
import Profile from '../pages/Profile';

const { Navigator, Screen } = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="Login" component={Login} />
        <Screen name="Profile" component={Profile} />
      </Navigator>
    </NavigationContainer>
  );
}
