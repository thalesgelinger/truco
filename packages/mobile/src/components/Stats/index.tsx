import React from 'react';
import { Container, StatsContainer, StatsTitle, StatsValue } from './styles';

export function Stats() {
  const stats = [
    { title: 'Vitórias', value: 10 },
    { title: 'Empates', value: 0 },
    { title: 'Derrotas', value: 0 }
  ];

  return (
    <Container>
      {stats.map(({ value, title }) => (
        <StatsContainer key={title}>
          <StatsValue>{value}</StatsValue>
          <StatsTitle>{title}</StatsTitle>
        </StatsContainer>
      ))}
    </Container>
  );
}
