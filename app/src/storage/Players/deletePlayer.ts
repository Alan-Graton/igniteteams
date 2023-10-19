import AsyncStorage from "@react-native-async-storage/async-storage";

export async function deletePlayer(
  player: string,
  team: string,
  group: string
) {
  try {
  } catch (e) {
    console.error("[deletePlayer] Error: ", e);
    throw "Erro ao deletar Player";
  }
}
