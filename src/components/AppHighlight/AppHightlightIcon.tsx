import * as S from "./styles";

interface Props {
  icon: React.JSX.Element;
}

export function AppHighlightIcon({ icon }: Props) {
  return <S.Icon>{icon}</S.Icon>;
}
