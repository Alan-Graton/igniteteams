import styled from "styled-components/native";

import { TextInput } from "react-native";

export const Container = styled(TextInput)`
  width: 100%;
  min-height: 56px;
  max-height: 56px;

  padding: 12px;

  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;

  border-radius: 6px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`;
