import React from 'react';
import { Draggable } from '../Draggable';
import { Card, HandWrapper } from './styles';

interface Props {
  cards: any[];
  place: any;
  interact?: boolean;
}

export function Hand({ cards, place, interact }: Props) {
  return (
    <HandWrapper position={place}>
      {cards.map((card, i) => (
        <Draggable key={i} interact={interact}>
          <Card source={card.image} card={card} />
        </Draggable>
      ))}
    </HandWrapper>
  );
}
