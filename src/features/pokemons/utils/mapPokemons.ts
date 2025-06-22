import type { PokeAPIPokemon } from "@/dto/pokeapi-response-pokemon.dto";
import type { Pokemon } from "../interface/pokemon";

export const mapPokemon = (
  pokemon: PokeAPIPokemon | undefined
): Pokemon | undefined => {
  if (!pokemon) return undefined;
  return {
    id: pokemon.id,
    name: pokemon.name,
    image: pokemon.sprites.front_default,
    types: pokemon.types.map((type) => type.type.name),
    height: pokemon.height,
    weight: pokemon.weight,
  };
};
