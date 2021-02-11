import React from 'react';
import { Background } from '../../components';
import background from '../../assets/images/background.png';
import { Table } from '../../components';
import db from '../../../mocks/db.json';
import { Avatar } from './styles';
import { Text } from 'react-native';

export function Game() {
  const [player, oponent] = db.players;

  return (
    <Background source={background}>
      <Table>
        <Avatar source={oponent.image} position={'oponent'}></Avatar>
        <Avatar source={player.image} position={'main'}></Avatar>
      </Table>
    </Background>
  );
}
