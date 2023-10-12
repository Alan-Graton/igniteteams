import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Groups } from "./src/screens/Groups";

export default function App() {
  return (
    <View style={styles.container}>
      <Groups />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
