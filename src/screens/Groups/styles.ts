import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;

  padding: 24px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
`;
