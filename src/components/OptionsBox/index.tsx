import React from 'react';
import {
  Container,
  OptionButton,
  OptionsContainer,
  OptionText,
  OptionTitle
} from './styles';

interface Props {
  title: string;
  options: string[];
  selectedOption: string;
  fontSize?: number;
  setOption: (option: string) => void;
}

export function OptionsBox({
  title,
  options,
  selectedOption,
  setOption
}: Props) {
  return (
    <Container>
      <OptionTitle>{title}</OptionTitle>
      <OptionsContainer>
        {options.map((option) => (
          <OptionButton isSelected={selectedOption === option} key={option}>
            <OptionText onPress={() => setOption(option)}>{option}</OptionText>
          </OptionButton>
        ))}
      </OptionsContainer>
    </Container>
  );
}
