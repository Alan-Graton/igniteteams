import * as S from "./styles";

interface Props {
  title: string;
}

export function AppHighlightTitle({ title }: Props) {
  return <S.Title>{title}</S.Title>;
}
