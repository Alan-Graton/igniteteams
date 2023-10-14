import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
// Application Components
import { AppButton } from "@/components/AppButton";
import { AppHeader } from "@/components/AppHeader";
import { AppHighlight } from "@/components/AppHighlight";
import { AppInput } from "@/components/AppInput";
import { AppIconButton } from "@/components/AppIconButton";
// Styles
import * as S from "./styles";

export function Players() {
  const [selectedTeam, setSelectedTeam] = React.useState<string>("");
  const [players, setPlayers] = React.useState<string[]>([]);

  return (
    <SafeAreaView>
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
        <AppButton text="Remover Turma" type="SECONDARY" />
      </S.Container>
    </SafeAreaView>
  );
}
