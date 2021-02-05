import React, { useState } from 'react';
import { Background, PlayerCard } from '../../components';
import background from '../../assets/images/background.png';
import { Container, PlayersList, SearchInput, StartButton } from './styles';

interface Player {
  id: number;
  image: string;
  name: string;
  status: string;
}

export function Lobby() {
  const [oponents, setOponents] = useState<Player[]>([]);

  function isOponent(oponent: Player) {
    return oponents.some((player) => oponent === player);
  }

  function handleSetOponents(oponent: Player) {
    if (isOponent(oponent)) {
      setOponents(oponents.filter((player) => player.id !== oponent.id));
      return;
    }

    setOponents([...oponents, oponent]);
  }

  return (
    <Background source={background}>
      <Container>
        <SearchInput placeholder="Pesquisar jogadores" />
        <PlayersList
          data={MOCK_DATA}
          renderItem={({ item: player }: { item: Player }) => (
            <PlayerCard
              info={player}
              selectPlayer={handleSetOponents}
              isSelected={isOponent(player)}
            />
          )}
          keyExtractor={(item) => item.id}
          numColumns={2}
          columnWrapperStyle={{ justifyContent: 'space-around' }}
          showsVerticalScrollIndicator={false}
        />
        <StartButton>
          {oponents.length / 1 === 1 ? 'Jogar' : oponents.length + '/1'}
        </StartButton>
      </Container>
    </Background>
  );
}

const MOCK_DATA: Player[] = [
  {
    id: 0,
    image: 'https://avatars.githubusercontent.com/u/55005400?v=4',
    name: 'Thales Gelinger',
    status: 'avaiable'
  },
  {
    id: 1,
    image: 'https://avatars.githubusercontent.com/u/55005400?v=4',
    name: 'Thales Gelinger',
    status: 'playing'
  },
  {
    id: 2,
    image: 'https://avatars.githubusercontent.com/u/55005400?v=4',
    name: 'Thales Gelinger',
    status: 'offline'
  },
  {
    id: 3,
    image: 'https://avatars.githubusercontent.com/u/55005400?v=4',
    name: 'Thales Gelinger',
    status: 'playing'
  },
  {
    id: 4,
    image: 'https://avatars.githubusercontent.com/u/55005400?v=4',
    name: 'Thales Gelinger',
    status: 'avaiable'
  },
  {
    id: 5,
    image: 'https://avatars.githubusercontent.com/u/55005400?v=4',
    name: 'Thales Gelinger',
    status: 'avaiable'
  },
  {
    id: 6,
    image: 'https://avatars.githubusercontent.com/u/55005400?v=4',
    name: 'Thales Gelinger',
    status: 'avaiable'
  },
  {
    id: 7,
    image: 'https://avatars.githubusercontent.com/u/55005400?v=4',
    name: 'Thales Gelinger',
    status: 'avaiable'
  },
  {
    id: 8,
    image: 'https://avatars.githubusercontent.com/u/55005400?v=4',
    name: 'Thales Gelinger',
    status: 'avaiable'
  },
  {
    id: 9,
    image: 'https://avatars.githubusercontent.com/u/55005400?v=4',
    name: 'Thales Gelinger',
    status: 'avaiable'
  }
];
