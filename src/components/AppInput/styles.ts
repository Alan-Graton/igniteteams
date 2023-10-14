import styled, { css } from "styled-components/native";

import { TextInput } from "react-native";

export const Container = styled(TextInput)`
  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;

    background-color: ${theme.COLORS.GRAY_700};
  `}

  width: 100%;
  min-height: 56px;
  max-height: 56px;

  padding: 12px;
  border-radius: 6px;
`;
