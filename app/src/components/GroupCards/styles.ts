import styled, { css } from "styled-components/native";
// Components
import { TouchableOpacity } from "react-native";
import { UsersThree } from "phosphor-react-native";

export const Container = styled(TouchableOpacity)`
  width: 100%;
  height: 96px;

  align-items: center;
  flex-direction: row;

  padding: 24px;

  border-radius: 6px;

  margin-bottom: 12px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
`;

export const Icon = styled(UsersThree).attrs(({ theme }) => ({
  color: theme.COLORS.GREEN_700,
  size: 32,
  weight: "fill",
}))`
  margin-right: 20px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`;
