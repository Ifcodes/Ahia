import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View } from "react-native";
import styled from "styled-components/native";

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: "#fff";
  align-items: "center";
  justify-content: "center";
`;

export default function App() {
  console.log("app executed");

  return (
    <Container>
      <Text> Hello World People! </Text>
      <Image source={require("./assets/Rectangle 1534.png")} />
      <StatusBar style="auto" />
    </Container>
  );
}
