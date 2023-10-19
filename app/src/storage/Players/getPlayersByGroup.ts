import AsyncStorage from '@react-native-async-storage/async-storage';

export async function getPlayerByGroup() {
  try {
  } catch (e) {
    console.error("[getPlayerByGroup] Error: ", e);
    throw `Erro ao buscar Player por Grupo: ${e}`;
  }
}
