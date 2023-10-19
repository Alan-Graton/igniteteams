import React from "react";
import { FlatList } from "react-native";

import { getAllPlayers } from "@/storage/Players/getAllPlayers";
import { PlayersDTO } from "@/storage/Players/PlayersDTO";

import { PlayerCard } from "@/components/PlayerCard";

import { AppButton } from "@/components/AppButton";
import { AppHeader } from "@/components/AppHeader";
import { AppHighlight } from "@/components/AppHighlight";
import { AppInput } from "@/components/AppInput";
import { AppIconButton } from "@/components/AppIconButton";
import { AppFilter } from "@/components/AppFilter";
import { AppEmptyList } from "@/components/AppEmptyList";

import * as S from "./styles";

export default function Players() {
  const [selectedTeam, setSelectedTeam] = React.useState<string>("Team A");
  const [players, setPlayers] = React.useState<PlayersDTO[]>([]);

  async function handleFetchPlayers() {
    const allPlayers = await getAllPlayers();

    setPlayers((prev) => (prev = allPlayers));
  }

  React.useEffect(() => {
    handleFetchPlayers();
  }, [selectedTeam]);

  return (
    <S.Container>
      <AppHeader showBackIcon />
      <AppHighlight
        title="Nome da Turma"
        subtitle="Adicione a galera e separe os times"
      />
      <S.Form>
        <AppInput
          placeholder="Nome do Participante"
          autoCorrect={false}
          autoComplete="off"
        />
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
        renderItem={({ item }) => <PlayerCard name={item.name} />}
        keyExtractor={(item) => item.name}
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
