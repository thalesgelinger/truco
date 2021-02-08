import React, { ReactNode } from 'react';
import { ButtonWrapper, TextButton } from './styles';

interface ButtonProps {
  children: ReactNode;
  onPress?: () => void;
}

export function Button({ children, onPress }: ButtonProps) {
  return (
    <ButtonWrapper onPress={onPress}>
      <TextButton>{children}</TextButton>
    </ButtonWrapper>
  );
}
