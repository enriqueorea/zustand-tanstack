import type { Pokemon } from "@/features/pokemons/interface/pokemon";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface FavoritesPokemonState {
  favoritesPokemon: Pokemon[];
}

interface FavoritesPokemonActions {
  addFavoritePokemon: (pokemon: Pokemon) => void;
  removeFavoritePokemon: (pokemon: Pokemon) => void;
  isFavoritePokemon: (pokemon: Pokemon) => boolean;
  clearFavorites: () => void;
}

type FavoritesPokemonStore = FavoritesPokemonState & FavoritesPokemonActions;

const useFavoritesPokemonStore = create<FavoritesPokemonStore>()(
  persist(
    (set, get) => ({
      // Estado
      favoritesPokemon: [],

      // Acciones
      addFavoritePokemon: (pokemon: Pokemon) =>
        set((state) => ({
          favoritesPokemon: [...state.favoritesPokemon, pokemon],
        })),

      removeFavoritePokemon: (pokemon: Pokemon) =>
        set((state) => ({
          favoritesPokemon: state.favoritesPokemon.filter(
            (p) => p.id !== pokemon.id
          ),
        })),

      isFavoritePokemon: (pokemon: Pokemon) =>
        get().favoritesPokemon.some((p) => p.id === pokemon.id),

      clearFavorites: () => set({ favoritesPokemon: [] }),
    }),
    {
      name: "favorites-pokemon",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ favoritesPokemon: state.favoritesPokemon }),
    }
  )
);

export const useFavoritesPokemons = () =>
  useFavoritesPokemonStore((state) => state.favoritesPokemon);

export const useIsFavoritePokemon = (pokemon: Pokemon) =>
  useFavoritesPokemonStore((state) =>
    state.favoritesPokemon.some((p) => p.id === pokemon.id)
  );

export const useFavoritesPokemonActions = () => ({
  addFavoritePokemon: useFavoritesPokemonStore(
    (state) => state.addFavoritePokemon
  ),
  removeFavoritePokemon: useFavoritesPokemonStore(
    (state) => state.removeFavoritePokemon
  ),
  isFavoritePokemon: useFavoritesPokemonStore(
    (state) => state.isFavoritePokemon
  ),
  clearFavorites: useFavoritesPokemonStore((state) => state.clearFavorites),
});

export type { FavoritesPokemonActions };
