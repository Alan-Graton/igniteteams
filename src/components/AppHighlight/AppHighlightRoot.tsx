import * as S from "./styles";

interface Props {
  children: JSX.Element | JSX.Element[];
}

export function AppHighlightRoot({ children }: Props) {
  return <S.Container>{children}</S.Container>;
}
