import React, { useState } from 'react';
import { TextInput, View } from 'react-native';
import styled from 'styled-components/native';

interface FloatingLabelInputProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
}

const FloatingLabelInput: React.FC<FloatingLabelInputProps> = ({
  label,
  value,
  onChangeText,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  return (
    <InputContainer>
      <StyledTextInput
        placeholder={label}
        value={value}
        onChangeText={onChangeText}
        onFocus={handleFocus}
        onBlur={handleBlur}
        isFocused={isFocused}
      />
    </InputContainer>
  );
};

const InputContainer = styled(View)`
  width: 80%;
  margin-vertical: 20px;
`;

const StyledTextInput = styled(TextInput)<{ isFocused: boolean }>`
  border-color: gray;
  border-width: 1px;
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  color: ${props => (props.isFocused ? 'black' : 'gray')};
`;

export default FloatingLabelInput;
