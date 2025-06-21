export interface PokeAPIResponse {
  count: number;
  next: string;
  previous: null;
  results: PokeAPIResponsePokemon[];
}

export interface PokeAPIResponsePokemon {
  name: string;
  url: string;
}
