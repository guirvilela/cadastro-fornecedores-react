import styled, { css } from "styled-components";

export const LeftContainer = styled.div`
  overflow: auto;
  padding: 64px;
  height: 100vh;
`;

export const Providers = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
  max-width: 528px;
`;

export const ProvidersTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  h1 {
    font: ${({ theme }) => theme.fonts.poppins.big_600};
  }

  p {
    font: ${({ theme }) => theme.fonts.poppins.small_400};
    color: ${({ theme }) => theme.colors.text_secondary};
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const FormData = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  h2 {
    ${({ theme }) => css`
      font: ${theme.fonts.poppins.regular_600};
      color: ${theme.colors.text_secondary};
    `}
  }
`;

export const RowField = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 20px;

  & > :first-child {
    grid-column: span 8;
  }

  & > :last-child {
    grid-column: span 4;
  }
`;
