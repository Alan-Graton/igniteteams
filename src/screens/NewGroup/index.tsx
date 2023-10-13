import { AppHeader } from "@/components/AppHeader";
import { AppHighlight } from "@/components/AppHighlight";
import { AppInput } from "@/components/AppInput";
import { AppButton } from "@/components/AppButton";

import * as S from "./styles";

export function NewGroup() {
  return (
    <S.Container>
      <AppHeader showBackIcon />
      <S.Content>
        <S.Icon />
        <AppHighlight
          title="Nova Turma"
          subtitle="Crie uma Turma para adicionar participantes"
        />
        <AppInput />
        <AppButton text="Criar Turma" style={{ marginTop: 10 }} />
      </S.Content>
    </S.Container>
  );
}
