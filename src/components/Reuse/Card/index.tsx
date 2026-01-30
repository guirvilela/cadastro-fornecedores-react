import { CardContainer, CardGap, CardLabel } from "./style";

interface CardProps {
  children: React.ReactNode;
  label: string;
}

export function Card({ label, children }: CardProps) {
  return (
    <CardContainer>
      <CardLabel>{label}</CardLabel>
      <CardGap>{children}</CardGap>
    </CardContainer>
  );
}
