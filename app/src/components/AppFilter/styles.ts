import styled, { css } from "styled-components/native";
import { TouchableOpacity } from "react-native";

export type FilterStyleProps = {
  isActive?: boolean;
};

export const Container = styled(TouchableOpacity)<FilterStyleProps>`
  ${({ theme, isActive }) =>
    isActive &&
    css`
      border: 1px solid ${theme.COLORS.GREEN_700};
    `}

  width: 70px;
  height: 38px;

  margin-right: 12px;

  align-items: center;
  justify-content: center;

  border-radius: 4px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
`;

export const Title = styled.Text`
  text-transform: uppercase;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.WHITE};
  `};
`;
