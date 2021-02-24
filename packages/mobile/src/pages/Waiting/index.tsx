import React, { useState } from 'react';
import { Background, PlayerCard } from '../../components';
import background from '../../assets/images/background.png';
import { Container } from './styles';
import db from '../../../mocks/db.json';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

interface Player {
  id: number;
  image: string;
  name: string;
  status: string;
}

interface Props {
  navigation: StackNavigationProp<any>;
  route: RouteProp<{ params: { oponents: Player[] } }, 'params'>;
}

export function Waiting({ navigation, route }: Props) {
  const [isOponentReady, setIsOponentReady] = useState(false);

  const { oponents } = route.params;

  setTimeout(() => {
    setIsOponentReady(true);
  }, 1000);

  if (isOponentReady) {
    navigation.navigate('Game', {
      oponent: oponents[0],
      me: db.players[0]
    });
  }

  return (
    <Background source={background}>
      <Container>
        <PlayerCard info={oponents[0]} isSelected={!isOponentReady} />
        <PlayerCard info={db.players[0]} />
      </Container>
    </Background>
  );
}
