import AsyncStorage from "@react-native-async-storage/async-storage";
import { PlayersDTO } from "./PlayersDTO";
import { getAllPlayers } from "./getAllPlayers";
import { PLAYERS_COLLECTION } from "../StorageConfig";

export async function postPlayerByGroup(
  newPlayer: PlayersDTO,
  group: string
): Promise<void> {
  try {
    const allPlayers = await getAllPlayers();

    const handlePlayers = JSON.stringify([...allPlayers, newPlayer]);

    await AsyncStorage.setItem(`${PLAYERS_COLLECTION}-${group}`, handlePlayers);
  } catch (e) {
    console.error("[postPlayerByGroup] Error: ", e);
    throw "Erro na criação de Player";
  }
}
