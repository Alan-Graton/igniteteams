import AsyncStorage from '@react-native-async-storage/async-storage';

export async function getPlayersByGroupAndTeam() {
  try {
  } catch (e) {
    console.error("[getPlayersByGroupAndTeam] Error: ", e);
    throw `Erro ao buscar Players por Grupo e Time: ${e}`;
  }
}
