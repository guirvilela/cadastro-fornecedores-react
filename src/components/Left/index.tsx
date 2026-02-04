import { Card } from "../Reuse/Card";
import { DocumentSelect } from "../Reuse/DocumentSelect";
import { InputField } from "../Reuse/Input";
import {
  Form,
  FormData,
  LeftContainer,
  Providers,
  ProvidersTitle,
  RowField,
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

            <InputField
              type="text"
              placeholder="teste22"
              error={"Nome da empresa é obrigatória"}
            >
              Nome da empresa
            </InputField>

            <InputField type="text" placeholder="00.000.000/0000-00">
              CNPJ:
            </InputField>
          </FormData>

          <FormData>
            <h2>Endereço</h2>

            <InputField type="text" placeholder="00000-000">
              Seu CEP
            </InputField>

            <RowField>
              <InputField type="texto" placeholder="Digite sua rua">
                Rua
              </InputField>
              <InputField type="number" placeholder="Digite o número">
                Número
              </InputField>
            </RowField>

            <RowField>
              <InputField type="text" placeholder="Digite sua cidade">
                Cidade
              </InputField>
              <InputField type="text" placeholder="MG">
                Estado
              </InputField>
            </RowField>
          </FormData>

          <FormData>
            <h2>Contato</h2>

            <InputField type="text" placeholder="(00) 00000-0000">
              Telefone{" "}
            </InputField>
            <InputField type="email" placeholder="Digite seu e-mail">
              E-mail
            </InputField>
          </FormData>

          <FormData>
            <h2>Documentos</h2>

            <Card label="Contrato Social:">
              <DocumentSelect />
            </Card>
          </FormData>
        </Form>
      </Providers>
    </LeftContainer>
  );
}
