import React from 'react';
import { Background, Card, Score } from '../../components';
import background from '../../assets/images/background.png';
import { Table } from '../../components';
import db from '../../../mocks/db.json';
import { Avatar } from './styles';
import card from '../../assets/images/cards/truco-espada-1.jpg';

export function Game() {
  const [player, oponent] = db.players;
  const [scorePlayer, scoreOponent] = [12, 0];

  return (
    <Background source={background}>
      <Table>
        <Score place="top" number={scoreOponent} />
        <Avatar source={oponent.image} position="oponent"></Avatar>
        <Card source={card} place="top" />

        <Card source={card} place="bottom" />
        <Avatar source={player.image} position="main"></Avatar>
        <Score place="bottom" number={scorePlayer} />
      </Table>
    </Background>
  );
}
