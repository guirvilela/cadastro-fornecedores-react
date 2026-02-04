import styled, { css, type ThemeType } from "styled-components";

interface ButtonStyleProps {
  color: "blue" | "gray" | "delete";
  variant?: "default" | "outline";
  size: "default" | "submit";
}

type ButtonColors = "blue" | "gray" | "delete";

// Record = Tipagem de Chave e valor
const switchButtonColor = (color: ButtonColors, theme: ThemeType) => {
  const colorSwitch: Record<ButtonColors, string> = {
    blue: theme.colors.blue_medium,
    gray: theme.colors.gray_button,
    delete: "transparent",
  };

  return colorSwitch[color];
};

const switchButtonHoverColor = (color: ButtonColors, theme: ThemeType) => {
  const colorSwitch: Record<ButtonColors, string> = {
    blue: theme.colors.blue_hover,
    delete: theme.colors.semantic_error,
    gray: theme.colors.gray_hover,
  };
  return colorSwitch[color];
};

export const ButtonContainer = styled.button<ButtonStyleProps>`
  padding: ${({ size }) => (size == "submit" ? "12px 24px" : "8px 16px")};
  border-radius: 6px;
  font: ${({ theme }) => theme.fonts.poppins.regular_400};
  border: none;
  white-space: nowrap;

  background: ${({ theme }) => theme.colors.blue_medium};

  transition: background-color 0.3s ease;

  ${({ theme, color, variant }) =>
    variant == "outline"
      ? css({
          color: theme.colors.blue_medium,
          background: "transparent",
          border: `1px solid ${theme.colors.blue_medium}`,
        })
      : css({
          color:
            color == "delete"
              ? theme.colors.semantic_error
              : theme.colors.background,
          background: switchButtonColor(color, theme),
          border:
            color === "delete"
              ? `1px solid ${theme.colors.semantic_error}`
              : "none",
        })}

  &:hover {
    color: ${({ theme }) => theme.colors.background};

    ${({ theme, color, variant }) =>
      variant === "outline"
        ? css({
            background: theme.colors.blue_medium,
          })
        : css({
            background: switchButtonHoverColor(color, theme),
          })}
  }
`;
