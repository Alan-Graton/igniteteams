import AsyncStorage from "@react-native-async-storage/async-storage";

export async function deleteGroup(group: string): Promise<void> {
  try {
    await AsyncStorage.removeItem(group);
  } catch (e) {
    console.error("[deleteGroup] Error: ", e);
    throw "Erro ao deletar Group";
  }
}
