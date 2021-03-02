import styled from 'styled-components/native';

interface Props {
  place?: string;
}

interface PositionsProps {
  [key: string]: any;
  top: any;
  bottom: any;
}

const positions: PositionsProps = {
  top: { top: 40, right: 145 },
  bottom: { top: 212, right: 145 }
};

export const Card = styled.Image.attrs(
  ({ place }: Props) => positions[place]
)<Props>`
  border-radius: 5px;
  max-height: 98px;
  max-width: 60px;
  position: absolute;
`;
