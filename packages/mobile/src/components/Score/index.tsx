import React from 'react';
import { ScoreText, ScoreView } from './styles';

interface Props {
  place: string;
  number: Number;
}

export function Score({ place, number }: Props) {
  return (
    <ScoreView place={place}>
      <ScoreText>{number}</ScoreText>
    </ScoreView>
  );
}
