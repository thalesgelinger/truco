import React, { useState } from 'react';
import styled from 'styled-components/native';

interface Props {
  isSelected: boolean;
}

const Container = styled.View`
  width: 80%;
  align-items: center;
`;

const ModeText = styled.Text`
  font-family: 'EraserRegular';
  color: #ffffff;
  font-size: 20px;
  margin-bottom: 16px;
`;
const GameModeOptionsContainer = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;

const GameModeOption = styled.TouchableOpacity<Props>`
  background: ${({ isSelected }) =>
    isSelected ? 'rgba(255, 255, 255, 0.35)' : 'rgba(255, 255, 255, 0.0)'};
  padding: 10px;
  border-radius: 5px;
`;

const GameModeOptionText = styled.Text`
  font-family: 'EraserRegular';
  color: #ffffff;
  font-size: 39px;
`;

const MODES = ['1x1', '2x2', '3x3'];

export function GameMode() {
  const [option, setOption] = useState(MODES[0]);

  return (
    <Container>
      <ModeText>Modo de jogo</ModeText>
      <GameModeOptionsContainer>
        {MODES.map((mode) => (
          <GameModeOption isSelected={option === mode} key={mode}>
            <GameModeOptionText onPress={() => setOption(mode)}>
              {mode}
            </GameModeOptionText>
          </GameModeOption>
        ))}
      </GameModeOptionsContainer>
    </Container>
  );
}
