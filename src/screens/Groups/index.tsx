import React from "react";
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
  const [groups, setGroups] = React.useState<string[]>([]);

  return (
    <>
      <S.Container>
        <AppHeader />
        <AppHighlight.root>
          <AppHighlight.title title="Turmas" />
          <AppHighlight.subtitle subtitle="Jogue com a sua Turma" />
        </AppHighlight.root>
        <FlatList
          data={groups}
          keyExtractor={(item) => item}
          renderItem={() => <GroupCards />}
          ListEmptyComponent={() => (
            <AppEmptyList.root>
              <AppEmptyList.subtitle subtitle="Que tal criar uma?" />
            </AppEmptyList.root>
          )}
        />
        <AppButton text="Criar Turma" />
      </S.Container>
    </>
  );
}
