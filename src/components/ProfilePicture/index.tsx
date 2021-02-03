import React from 'react';
import { ImageSourcePropType } from 'react-native';
import styled from 'styled-components/native';

const ImageWrapper = styled.Image`
  height: 100%;
  width: 100%;
  border-radius: 15px;
`;

const Container = styled.View`
  border: 2px solid #ffffff;
  border-radius: 15px;
  height: 209px;
  width: 150px;
`;

interface Props {
  source: {
    uri: string;
  };
}

export function ProfilePicture({ source }: Props) {
  return (
    <Container>
      <ImageWrapper source={source} />
    </Container>
  );
}
