import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Game, Lobby, Login, Profile, Waiting } from '../pages';

const { Navigator, Screen } = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="Login" component={Login} />
        <Screen name="Profile" component={Profile} />
        <Screen name="Lobby" component={Lobby} />
        <Screen name="Waiting" component={Waiting} />
        <Screen name="Game" component={Game} />
      </Navigator>
    </NavigationContainer>
  );
}
