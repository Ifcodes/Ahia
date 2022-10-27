import React from "react";
import styled from "styled-components/native";

const ButtonWrapper = styled.View`
  width: 48px;
  height: 32px;
  background-color: ${({ theme }) => theme.colors.darkRed};
`;

const Text = styled.Text`
  color: white;
`;
const Button = () => {
  return (
    <ButtonWrapper>
      <Text>Click me</Text>
    </ButtonWrapper>
  );
};

export default Button;
