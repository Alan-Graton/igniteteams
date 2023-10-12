import styled from "styled-components/native";
import { CaretLeft } from "phosphor-react-native";

// GAP: Não foi usado na aula ainda
export const Container = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;

  gap: 250px;

  flex-direction: row;
`;

export const Logo = styled.Image``;

export const BackButton = styled.TouchableOpacity``;

export const BackIcon = styled(CaretLeft).attrs(({ theme }) => ({
  size: 36,
  color: theme.COLORS.WHITE,
}))``;
