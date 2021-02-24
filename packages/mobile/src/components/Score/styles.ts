import styled from 'styled-components/native';

interface ScoreProps {
  place: string;
}

interface ScorePositionProps {
  [key: string]: any;
  top: any;
  bottom: any;
}

const scorePosition: ScorePositionProps = {
  top: { top: 0, right: 350 - 36 - 24 },
  bottom: { top: 350 - 42, right: 0 + 24 }
};

export const ScoreView = styled.View.attrs(
  ({ place }: ScoreProps) => scorePosition[place]
)<ScoreProps>`
  position: absolute;
`;

export const ScoreText = styled.Text`
  color: #ffffff;
  font-family: 'EraserRegular';
  font-size: 36px;
`;
