import React from "react";
import { FlatList } from "react-native";

import { useFocusEffect, useNavigation } from "expo-router";

import { getAllGroups } from "@/storage/Groups/getAllGroups";

import { GroupCards } from "@/components/GroupCards";

import { AppHeader } from "@/components/AppHeader";
import { AppHighlight } from "@/components/AppHighlight";
import { AppButton } from "@/components/AppButton";
import { AppEmptyList } from "@/components/AppEmptyList";

import * as S from "./styles";

export default function Groups() {
  const [groups, setGroups] = React.useState<string[]>([]);

  const navigation = useNavigation();

  async function handleFetchGroups() {
    const allGroups = await getAllGroups();

    setGroups((prev) => (prev = allGroups));
  }

  useFocusEffect(
    React.useCallback(() => {
      handleFetchGroups();
    }, [])
  );

  return (
    <S.Container>
      <AppHeader />
      <AppHighlight title="Turmas" subtitle="Jogue com a sua Turma" />
      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <GroupCards
            title={item}
            onPress={() => {
              navigation.navigate("(Players)");
            }}
          />
        )}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => (
          <AppEmptyList subtitle="Que tal criar uma?" />
        )}
      />
      <AppButton
        text="Criar Turma"
        onPress={() => {
          navigation.navigate("(NewGroup)");
        }}
      />
    </S.Container>
  );
}
