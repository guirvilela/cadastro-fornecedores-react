import styled, { css, type ThemeType } from "styled-components";

interface ButtonStyleProps {
  color: "blue" | "gray" | "delete";
  variant: "default" | "outline" | "submit";
  size: "default" | "submit";
}

type ButtonColor = "delete" | "blue" | "gray";

// Record<Tipo da chave Chaves, TipoDoValor>

const swtichButtonColor = (color: ButtonColor, theme: ThemeType) => {
  const colorSwitch: Record<ButtonColor, string> = {
    delete: theme.colors.background,
    blue: theme.colors.blue_medium,
    gray: theme.colors.gray_button,
  };

  return colorSwitch[color];
};

const swtichButtonHoverColor = (color: ButtonColor, theme: ThemeType) => {
  const colorSwitch: Record<ButtonColor, string> = {
    delete: theme.colors.semantic_error,
    blue: theme.colors.blue_hover,
    gray: theme.colors.gray_hover,
  };

  return colorSwitch[color];
};

export const ButtonContainer = styled.button<ButtonStyleProps>`
  padding: ${({ size }) => (size === "submit" ? "12px 24px" : "8px 16px")};
  border-radius: 6px;
  font: ${({ theme }) => theme.fonts.poppins.regular_400};
  border: none;

  transition:
    background-color 0.3s ease,
    opacity 0.3s ease;
  white-space: nowrap;

  ${({ theme, color, variant }) =>
    variant === "outline"
      ? css({
          color: theme.colors.blue_medium,
          backgroundColor: "transparent",
          border: `1px solid ${theme.colors.blue_medium}`,
        })
      : css({
          color:
            color === "delete"
              ? theme.colors.semantic_error
              : theme.colors.background,
          backgroundColor: swtichButtonColor(color, theme),
          border:
            color === "delete"
              ? `1px solid ${theme.colors.semantic_error}`
              : "none",
        })}
  /* backgroundColor: color === "blue" ? theme.colors.blue_medium : theme.colors.gray_button */
  &:hover {
    ${({ theme, color, variant }) =>
      variant === "outline"
        ? css({
            color: theme.colors.background,
            backgroundColor: theme.colors.blue_medium,
          })
        : css({
            color: theme.colors.background,
            backgroundColor: swtichButtonHoverColor(color, theme),
          })}/* backgroundColor : color === "blue" ? theme.colors.blue_medium : theme.colors.gray_hover, */
  }
`;
