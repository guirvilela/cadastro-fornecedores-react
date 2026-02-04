import React from "react";
import { Star, StarContainer } from "./styles";

interface StarsProps {
  value: number;
  onSendValue: (value: number) => void;
}

// PRO PAI ENVIAR PRO FILHO = VARIAVEL

// PRO FILHO ENVIAR PRO PAI = FUNÇÃO

export function Stars({ value, onSendValue }: StarsProps) {
  const [starHovered, setStartHovered] = React.useState<number | null>(null);

  const stars = [1, 2, 3, 4, 5];

  const handleStarClick = (star: number) => {
    if (onSendValue) {
      onSendValue(star);
    }
  };

  return (
    <StarContainer>
      {stars.map((star) => (
        <Star
          key={star}
          isActive={star <= value}
          isHovered={starHovered !== null && star <= starHovered}
          onMouseEnter={() => setStartHovered(star)}
          onMouseLeave={() => setStartHovered(null)}
          onClick={() => handleStarClick(star)}
        >
          ★
        </Star>
      ))}
    </StarContainer>
  );
}
