import { useQuery } from "@tanstack/react-query";
import { fetchPokemonDataById } from "../api/fetchPokemonData";

export const usePokemon = (name: string) => {
  return useQuery({
    queryKey: ["pokemon", name],
    queryFn: () => fetchPokemonDataById(name),
  });
};
