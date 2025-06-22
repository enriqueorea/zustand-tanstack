import {
  useQueries,
  useQuery,
  useQueryClient,
  keepPreviousData,
} from "@tanstack/react-query";
import { fetchPokemons } from "../api/fetchPokemons";
import type { FetchPokemonsParams } from "../api/fetchPokemons";
import { fetchPokemonDataById } from "@/features/pokemon-detail/api/fetchPokemonData";
import { mapPokemon } from "../utils/mapPokemons";
import { useEffect } from "react";

export const usePokemons = (params: FetchPokemonsParams) => {
  const queryClient = useQueryClient();

  const {
    data: pokemonsList,
    isLoading,
    error,
    isPlaceholderData,
    isFetching,
  } = useQuery({
    queryKey: ["pokemons", params],
    queryFn: () => fetchPokemons(params),
    placeholderData: keepPreviousData,
    staleTime: 5000,
  });

  const pokemonDetailedList = useQueries({
    queries:
      pokemonsList?.results.map((pokemon) => ({
        queryKey: ["pokemon", pokemon.name],
        queryFn: () => fetchPokemonDataById(pokemon.name),
        enabled: !!pokemonsList,
      })) ?? [],
  });

  const pokemons =
    pokemonsList?.results.map((_pokemon, i) => {
      const pokemonData = pokemonDetailedList[i]?.data;
      return mapPokemon(pokemonData);
    }) ?? [];

  // Prefetch next page
  useEffect(() => {
    if (!isPlaceholderData && pokemonsList?.next) {
      const currentOffset = params.offset || 0;
      const currentLimit = params.limit || 20;
      const nextOffset = currentOffset + currentLimit;
      queryClient.prefetchQuery({
        queryKey: ["pokemons", { ...params, offset: nextOffset }],
        queryFn: () => fetchPokemons({ ...params, offset: nextOffset }),
      });
    }
  }, [pokemonsList, isPlaceholderData, params, queryClient]);

  const totalCount = pokemonsList?.count || 0;
  const hasNextPage = !!pokemonsList?.next;
  const hasPreviousPage = (params.offset || 0) > 0;

  return {
    pokemons,
    isLoading,
    error,
    isFetching,
    isPlaceholderData,
    totalCount,
    hasNextPage,
    hasPreviousPage,
  };
};
