import React from 'react';
import { Background, Card } from '../../components';
import background from '../../assets/images/background.png';
import { Table } from '../../components';
import db from '../../../mocks/db.json';
import { Avatar } from './styles';
import card from '../../assets/images/cards/truco-espada-1.jpg';

export function Game() {
  const [player, oponent] = db.players;

  return (
    <Background source={background}>
      <Table>
        <Avatar source={oponent.image} position={'oponent'}></Avatar>
        <Card source={card} place="top" />
        <Card source={card} place="bottom" />
        <Avatar source={player.image} position={'main'}></Avatar>
      </Table>
    </Background>
  );
}
