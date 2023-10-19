import logo from "@/assets/logo.png";
import * as S from "./styles";
import { useNavigation } from "expo-router";

type Props = {
  showBackIcon?: boolean;
};

export function AppHeader({ showBackIcon = false }: Props) {
  const navigation = useNavigation();

  return (
    <>
      <S.Container>
        {showBackIcon && (
          <S.BackButton
            onPress={() => {
              navigation.goBack();
            }}
          >
            <S.BackIcon />
          </S.BackButton>
        )}
        <S.Logo source={logo} />
      </S.Container>
    </>
  );
}
