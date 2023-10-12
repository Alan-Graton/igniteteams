import * as S from "./styles";

interface Props {
  subtitle: string;
}

export function AppHighlightSubtTitle({ subtitle }: Props) {
  return <S.Subtitle>{subtitle}</S.Subtitle>;
}
