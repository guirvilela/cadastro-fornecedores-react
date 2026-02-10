import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import z from "zod";
import { searchCepInfo } from "../../services/search-cep";

const schema = z.object({
  nomeEmpresa: z.string().min(1, "Nome da empresa é obrigatória"),
  cnpj: z.string().min(1, "CNPJ é obrigatório"),
  cep: z.string().min(1, "CEP é obrigatório"),
  rua: z.string().min(1, "Rua é obriatório"),
  numero: z.string().min(1, "Número é obrigatório"),
  cidade: z.string().min(1, "Cidade é obrigatória"),
  estado: z.string().min(1, "Estado é obrigatório"),
  telefone: z.string().min(1, "Telefone é obrigatório"),
  email: z.string().min(1, "E-mail é obrigatório").email("E-mail inválido"),
  contratoSocial: z.instanceof(File).optional(),
  cnpjDoc: z.instanceof(File).optional(),
  alvaraSanitario: z.instanceof(File).optional(),
  validacaoAlvara: z.coerce.date("Data é obrigatório"),
  autorizacaoFuncionamento: z.instanceof(File).optional(),
  avaliacao: z.coerce.number().min(1).max(5),
});

type RegisterFomData = z.infer<typeof schema>;

export function useRegisterController() {
  const {
    register,
    setValue,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      avaliacao: 1,
    },
  });

  // eslint-disable-next-line react-hooks/incompatible-library
  const cepValue = watch("cep");

  const handleFormSubmit = (formData: RegisterFomData) => {
    console.log(formData);
  };

  const handleCepSearch = React.useCallback(async () => {
    try {
      const response = await searchCepInfo({ cep: cepValue });

      setValue("rua", response!.logradouro);
      setValue("cidade", response!.localidade);
      setValue("estado", response!.estado);
    } catch (error) {
      console.error(error);
    }
  }, [cepValue, setValue]);

  React.useEffect(() => {
    if (cepValue && cepValue.length > 7) {
      handleCepSearch();
    }
  }, [cepValue, handleCepSearch]);

  return {
    register,
    setValue,
    watch,
    handleFormSubmit,
    handleSubmit,
    errors,
  };
}
