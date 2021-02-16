import React, { useState } from 'react';
import {
  Background,
  Card,
  Score,
  Hand,
  ModalAction,
  PlayerIcon
} from '../../components';
import background from '../../assets/images/background.png';
import { Table } from '../../components';
import db from '../../../mocks/db.json';
import { Action, ActionsContainer, ActionText, Avatar } from './styles';
import { useSelector } from 'react-redux';
import {
  AcceptBtn,
  BtnText,
  ActionBtn,
  DeclineBtn,
  InviteMessage,
  Name,
  PlayerIdentifier,
  QuestionBox
} from '../../components/ModalAction/styles';

export function Game() {
  const [showActionModal, setShowActionModal] = useState(true);

  const { cardsOnTable, playerCards, oponentCards } = useSelector(
    (state) => state
  );

  const actions = ['Truco', 'Envido', 'Flor'];

  const [player, oponent] = db.players;
  const [scorePlayer, scoreOponent] = [12, 0];

  function handleAction(action) {
    return () => {
      console.log(action);
    };
  }

  function renderInviteCard() {
    return (
      <ModalAction>
        <PlayerIdentifier>
          <PlayerIcon source={db.players[0].image} />
          <Name>{db.players[0].name}</Name>
        </PlayerIdentifier>
        <InviteMessage>Pediu truco!</InviteMessage>
        <ActionBtn>
          <BtnText>Retruco</BtnText>
        </ActionBtn>
        <QuestionBox>
          <AcceptBtn>
            <BtnText>Quero</BtnText>
          </AcceptBtn>
          <DeclineBtn
            onPress={() => {
              setShowActionModal(false);
            }}
          >
            <BtnText>Não quero</BtnText>
          </DeclineBtn>
        </QuestionBox>
      </ModalAction>
    );
  }

  return (
    <Background source={background}>
      {showActionModal && renderInviteCard()}
      <Hand cards={oponentCards} place={{ top: -30 }} />
      <Table>
        <Score place="top" number={scoreOponent} />
        <Avatar source={oponent.image} position="oponent"></Avatar>
        <Card source={cardsOnTable[1]?.image} place="top" />

        <Card source={cardsOnTable[0]?.image} place="bottom" />
        <Avatar source={player.image} position="main"></Avatar>
        <Score place="bottom" number={scorePlayer} />
      </Table>
      <Hand cards={playerCards} place={{ bottom: 60 }} interact />
      <ActionsContainer>
        {actions.map((action, index) => (
          <Action onPress={handleAction(action.toLowerCase())} key={index}>
            <ActionText>{action}</ActionText>
          </Action>
        ))}
      </ActionsContainer>
    </Background>
  );
}
