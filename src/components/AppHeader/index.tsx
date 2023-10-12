import logo from "@/assets/logo.png";
import * as S from "./styles";

type Props = {
  showBackIcon?: boolean;
};

export function AppHeader({ showBackIcon = false }: Props) {
  return (
    <>
      <S.Container>
        {showBackIcon && (
          <S.BackButton>
            <S.BackIcon />
          </S.BackButton>
        )}
        <S.Logo source={logo} />
      </S.Container>
    </>
  );
}
