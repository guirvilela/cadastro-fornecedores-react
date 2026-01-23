import { Left } from "../components/Left";
import { Right } from "../components/Right";
import { Container } from "./styles";

export function HomePage() {
  return (
    <Container>
      <Left />
      <Right />
    </Container>
  );
}
