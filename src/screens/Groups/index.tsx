import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
// Screen Components
import { GroupCards } from "@/components/GroupCards";
// Application Components
import { AppHeader } from "@/components/AppHeader";
import { AppHighlight } from "@/components/AppHighlight";
import { AppButton } from "@/components/AppButton";
import { AppEmptyList } from "@/components/AppEmptyList";
// Native
import { FlatList } from "react-native";
// Styles
import * as S from "./styles";

export function Groups() {
  const [groups, setGroups] = React.useState<string[]>([
    "Ignite - React Native",
    "Ignite - React",
  ]);

  return (
    <SafeAreaView>
      <S.Container>
        <AppHeader />
        <AppHighlight title="Turmas" subtitle="Jogue com a sua Turma" />
        <FlatList
          data={groups}
          keyExtractor={(item) => item}
          renderItem={({ item }) => <GroupCards title={item} />}
          contentContainerStyle={groups.length === 0 && { flex: 1 }}
          ListEmptyComponent={() => (
            <AppEmptyList subtitle="Que tal criar uma?" />
          )}
        />
        <AppButton text="Criar Turma" />
      </S.Container>
    </SafeAreaView>
  );
}
