import { TextInputProps } from "react-native";

import * as S from "./styles";
import { useTheme } from "styled-components/native";

export function AppInput({ ...rest }: TextInputProps) {
  const { COLORS } = useTheme();
  return (
    <S.Container
      placeholder="Nome da Turma"
      placeholderTextColor={COLORS.GRAY_300}
      {...rest}
    />
  );
}
