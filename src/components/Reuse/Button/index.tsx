import type { ButtonHTMLAttributes } from "react";
import { ButtonContainer } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color: "blue" | "gray" | "delete";
  variant?: "default" | "outline";
  size?: "default" | "submit";
}

export function Button({
  color,
  variant = "default",
  size = "default",
  onClick,
  ...props
}: ButtonProps) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick) {
      e.preventDefault();
      onClick(e);
    }
  };

  return (
    <ButtonContainer
      color={color}
      variant={variant}
      size={size}
      onClick={handleClick}
      {...props}
    ></ButtonContainer>
  );
}
