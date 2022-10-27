import React from "react";
import { Image, SafeAreaView, Text, View } from "react-native";
import styled from "styled-components/native";
import Button from "../Atoms/Button";

const MainWrapper = styled.SafeAreaView`
  flex: 1;
`;

const Home = () => {
  return (
    <MainWrapper>
      <View>
        <Text> Hello World People! </Text>
        <Image source={require("../../assets/Rectangle 1534.png")} />
        {/* <Button title="Click here" onPress={() => alert("Hello Clicked")} /> */}
        <Button />
      </View>
    </MainWrapper>
  );
};

export default Home;
