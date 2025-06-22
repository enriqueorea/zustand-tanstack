import { Heart, Sparkles } from "lucide-react";
import FavoritesPokemonsList from "../components/FavoritesPokemonsList";
import { useFavoritesPokemons } from "../store/favoritesPokemonStore";

export const FavoritesPokemonsPage = () => {
  const favoritesPokemons = useFavoritesPokemons();
  const totalFavorites = favoritesPokemons.length;

  return (
    <div className="relative">
      {/* Decorative Background Elements - más sutil para integrar con MainLayout */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        {/* Floating glass orbs - más discretos */}
        <div className="absolute top-10 left-10 w-24 h-24 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full"></div>
        <div className="absolute top-20 right-20 w-16 h-16 bg-pink-200/20 backdrop-blur-xl border border-pink-300/30 rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-20 h-20 bg-red-200/15 backdrop-blur-xl border border-red-300/25 rounded-full"></div>
        <div className="absolute bottom-32 right-32 w-12 h-12 bg-rose-200/20 backdrop-blur-xl border border-rose-300/30 rounded-full"></div>

        {/* Gradient mesh overlay - más sutil */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-50/30 via-transparent to-rose-50/20"></div>
      </div>

      {/* Header Section - ahora como parte del contenido, no sticky para no chocar con nav */}
      <div className="bg-white/30 backdrop-blur-xl border border-white/40 rounded-2xl p-6 mb-8 shadow-lg shadow-pink-100/30">
        {/* Inner glass effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-pink-50/20 to-white/10 backdrop-blur-sm rounded-2xl"></div>

        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-2">
            <div className="relative">
              {/* Glass background for icon */}
              <div className="absolute inset-0 bg-white/20 backdrop-blur-lg border border-white/30 rounded-full transform -translate-x-1 -translate-y-1 w-12 h-12"></div>
              <div className="relative bg-white/40 backdrop-blur-xl border-2 border-white/50 rounded-full p-2 shadow-lg">
                <Heart className="w-8 h-8 text-red-500 fill-red-500" />
                <Sparkles className="w-4 h-4 text-yellow-400 absolute -top-1 -right-1" />
              </div>
            </div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-red-600 via-pink-600 to-rose-600 bg-clip-text text-transparent drop-shadow-sm">
              Pokémon Favoritos
            </h1>
          </div>

          <div className="flex items-center gap-4">
            <p className="text-gray-700 font-medium">
              Tus pokémon especiales guardados con amor
            </p>
            {totalFavorites > 0 && (
              <div className="bg-gradient-to-r from-red-500 to-pink-500 backdrop-blur-sm border border-white/30 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg shadow-red-200/50">
                {totalFavorites}{" "}
                {totalFavorites === 1 ? "favorito" : "favoritos"}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Content Section - ahora más integrado */}
      <div className="bg-white/15 backdrop-blur-xl border border-white/30 rounded-2xl p-6 shadow-xl shadow-pink-200/10">
        <FavoritesPokemonsList />
      </div>
    </div>
  );
};
