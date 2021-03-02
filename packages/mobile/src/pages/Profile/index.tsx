import React, { useState } from 'react';
import { ProfileContainer, Name } from './styles';
import background from '../../assets/images/background.png';
import {
  Background,
  ProfilePicture,
  Stats,
  Button,
  LogoutButton,
  OptionsBox
} from '../../components';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { useAsyncStorage } from '@react-native-community/async-storage';
import { ActivityIndicator } from 'react-native';

type User = {
  id?: string;
  name?: string;
  givenName?: string;
  familyName?: string;
  photoUrl?: string;
  email?: string;
};

interface Props {
  navigation: StackNavigationProp<any>;
  route: RouteProp<{ params: { user: User } }, 'params'>;
}

const GAME_MODES = ['1x1', '2x2', '3x3'];
const AGAINST_WHO_OPTIONS = ['amigos', 'aleatorio'];

export function Profile({ navigation, route }: Props) {
  const user = useSelector((state) => state.user);
  const { removeItem } = useAsyncStorage('@Truco:user');
  const dispatch = useDispatch();
  const [gameMode, setGameMode] = useState(GAME_MODES[0]);
  const [againstWho, setAgainstWho] = useState(AGAINST_WHO_OPTIONS[0]);

  function logout() {
    removeItem();
    dispatch({
      type: 'REMOVE_USER'
    });
  }

  return (
    <Background source={background}>
      {!!user ? (
        <ProfileContainer>
          <LogoutButton onPress={logout} />
          <ProfilePicture
            source={{
              uri: user.photoUrl.replace(/s([0-9]+)-/g, 's500-')
            }}
          />
          <Name>{user?.name}</Name>
          <Stats />
          <OptionsBox
            title="Modo de jogo"
            options={GAME_MODES}
            selectedOption={gameMode}
            setOption={setGameMode}
          />
          <OptionsBox
            title="Contra quem?"
            options={AGAINST_WHO_OPTIONS}
            selectedOption={againstWho}
            setOption={setAgainstWho}
          />
          <Button onPress={() => navigation.navigate('Lobby')}>Jogar</Button>
        </ProfileContainer>
      ) : (
        <ActivityIndicator />
      )}
    </Background>
  );
}
