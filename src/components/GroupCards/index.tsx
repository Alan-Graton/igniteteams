import * as S from "./styles";

interface Props {
  title: string;
}

export function GroupCards({ title }: Props) {
  return (
    <S.Container>
      <S.Icon />
      <S.Title>{title}</S.Title>
    </S.Container>
  );
}
