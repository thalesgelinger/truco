import React, { useState } from 'react';
import { ProfileContainer, Name } from './styles';
import background from '../../assets/images/background.png';
import {
  Background,
  ProfilePicture,
  Stats,
  Button,
  OptionsBox
} from '../../components';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { useAsyncStorage } from '@react-native-community/async-storage';
import { useEffect } from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';

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
  const [gameMode, setGameMode] = useState(GAME_MODES[0]);
  const [againstWho, setAgainstWho] = useState(AGAINST_WHO_OPTIONS[0]);
  const user = useSelector((state) => state.user);

  return (
    <Background source={background}>
      <ProfileContainer>
        <ProfilePicture
          source={{
            uri: user.photoUrl
          }}
        />
        <Name>{user.name}</Name>
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
    </Background>
  );
}
