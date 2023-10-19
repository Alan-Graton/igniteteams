import React from "react";
import { Alert, Keyboard } from "react-native";

import { AppHeader } from "@/components/AppHeader";
import { AppHighlight } from "@/components/AppHighlight";
import { AppInput } from "@/components/AppInput";
import { AppButton } from "@/components/AppButton";

import { getAllGroups } from "@/storage/Groups/getAllGroups";
import { postGroup } from "@/storage/Groups/postGroup";

import * as S from "./styles";

export default function NewGroup() {
  const [group, setGroup] = React.useState<string>("");

  async function handleNewGroup() {
    const allGroups = await getAllGroups();

    const findDuplicate = allGroups.find((el) => el === group);

    if (findDuplicate) {
      setGroup("");
      return Alert.alert("Novo Grupo", "Já existe um grupo com esse nome.");
    }

    await postGroup(group);
    setGroup("");
    Keyboard.dismiss();
  }

  return (
    <S.Container>
      <AppHeader showBackIcon />
      <S.Content>
        <S.Icon />
        <AppHighlight
          title="Nova Turma"
          subtitle="Crie uma Turma para adicionar participantes"
        />
        <AppInput placeholder="Nome da Turma" onChangeText={setGroup} />
        <AppButton
          text="Criar Turma"
          style={{ marginTop: 10 }}
          onPress={handleNewGroup}
        />
      </S.Content>
    </S.Container>
  );
}
