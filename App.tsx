import { StatusBar } from "expo-status-bar";
import {
  Button,
  Image,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import styled from "styled-components/native";
import { AppTheme, ThemeProvider } from "./Styles/AppTheme";

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: "#fff";
  align-items: "center";
  justify-content: "center";
`;

export default function App() {
  console.log("app executed");

  return (
    <ThemeProvider theme={AppTheme}>

    <SafeAreaView style={styles.container}>
      <View>
        <Text> Hello World People! </Text>
        <Image source={require("./assets/Rectangle 1534.png")} />
        <Button title="Click here" onPress={() => alert("Hello Clicked")} />
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
