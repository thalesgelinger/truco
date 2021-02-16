import React, { forwardRef, useEffect, useRef, useState } from 'react';
import { Background, Card, Score, Hand } from '../../components';
import background from '../../assets/images/background.png';
import { Table } from '../../components';
import db from '../../../mocks/db.json';
import { Avatar } from './styles';
import { useSelector } from 'react-redux';

export function Game() {
  const { cardsOnTable, playerCards, oponentCards } = useSelector(
    (state) => state
  );

  const [player, oponent] = db.players;
  const [scorePlayer, scoreOponent] = [12, 0];

  return (
    <Background source={background}>
      <Hand cards={oponentCards} place={{ top: -30 }} />
      <Table>
        <Score place="top" number={scoreOponent} />
        <Avatar source={oponent.image} position="oponent"></Avatar>
        <Card source={cardsOnTable[1]?.image} place="top" />

        <Card source={cardsOnTable[0]?.image} place="bottom" />
        <Avatar source={player.image} position="main"></Avatar>
        <Score place="bottom" number={scorePlayer} />
      </Table>
      <Hand cards={playerCards} place={{ bottom: 40 }} interact />
    </Background>
  );
}
