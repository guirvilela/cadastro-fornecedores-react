import { InputField } from "../Reuse/Input";
import {
  Form,
  FormData,
  LeftContainer,
  Providers,
  ProvidersTitle,
} from "./styles";

export function Left() {
  return (
    <LeftContainer>
      <Providers>
        <ProvidersTitle>
          <h1>Cadastro de Fornecedores</h1>
          <p>Preencha o formulário abaixo para cadastrar seus fornecedores</p>
        </ProvidersTitle>

        <Form>
          <FormData>
            <h2>Dados da Empresa</h2>

            <div>
              <InputField
                placeholder="teste22"
                error={"Nome da empresa é obrigatória"}
              >
                Nome da empresa
              </InputField>
            </div>
          </FormData>

          <FormData>
            <h2>Endereço</h2>

            <div>
              <InputField placeholder="teste22">Seu CEP</InputField>
            </div>
          </FormData>
        </Form>
      </Providers>
    </LeftContainer>
  );
}
