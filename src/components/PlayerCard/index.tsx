import { AppIconButton } from "../AppIconButton";

import * as S from "./styles";

type Props = {
  name: string;
};

export function PlayerCard({ name }: Props) {
  return (
    <S.Container>
      <S.Form>
        <S.Icon />
        <S.PlayerName>{name}</S.PlayerName>
      </S.Form>
      <AppIconButton icon="close" type="SECONDARY" />
    </S.Container>
  );
}
