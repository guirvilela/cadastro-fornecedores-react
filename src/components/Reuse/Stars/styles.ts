import styled from "styled-components";

interface StarProps {
  isActive: boolean;
  isHovered: boolean;
}

export const StarContainer = styled.div`
  display: flex;
  gap: 4px;
`;

export const Star = styled.span<StarProps>`
  font-size: 32px;
  color: ${({ theme, isActive, isHovered }) =>
    isActive || isHovered
      ? theme.colors.star_background
      : theme.colors.gray_medium};
  cursor: pointer;
  transition: color 0.2;
`;
