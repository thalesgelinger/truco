import React, { ReactNode } from 'react';
import styled from 'styled-components/native';

const ButtonWrapper = styled.TouchableOpacity`
  height: 50px;
  width: 100%;
  background: #ffffff;
  justify-content: center;
  align-items: center;
  border-radius: 26px;
`;

const TextButton = styled.Text`
  font-size: 24px;
  line-height: 28px;
  font-family: 'EraserRegular';
  color: #a05824;
`;

interface ButtonProps {
  children: ReactNode;
}

export function Button({ children }: ButtonProps) {
  return (
    <ButtonWrapper>
      <TextButton>{children}</TextButton>
    </ButtonWrapper>
  );
}
