import { StatusBar } from "expo-status-bar";
import { Button, Image, StyleSheet, Text, View } from "react-native";
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
      <Button title="Click here" onPress={() => alert("Hello Clicked")} />
      <StatusBar style="auto" />
    </Container>
  );
}
