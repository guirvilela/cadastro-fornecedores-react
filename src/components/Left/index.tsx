import { useRegisterController } from "../../hooks/register-page/register-controller";
import { Button } from "../Reuse/Button";
import { Card } from "../Reuse/Card";
import { DocumentSelect } from "../Reuse/DocumentSelect";
import { InputField } from "../Reuse/Input";
import { Stars } from "../Reuse/Stars";
import {
  Form,
  FormData,
  LeftContainer,
  Providers,
  ProvidersTitle,
  RowField,
  SubmitButtonContainer,
} from "./styles";

// pages
// components
// assets
//icons
// icone.svg/.png
// public

// theme
// styles

// - LÓGICA

// hooks - Lógica de uma página (Páginas)
// cadastro
// login
// services - Responsáveis pelos endpoints
// utils

// services (global)
// getCep()
// http://vicep.com.br/{cep}

// utils (global)
// fixCep(cep)
// return cep.replace('-', "")

export function Left() {
  const { register, setValue, watch, handleFormSubmit, handleSubmit, errors } =
    useRegisterController();

  return (
    <LeftContainer>
      <Providers>
        <ProvidersTitle>
          <h1>Cadastro de Fornecedores</h1>
          <p>Preencha o formulário abaixo para cadastrar seus fornecedores</p>
        </ProvidersTitle>

        <Form onSubmit={handleSubmit(handleFormSubmit)}>
          <FormData>
            <h2>Dados da Empresa</h2>

            <InputField
              type="text"
              placeholder="Digite o nome da empresa"
              {...register("nomeEmpresa")}
              error={errors.nomeEmpresa?.message}
            >
              Nome da empresa
            </InputField>
            <InputField
              type="text"
              placeholder="00.000.000/0000-00"
              {...register("cnpj")}
              error={errors.cnpj?.message}
            >
              CNPJ:
            </InputField>
          </FormData>

          <FormData>
            <h2>Endereço</h2>

            <InputField
              type="text"
              placeholder="00000-000"
              {...register("cep")}
              error={errors.cep?.message}
            >
              Seu CEP
            </InputField>

            <RowField>
              <InputField
                type="texto"
                placeholder="Digite sua rua"
                {...register("rua")}
                error={errors.rua?.message}
              >
                Rua
              </InputField>
              <InputField
                type="number"
                placeholder="Digite o número"
                {...register("numero")}
                error={errors.numero?.message}
              >
                Número
              </InputField>
            </RowField>

            <RowField>
              <InputField
                type="text"
                placeholder="Digite sua cidade"
                {...register("cidade")}
                error={errors.cidade?.message}
              >
                Cidade
              </InputField>
              <InputField
                type="text"
                placeholder="MG"
                {...register("estado")}
                error={errors.estado?.message}
              >
                Estado
              </InputField>
            </RowField>
          </FormData>

          <FormData>
            <h2>Contato</h2>

            <InputField
              type="text"
              placeholder="(00) 00000-0000"
              {...register("telefone")}
              error={errors.telefone?.message}
            >
              Telefone
            </InputField>

            <InputField
              type="email"
              placeholder="Digite seu e-mail"
              {...register("email")}
              error={errors.email?.message}
            >
              E-mail
            </InputField>
          </FormData>

          <FormData>
            <h2>Documentos</h2>

            <Card label="Contrato Social:">
              <DocumentSelect
                register={register("contratoSocial")}
                onFileSelect={(file) =>
                  setValue("contratoSocial", file || undefined)
                }
              />
            </Card>

            <Card label="CNPJ:">
              <DocumentSelect
                register={register("cnpjDoc")}
                onFileSelect={(file) => setValue("cnpjDoc", file ?? undefined)}
              />
            </Card>

            <Card label="Alvará Sanitário:">
              <DocumentSelect
                register={register("alvaraSanitario")}
                onFileSelect={(file) =>
                  setValue("alvaraSanitario", file || undefined)
                }
              />

              <InputField
                type="date"
                placeholder="Selecione a data"
                {...register("validacaoAlvara")}
                error={errors.validacaoAlvara?.message}
              >
                Validade do Alvará Sanitário:
              </InputField>
            </Card>

            <Card label="Autorização de funcionamento:">
              <DocumentSelect
                register={register("autorizacaoFuncionamento")}
                onFileSelect={(file) =>
                  setValue("autorizacaoFuncionamento", file || undefined)
                }
              />
            </Card>

            <Card label="Avaliação do Fornecedor">
              <Stars
                value={Number(watch("avaliacao"))}
                onSendValue={(star) =>
                  setValue("avaliacao", star, {
                    shouldValidate: true,
                    shouldDirty: true,
                  })
                }
              />

              <p>Nota: {Number(watch("avaliacao"))}</p>
            </Card>
          </FormData>

          <SubmitButtonContainer>
            <Button color="blue" variant="outline" size="submit">
              Salvar resposta
            </Button>
            <Button color="blue" type="submit" size="submit">
              Cadastrar
            </Button>
          </SubmitButtonContainer>
        </Form>
      </Providers>
    </LeftContainer>
  );
}
