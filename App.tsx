import { StatusBar } from "expo-status-bar";

import {
  Image,
  Platform,
  SafeAreaView,
  StatusBar as NativeStatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import styled from "styled-components/native";
import Button from "./Components/Atoms/Button";
import Home from "./Components/Pages";
import { AppTheme, ThemeProvider } from "./Styles/AppTheme";

const MainWrapper = styled.SafeAreaView`
  flex: 1;
  padding-top: ${() => NativeStatusBar.currentHeight}px;
`;

export default function App() {
  console.log("app executed");

  return (
    <ThemeProvider theme={AppTheme}>
      <MainWrapper>
        <Home />
      </MainWrapper>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
