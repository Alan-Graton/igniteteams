import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUPS_COLLECTION } from "../StorageConfig";

export async function getAllGroups(): Promise<string[] | []> {
  try {
    const storage = await AsyncStorage.getItem(GROUPS_COLLECTION);

    const groups: string[] | [] = storage ? JSON.parse(storage) : [];

    return groups;
  } catch (e) {
    console.error("[getAllGroups] Error: ", e);
    throw `Erro ao buscar Grupos: ${e}`;
  }
}
