import { styled } from "styled-components";

export const Container = styled.main`
  display: grid;
  grid-template-columns: 51.25% 48.75%;
  overflow: hidden;
`;

export const LeftContainer = styled.div`
  overflow: auto;
  padding: 64px;
  height: 100vh;
`;

export const Providers = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
  /* margin-left: auto; */
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
