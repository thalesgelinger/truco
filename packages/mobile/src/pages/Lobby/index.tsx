import React, { useEffect, useRef, useState } from 'react';
import {
  Background,
  ModalAction,
  PlayerCard,
  PlayerIcon
} from '../../components';
import background from '../../assets/images/background.png';
import { Container, PlayersList, SearchInput, StartButton } from './styles';
import db from '../../../mocks/db.json';
import { StackNavigationProp } from '@react-navigation/stack';
import {
  AcceptBtn,
  BtnText,
  DeclineBtn,
  Message,
  Name,
  PlayerIdentifier,
  QuestionBox
} from '../../components/ModalAction/styles';
import { ActivityIndicator } from 'react-native';
import { useSelector } from 'react-redux';

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
  const { user } = useSelector((state) => state);

  const [players, setPlayers] = useState<Player[]>(db.players);
  const [oponents, setOponents] = useState<Player[]>([]);
  const [isGameRequested, setIsGameRequested] = useState(false);
  const [isWaitingOponentAccept, setIsWaitingOponentAccept] = useState(false);

  useEffect(() => {
    setPlayers(db.players);
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

  function handleWaitGameStart() {
    setIsWaitingOponentAccept(true);
    navigation.navigate('Game', { oponents });
  }

  function renderInviteCard() {
    return (
      <ModalAction>
        <PlayerIdentifier>
          <PlayerIcon source={user.photoUrl} />
          <Name>Thales Gelinger</Name>
        </PlayerIdentifier>
        <Message>Te chamou pra jogar</Message>
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
    );
  }

  function renderWaitingModal() {
    return (
      <ModalAction>
        <PlayerIdentifier>
          <PlayerIcon source={oponents[0].image} />
          <Name>{oponents[0].name.replace(' ', '\n')}</Name>
        </PlayerIdentifier>
        <Message>Aguardando</Message>
        <ActivityIndicator size="large" color="#ffffff" />
        <DeclineBtn
          onPress={() => {
            setIsWaitingOponentAccept(false);
          }}
        >
          <BtnText>Cancelar</BtnText>
        </DeclineBtn>
      </ModalAction>
    );
  }

  return (
    <Background source={background}>
      {isGameRequested && renderInviteCard()}
      {isWaitingOponentAccept && renderWaitingModal()}
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
        <StartButton onPress={handleWaitGameStart}>
          {oponents.length / 1 === 1 ? 'Jogar' : oponents.length + '/1'}
        </StartButton>
      </Container>
    </Background>
  );
}
