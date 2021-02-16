import styled from 'styled-components/native';

export const HandWrapper = styled.View.attrs(({ position }) => position)`
  flex-direction: row;
  justify-content: space-around;
  width: 70%;
  position: absolute;
  padding: 0;
`;

interface Props {
  card: any;
}

export const Card = styled.Image<Props>`
  height: 125px;
  width: 79px;
  border-radius: 5px;
`;
