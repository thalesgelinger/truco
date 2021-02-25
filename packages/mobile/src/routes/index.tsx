import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useAsyncStorage } from '@react-native-community/async-storage';
import { Game, Lobby, Login, Profile, Waiting } from '../pages';
import store from '../stores';

const { Navigator, Screen } = createStackNavigator();

export default function Routes() {
  const { getItem } = useAsyncStorage('@Truco:user');
  const dispatch = useDispatch();
  let signedIn = useSelector((state) => !!state.user);

  async function retrieveUser() {
    try {
      const user = await getItem();
      dispatch({
        type: 'ADD_USER',
        user: JSON.parse(user)
      });
      signedIn = !!user;
    } catch (e) {
      console.error(e.message);
    }
  }

  if (!signedIn) {
    retrieveUser();
  }

  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        {!signedIn ? (
          <Screen name="Login" component={Login} />
        ) : (
          <>
            <Screen name="Profile" component={Profile} />
            <Screen name="Lobby" component={Lobby} />
            <Screen name="Waiting" component={Waiting} />
            <Screen name="Game" component={Game} />
          </>
        )}
      </Navigator>
    </NavigationContainer>
  );
}
