import type { ButtonHTMLAttributes } from "react";
import React from "react";
import { ButtonContainer } from "./style";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color: "blue" | "gray" | "delete";
  variant?: "default" | "outline";
  size?: "default" | "submit";
}

export function Button({
  color,
  size = "default",
  variant = "default",
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
    <>
      <ButtonContainer
        color={color}
        size={size}
        variant={variant}
        onClick={handleClick}
        {...props}
      ></ButtonContainer>
    </>
  );
}
