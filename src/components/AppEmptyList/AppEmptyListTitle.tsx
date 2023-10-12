import * as S from "./styles";

interface Props {
  title: string;
}

export function AppEmptyListTitle({ title }: Props) {
  return <S.Title>{title}</S.Title>;
}
