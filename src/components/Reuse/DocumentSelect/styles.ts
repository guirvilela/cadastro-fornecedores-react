import styled from "styled-components";

export const DocumentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const DocumentLabel = styled.label`
  font: ${({ theme }) => theme.fonts.poppins.small_400};
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 8px;
`;

export const SelectedFile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  display: flex;
  align-items: center;
  gap: 4px;

  span {
    font: ${({ theme }) => theme.fonts.poppins.small_400};
    color: ${({ theme }) => theme.colors.green_success};
    font-weight: 700;
  }

  p {
    font: ${({ theme }) => theme.fonts.poppins.small_400};
  }
`;

export const NonSelectedFileText = styled.p`
  font: ${({ theme }) => theme.fonts.poppins.small_400};
`;
