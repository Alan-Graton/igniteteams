import { TouchableOpacityProps } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import * as S from "./styles";

type Props = TouchableOpacityProps & {
  type?: S.IconButtonTypeStyleProp;
  icon: keyof typeof MaterialIcons.glyphMap;
};

export function AppIconButton({ icon, type = "PRIMARY", ...rest }: Props) {
  return (
    <S.Container {...rest}>
      <S.Icon name={icon} color={"green"} size={32} />
    </S.Container>
  );
}
