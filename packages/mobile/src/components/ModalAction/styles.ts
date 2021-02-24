import styled from 'styled-components/native';
import { Button } from '../../components';

export const Container = styled.View`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 10;
  background: rgba(255, 255, 255, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CardWrapper = styled.View`
  background-color: #ffffff;
  padding: 1px;
  height: 300px;
  width: 300px;
  border-radius: 10px;
`;

export const Card = styled.ImageBackground`
  height: 100%;
  width: 100%;
  border-radius: 10px;
  border: 3px solid #ffffff;
  padding: 15px 5px;
  justify-content: space-between;
  align-items: center;
`;

export const PlayerIdentifier = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;

export const Name = styled.Text`
  font-family: 'EraserRegular';
  font-size: 20px;
  color: #ffffff;
`;

export const InviteMessage = styled.Text`
  font-family: 'EraserRegular';
  font-size: 20px;
  color: #ffffff;
`;

export const QuestionBox = styled.View`
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
`;

const ActionButton = styled.TouchableOpacity`
  border-radius: 31px;
  align-items: center;
  justify-content: center;
  padding: 15px 20px;
`;

export const AcceptBtn = styled(ActionButton)`
  background-color: linear-gradient(
    180deg,
    #00923f 50.31%,
    rgba(0, 146, 63, 0.601677) 75.31%,
    rgba(0, 146, 63, 0) 100%
  );
`;

export const DeclineBtn = styled(ActionButton)`
  background-color: linear-gradient(
    180deg,
    #da251d 50.3%,
    rgba(218, 37, 29, 0.412998) 76.35%,
    rgba(218, 37, 29, 0) 100%
  );
`;

export const ActionBtn = styled(ActionButton)`
  background-color: linear-gradient(
    180deg,
    #b3ab00 50.31%,
    rgba(178, 171, 0, 0.601677) 75.31%,
    rgba(178, 171, 0, 0) 100%
  );
`;

export const BtnText = styled.Text`
  color: #ffffff;
  font-family: 'EraserRegular';
  font-size: 20px;
`;
