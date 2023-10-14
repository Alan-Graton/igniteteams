import React from "react";
import { FlatList } from "react-native";
// Screen Components
import { PlayerCard } from "@/components/PlayerCard";
// Application Components
import { AppButton } from "@/components/AppButton";
import { AppHeader } from "@/components/AppHeader";
import { AppHighlight } from "@/components/AppHighlight";
import { AppInput } from "@/components/AppInput";
import { AppIconButton } from "@/components/AppIconButton";
import { AppFilter } from "@/components/AppFilter";
import { AppEmptyList } from "@/components/AppEmptyList";
// Styles
import * as S from "./styles";

export default function Players() {
  const [selectedTeam, setSelectedTeam] = React.useState<string>("");
  const [players, setPlayers] = React.useState<string[]>([
    "Alan Graton",
    "Débora Graton",
    "Marcos de Brito",
    "Vivian Graton",
  ]);

  return (
    <S.Container>
      <AppHeader showBackIcon />
      <AppHighlight
        title="Nome da Turma"
        subtitle="Adicione a galera e separe os times"
      />
      <S.Form>
        <AppInput placeholder="Nome do Participante" />
        <AppIconButton icon="add" />
      </S.Form>

      <S.HeaderList>
        <FlatList
          data={["Team A", "Team B"]}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <AppFilter
              title={item}
              isActive={item === selectedTeam}
              onPress={() => {
                setSelectedTeam(item);
              }}
            />
          )}
          horizontal
        />
      </S.HeaderList>

      <FlatList
        data={players}
        renderItem={({ item }) => <PlayerCard name={item} />}
        keyExtractor={(item) => item}
        ListEmptyComponent={() => (
          <AppEmptyList subtitle="Não há pessoas nesse time" />
        )}
        contentContainerStyle={[
          { paddingBottom: 100 },
          players.length === 0 && { flex: 1 },
        ]}
      />
      <AppButton text="Remover Turma" type="SECONDARY" />
    </S.Container>
  );
}
