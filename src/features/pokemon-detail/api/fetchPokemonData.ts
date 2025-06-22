import { apiClient } from "@/core/api/client";
import type { PokeAPIPokemon } from "@/dto/pokeapi-response-pokemon.dto";

export const fetchPokemonDataById = async (name: string) => {
  const { data } = await apiClient.get<PokeAPIPokemon>(`/pokemon/${name}`);
  return data;
};
