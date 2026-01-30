import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 16px;
  border: 1px solid ${({ theme }) => theme.colors.stroke_default};
  border-radius: 16px;
`;

export const CardLabel = styled.label`
  font: ${({ theme }) => theme.fonts.poppins.small_400};
`;

export const CardGap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
