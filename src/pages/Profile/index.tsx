import React from 'react';
import styled from 'styled-components/native';

import {
  Container,
  Name,
  ProfilePicture,
  Stats,
  GameMode,
  AgainstWho,
  Button
} from '../../components';

const ProfileContainer = styled.View`
  align-items: center;
  justify-content: space-around;
  flex: 1;
  margin: 20px 0;
  width: 80%;
`;

export default function Profile() {
  return (
    <Container source={require('../../assets/images/background.png')}>
      <ProfileContainer>
        <ProfilePicture
          source={{
            uri: 'https://avatars.githubusercontent.com/u/55005400?v=4'
          }}
        />
        <Name>Thales Gelinger</Name>
        <Stats />
        <GameMode />
        <AgainstWho />
        <Button>Jogar</Button>
      </ProfileContainer>
    </Container>
  );
}
