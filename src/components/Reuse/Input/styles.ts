import styled, { css } from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  label {
    ${({ theme }) => css`
      font: ${theme.fonts.poppins.small_400};
      colors: ${theme.colors.text_secondary};
    `}
  }

  input {
    padding: 12px 16px;
    border: 1px solid ${({ theme }) => theme.colors.stroke_default};
    border-radius: 8px;
    outline: none;
    font: ${({ theme }) => theme.fonts.poppins.regular_400};

    &:focus {
      outline: 4px solid ${({ theme }) => theme.colors.blue_light};
      border-color: ${({ theme }) => theme.colors.blue_medium};
      outline-offset: 2px;
    }
  }
`;

export const InputContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const InputError = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  p {
    font: ${({ theme }) => theme.fonts.poppins.small_400};
  }
`;

export const IconError = styled.img`
  width: 18px;
  height: 18px;
`;
