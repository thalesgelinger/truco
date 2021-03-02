import styled from 'styled-components/native';

export const ImageWrapper = styled.Image`
  height: 100%;
  width: 100%;
  border-radius: 15px;
`;

interface Props {
  status: string;
}

interface StatusProp {
  [key: string]: string;
  avaiable: string;
  playing: string;
  offline: string;
}

const allStatus: StatusProp = {
  avaiable: '#05ff00',
  playing: '#fff500',
  offline: '#ff0000'
};

export const Container = styled.TouchableOpacity<Props>`
  padding: 2px;
  background-color: ${({ status }) => allStatus[status]};
  border-radius: 15px;
  height: 209px;
  width: 150px;
  position: relative;
  margin-top: 20px;
`;

export const Name = styled.Text`
  color: #ffffff;
  position: absolute;
  bottom: 5px;
  text-align: center;
  width: 100%;
  font-family: 'EraserRegular';
`;

export const Opac = styled.View`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  border-radius: 15px;
  z-index: 10;
  background: rgba(255, 255, 255, 0.6);
`;
