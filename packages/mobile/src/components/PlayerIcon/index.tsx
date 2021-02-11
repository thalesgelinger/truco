import React from 'react';
import { IconWrapper, Photo } from './styles';

interface Props {
  source: string;
  style?: any;
}

export function PlayerIcon({ source: uri, style }: Props) {
  return (
    <IconWrapper style={style}>
      <Photo source={{ uri }} />
    </IconWrapper>
  );
}
