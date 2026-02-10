import axios from "axios";
import type { GetSearchCepRequest, GetSearchCepResponse } from "./types";

export async function searchCepInfo({ cep }: GetSearchCepRequest) {
  const cepFormatted = cep.replace("-", "");

  try {
    const response = await axios.get<GetSearchCepResponse>(
      `https://viacep.com.br/ws/${cepFormatted}/json/`,
    );

    return response.data;
  } catch (error) {
    console.error(error);
  }
}
