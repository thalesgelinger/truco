import React from 'react';
import styled from 'styled-components/native';

const StatsValue = styled.Text`
  color: #ffffff;
  font-size: 39px;
  line-height: 45px;
  font-family: 'EraserRegular';
`;

const StatsTitle = styled.Text`
  color: #ffffff;
  font-family: 'EraserRegular';
`;

const Container = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
`;

const StatsContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

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
