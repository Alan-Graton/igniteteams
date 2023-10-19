import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

import theme from "@/theme";
import { ThemeProvider } from "styled-components/native";

export default function Layout() {
  return (
    <ThemeProvider theme={theme}>
      <Stack screenOptions={{ headerShown: false }} />
      <StatusBar
        style="inverted"
        translucent
        backgroundColor={theme.COLORS.GRAY_600}
      />
    </ThemeProvider>
  );
}
