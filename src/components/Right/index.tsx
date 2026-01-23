import ImageTransform from "../../assets/transform-image.png";
import { Container, Content, Image, TextContent } from "./styles";

export function Right() {
  return (
    <Container>
      <Content>
        <TextContent>
          <h1>
            Transforme sua gestão de <br /> <span>fornecedores</span> e
            impulsione seu negócio!
          </h1>

          <p>
            Garanta parcerias confiáveis com um cadastro eficiente de <br />
            fornecedores! Com um sistema estruturado, você facilita <br />
            negociações, assegura conformidade legal e otimiza processos <br />
            comerciais.
          </p>
        </TextContent>

        <Image src={ImageTransform} />
      </Content>
    </Container>
  );
}
