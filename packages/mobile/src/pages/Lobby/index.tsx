import React, { useEffect, useState } from 'react';
import { Background, ModalAction, PlayerCard } from '../../components';
import background from '../../assets/images/background.png';
import { Container, PlayersList, SearchInput, StartButton } from './styles';
import db from '../../../mocks/db.json';
import { StackNavigationProp } from '@react-navigation/stack';
import {
  AcceptBtn,
  BtnText,
  DeclineBtn,
  InviteMessage,
  Name,
  Photo,
  PlayerIdentifier,
  QuestionBox
} from '../../components/ModalAction/styles';

interface Player {
  id: number;
  image: string;
  name: string;
  status: string;
}

interface Props {
  navigation: StackNavigationProp<any>;
}

export function Lobby({ navigation }: Props) {
  const [players, setPlayers] = useState<Player[]>(db.players);
  const [oponents, setOponents] = useState<Player[]>([]);
  const [isGameRequested, setIsGameRequested] = useState(false);

  useEffect(() => {
    setPlayers(db.players);
    setTimeout(() => setIsGameRequested(true), 1000);
  }, []);

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

  function playersFilter(searchText: string) {
    if (!searchText) {
      setPlayers(db.players);
      return;
    }
    setPlayers(players.filter((player) => player.name.startsWith(searchText)));
  }

  return (
    <Background source={background}>
      {isGameRequested && (
        <ModalAction>
          <PlayerIdentifier>
            <Photo source={{ uri: db.players[0].image }} />
            <Name>Thales Gelinger</Name>
          </PlayerIdentifier>
          <InviteMessage>Te chamou pra jogar</InviteMessage>
          <QuestionBox>
            <AcceptBtn
              onPress={() =>
                navigation.navigate('Game', {
                  oponents
                })
              }
            >
              <BtnText>Quero</BtnText>
            </AcceptBtn>
            <DeclineBtn
              onPress={() => {
                setIsGameRequested(false);
              }}
            >
              <BtnText>Não quero</BtnText>
            </DeclineBtn>
          </QuestionBox>
        </ModalAction>
      )}
      <Container>
        <SearchInput
          placeholder="Pesquisar jogadores"
          onChangeText={playersFilter}
        />
        <PlayersList
          data={players}
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
        <StartButton
          onPress={() =>
            navigation.navigate('Waiting', {
              oponents
            })
          }
        >
          {oponents.length / 1 === 1 ? 'Jogar' : oponents.length + '/1'}
        </StartButton>
      </Container>
    </Background>
  );
}
