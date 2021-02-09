import React, { ReactNode } from 'react';
import { Card, Container } from './styles';
import cardBackground from '../../assets/images/cardBackground.png';

interface Props {
  children: ReactNode;
}

export function ModalAction({ children }: Props) {
  return (
    <Container>
      <Card source={cardBackground}>{children}</Card>
    </Container>
  );
}
