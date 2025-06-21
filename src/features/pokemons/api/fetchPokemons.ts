import { apiClient } from "@/core/api/client";
import type { PokeAPIResponse } from "@/dto/pokeapi-response.dto";

interface FetchPokemonsParams {
  limit?: number;
  offset?: number;
}

export const fetchPokemons = async (params: FetchPokemonsParams) => {
  const { data } = await apiClient.get<PokeAPIResponse>("/pokemon", { params });
  return data;
};
