import { Container, LeftContainer, Providers, ProvidersTitle } from "./styles";

export function HomePage() {
  return (
    <Container>
      <LeftContainer>
        <Providers>
          <ProvidersTitle>
            <h1>Cadastro de fornecedores</h1>
            <p>Preencha o formulário abaixo para cadastrar seus fornecedores</p>
          </ProvidersTitle>
        </Providers>
      </LeftContainer>
      <div>DIREITA</div>
    </Container>
  );
}
