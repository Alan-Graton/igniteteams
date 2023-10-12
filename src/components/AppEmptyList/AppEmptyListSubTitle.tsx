import * as S from "./styles";

interface Props {
  subtitle: string;
}

export function AppEmptyListSubTitle({ subtitle }: Props) {
  return <S.Subtitle>{subtitle}</S.Subtitle>;
}
