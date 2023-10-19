import AsyncStorage from "@react-native-async-storage/async-storage";
import { PLAYERS_COLLECTION } from "../StorageConfig";
import { PlayersDTO } from "./PlayersDTO";

export async function getAllPlayers(): Promise<PlayersDTO[] | []> {
  try {
    const storage = await AsyncStorage.getItem(PLAYERS_COLLECTION);

    const players: PlayersDTO[] | [] = storage ? JSON.parse(storage) : [];

    return players;
  } catch (e) {
    console.error("[getAllPlayers] Error: ", e);
    throw `Erro ao buscar Players: ${e}`;
  }
}
