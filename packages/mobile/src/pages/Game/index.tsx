import React, { forwardRef, useEffect, useRef, useState } from 'react';
import { Background, Card, Score, Hand } from '../../components';
import background from '../../assets/images/background.png';
import { Table } from '../../components';
import db from '../../../mocks/db.json';
import { Avatar } from './styles';
import card from '../../assets/images/cards/truco-espada-1.jpg';
import { useSelector } from 'react-redux';

export function Game() {
  const [player, oponent] = db.players;
  const [scorePlayer, scoreOponent] = [12, 0];
  const cardsPlayer = [card, card, card];

  return (
    <Background source={background}>
      <Hand cards={cardsPlayer} place={{ top: -30 }} />
      <Table>
        <Score place="top" number={scoreOponent} />
        <Avatar source={oponent.image} position="oponent"></Avatar>
        <Card source={card} place="top" />

        <Card source={card} place="bottom" />
        <Avatar source={player.image} position="main"></Avatar>
        <Score place="bottom" number={scorePlayer} />
      </Table>
      <Hand cards={cardsPlayer} place={{ bottom: 40 }} interact />
    </Background>
  );
}
