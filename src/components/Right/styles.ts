import styled from "styled-components";

export const Container = styled.div`
  padding: 32px;
  background-color: ${({ theme }) => theme.colors.background_transform};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  h1 {
    font: ${({ theme }) => theme.fonts.poppins.giant_600};

    span {
      color: ${({ theme }) => theme.colors.blue_medium};
    }
  }

  p {
    font: ${({ theme }) => theme.fonts.poppins.regular_400};
    color: ${({ theme }) => theme.colors.text_secondary};
  }
`;

export const ImageContainer = styled.div`
  border-radius: 50px;
`;

export const Image = styled.img`
  max-width: 100%;
  max-height: 400px;
  object-fit: contain;
`;
