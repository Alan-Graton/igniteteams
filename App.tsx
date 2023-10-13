// Native
import { ActivityIndicator } from "react-native";
// Screens
import { Groups } from "@/screens/Groups";
import { NewGroup } from "@/screens/NewGroup";
// Components
import { StatusBar } from "expo-status-bar";
// Styles
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import { ThemeProvider } from "styled-components/native";
import theme from "./src/theme";

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <ThemeProvider theme={theme}>
      {fontsLoaded ? <NewGroup /> : <ActivityIndicator />}
      <StatusBar style="inverted" translucent />
    </ThemeProvider>
  );
}
