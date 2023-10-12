import { TouchableOpacityProps } from "react-native";
import * as S from "./styles";

type Props = TouchableOpacityProps & {
  text: string;
  type?: S.ButtonTypeStyleProps;
};

export function AppButton({ text, type = "PRIMARY", ...rest }: Props) {
  return (
    <S.Container type={type} {...rest}>
      <S.ButtonText>{text}</S.ButtonText>
    </S.Container>
  );
}
