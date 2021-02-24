import styled from 'styled-components/native';

export const Container = styled.View`
  width: 80%;
  align-items: center;
`;

export const OptionTitle = styled.Text`
  font-family: 'EraserRegular';
  color: #ffffff;
  font-size: 20px;
  margin-bottom: 16px;
`;

export const OptionsContainer = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;

interface ButtonProps {
  isSelected: boolean;
}

export const OptionButton = styled.TouchableOpacity<ButtonProps>`
  background: ${({ isSelected }) =>
    isSelected ? 'rgba(255, 255, 255, 0.35)' : 'rgba(255, 255, 255, 0.0)'};
  padding: 10px;
  border-radius: 5px;
`;

export const OptionText = styled.Text`
  font-family: 'EraserRegular';
  color: #ffffff;
  font-size: 22px;
`;
