import styled, { css } from "styled-components/native";

import { MaterialIcons } from "@expo/vector-icons";

export const Container = styled.View`
  flex: 1;

  width: 100%;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 12px;

  border-radius: 6px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_400};
`;

export const Form = styled.View`
  flex-direction: row;

  padding: 10px;

  align-items: center;
`;

export const PlayerName = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}

  margin-left: 10px;
`;

export const Icon = styled(MaterialIcons).attrs(({ theme }) => ({
  name: "person",
  size: 32,
  color: theme.COLORS.GRAY_300,
}))``;
