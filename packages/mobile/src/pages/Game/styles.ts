import styled from 'styled-components/native';
import { PlayerIcon } from '../../components';

export const Table = styled.Image`
  height: 350px;
  width: 350px;
  border-radius: 175px;
  margin-bottom: 60px;
  border: 3px solid #2b1210;
`;

interface Props {
  position: string;
}

interface PositionAvaible {
  [key: string]: any;
  main: any;
  oponent: any;
}

const positions: PositionAvaible = {
  main: { top: '280px', right: '230px' },
  oponent: { top: '-10px', right: '40px' }
};

export const Avatar = styled(PlayerIcon)<Props>`
  position: absolute;
  top: ${({ position }) => positions[position].top};
  right: ${({ position }) => positions[position].right};
`;
