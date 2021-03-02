import React from 'react';
import styled from 'styled-components/native';

export const LogoutButtonWrapper = styled.TouchableOpacity`
  position: absolute;
  top: -10px;
  left: -30px;
`;

export const LogoutText = styled.Text`
  color: #ffffff;
  font-family: 'EraserRegular';
  font-size: 16px;
`;

export function LogoutButton({ onPress }) {
  return (
    <LogoutButtonWrapper onPress={() => onPress()}>
      <LogoutText>Sair</LogoutText>
    </LogoutButtonWrapper>
  );
}
