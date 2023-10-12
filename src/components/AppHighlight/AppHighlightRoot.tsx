import * as S from "./styles";

interface Props {
  children: React.JSX.Element;
}

export function AppHighlightRoot({ children }: any) {
  return <S.Container>{children}</S.Container>;
}
