// Screens
import { Groups } from "@/screens/Groups";
// Components
import { StatusBar } from "expo-status-bar";
// Styles
import { ThemeProvider } from "styled-components/native";
import theme from "./src/theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Groups />
      <StatusBar style="inverted" translucent />
    </ThemeProvider>
  );
}
