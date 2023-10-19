import { Stack } from "expo-router";
import { ThemeProvider } from "styled-components/native";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import theme from "@/theme";

export default function Layout() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  return (
    <ThemeProvider theme={theme}>
      {fontsLoaded && (
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(Groups)" />
          <Stack.Screen name="(NewGroup)" />
          <Stack.Screen name="(Players)" />
        </Stack>
      )}
    </ThemeProvider>
  );
}
