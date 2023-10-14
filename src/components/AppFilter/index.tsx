import { TouchableOpacityProps } from "react-native";

import * as S from "./styles";

type Props = TouchableOpacityProps &
  S.FilterStyleProps & {
    title: string;
    isActive?: boolean;
  };

export function AppFilter({ title, isActive = false, ...rest }: Props) {
  return (
    <S.Container isActive={isActive} {...rest}>
      <S.Title>{title}</S.Title>
    </S.Container>
  );
}
