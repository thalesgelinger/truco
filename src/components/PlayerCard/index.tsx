import React from 'react';
import { Container, ImageWrapper, Name, Opac } from './styles';

interface Player {
  id: number;
  image: string;
  name: string;
  status: string;
}

interface Props {
  info: Player;
  selectPlayer: (player: Player) => void;
  isSelected: boolean;
}

export function PlayerCard({ info, selectPlayer, isSelected }: Props) {
  return (
    <Container status={info.status} onPress={() => selectPlayer(info)}>
      {isSelected && <Opac />}
      <ImageWrapper source={{ uri: info.image }} />
      <Name>{info.name}</Name>
    </Container>
  );
}
