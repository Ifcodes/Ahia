import { useDeviceOrientation } from "@react-native-community/hooks";
import React from "react";
import { Image, SafeAreaView, Text, View } from "react-native";
import styled from "styled-components/native";
import Button from "../Components/Atoms/Button";
import { mainHook } from "../Utils/customHooks";

const MainWrapper = styled.SafeAreaView`
  flex: 1;
`;

const SubWrapper = styled.View<{isLandscape?: boolean}>`
  width: 100%;
  height: ${({isLandscape}) => isLandscape ? '100%' : '50%'};
`

const Home = () => {
  const {number, setNumber} = mainHook();
  const { landscape } = useDeviceOrientation()
  return (
    <MainWrapper>
      <SubWrapper isLandscape={landscape}>
        <Text> {number} </Text>
        <Image source={require("../../assets/Rectangle 1534.png")} />
        {/* <Button title="Click here" onPress={() => alert("Hello Clicked")} /> */}
        <Button onClick={() => setNumber(number + 1)} />
      </SubWrapper>
    </MainWrapper>
  );
};

export default Home;
