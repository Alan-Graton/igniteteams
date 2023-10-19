import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUPS_COLLECTION } from "../StorageConfig";
import { getAllGroups } from "./getAllGroups";

export async function postGroup(group: string): Promise<void> {
  try {
    const allGroups = await getAllGroups();

    const handleGroups = JSON.stringify([...allGroups, group]);

    await AsyncStorage.setItem(GROUPS_COLLECTION, handleGroups);
  } catch (e) {
    console.error("[postGroup] Error: ", e);
    throw `Erro na criação de Grupo: ${e}`;
  }
}
