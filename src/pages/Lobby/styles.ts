import styled from 'styled-components/native';
import { Button, Input } from '../../components';

export const SearchInput = styled(Input).attrs({
  placeholderTextColor: '#A05824'
})`
  width: 100%;
  background: #ffffff;
  color: #a05824;
  font-size: 16px;
  margin-top: 20px;
`;

export const PlayersList = styled.FlatList`
  flex: 1;
`;

export const Container = styled.View`
  width: 90%;
  height: 100%;
  flex: 1;
  position: relative;
`;

export const StartButton = styled(Button)`
  position: absolute;
  top: 10px;
  z-index: 2;
`;
