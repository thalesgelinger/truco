import React, { ReactNode } from 'react';
import { Card, Container, CardWrapper } from './styles';
import cardBackground from '../../assets/images/cardBackground.png';

interface Props {
  children: ReactNode;
}

export function ModalAction({ children }: Props) {
  return (
    <Container>
      <CardWrapper>
        <Card source={cardBackground}>{children}</Card>
      </CardWrapper>
    </Container>
  );
}
