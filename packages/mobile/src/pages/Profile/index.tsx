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

interface Props {
  navigation: StackNavigationProp<any>;
}

const GAME_MODES = ['1x1', '2x2', '3x3'];
const AGAINST_WHO_OPTIONS = ['amigos', 'aleatorio'];

export function Profile({ navigation }: Props) {
  const [gameMode, setGameMode] = useState(GAME_MODES[0]);
  const [againstWho, setAgainstWho] = useState(AGAINST_WHO_OPTIONS[0]);

  return (
    <Background source={background}>
      <ProfileContainer>
        <ProfilePicture
          source={{
            uri: 'https://avatars.githubusercontent.com/u/55005400?v=4'
          }}
        />
        <Name>Thales Gelinger</Name>
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
