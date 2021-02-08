import React from 'react';
import { Container, ImageWrapper } from './styles';

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
