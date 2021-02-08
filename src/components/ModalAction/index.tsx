import React, { ReactNode } from 'react';
import { Card, Container } from './styles';

interface Props {
  children: ReactNode;
}

export function ModalAction({ children }: Props) {
  return (
    <Container>
      <Card>{children}</Card>
    </Container>
  );
}
