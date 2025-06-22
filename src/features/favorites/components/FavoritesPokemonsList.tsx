import { Heart, Sparkles, Star } from "lucide-react";
import { useFavoritesPokemons } from "../store/favoritesPokemonStore";
import { PokemonCard } from "@/features/pokemons/components/PokemonCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const FavoritesPokemonsList = () => {
  const favoritesPokemons = useFavoritesPokemons();

  // Estado vacío cuando no hay favoritos
  if (favoritesPokemons.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 px-4 relative">
        {/* Glass background container */}
        <div className="bg-white/30 backdrop-blur-2xl border-2 border-white/50 rounded-3xl p-12 shadow-2xl shadow-pink-200/30 relative overflow-hidden">
          {/* Decorative glass elements */}
          <div className="absolute top-4 right-4 w-16 h-16 bg-pink-200/20 backdrop-blur-xl border border-pink-300/40 rounded-full"></div>
          <div className="absolute bottom-4 left-4 w-12 h-12 bg-red-200/20 backdrop-blur-xl border border-red-300/40 rounded-full"></div>

          <div className="relative mb-6">
            {/* Multi-layered glass circles */}
            <div className="w-32 h-32 bg-gradient-to-br from-pink-100/40 to-red-100/40 backdrop-blur-xl border-2 border-white/60 rounded-full flex items-center justify-center shadow-lg relative">
              <div className="absolute inset-2 bg-white/20 backdrop-blur-lg border border-white/40 rounded-full"></div>
              <div className="relative">
                <Heart className="w-16 h-16 text-gray-400 stroke-2" />
                <div className="absolute -top-2 -right-2">
                  <div className="w-8 h-8 bg-white/60 backdrop-blur-xl border-2 border-white/70 rounded-full flex items-center justify-center shadow-lg">
                    <Sparkles className="w-4 h-4 text-gray-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-800 mb-3 text-center">
            ¡Aún no tienes favoritos!
          </h2>
          <p className="text-gray-700 text-center mb-8 max-w-md font-medium">
            Explora la pokédex y marca con ❤️ a tus pokémon favoritos.
            Aparecerán aquí para que puedas encontrarlos fácilmente.
          </p>

          <Link to="/">
            <Button className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white px-6 py-3 rounded-full font-medium transition-all duration-200 transform hover:scale-105 shadow-xl backdrop-blur-sm border border-white/20">
              <Star className="w-4 h-4 mr-2" />
              Explorar Pokémon
            </Button>
          </Link>
        </div>

        {/* Floating decorative glass elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-pink-300/50 backdrop-blur-lg border border-pink-400/60 rounded-full"></div>
          <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-red-300/50 backdrop-blur-lg border border-red-400/60 rounded-full"></div>
          <div className="absolute bottom-1/4 left-1/3 w-2.5 h-2.5 bg-rose-300/50 backdrop-blur-lg border border-rose-400/60 rounded-full"></div>
          <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-pink-400/50 backdrop-blur-lg border border-pink-500/60 rounded-full"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Grid de pokémon favoritos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
        {favoritesPokemons.map((pokemon, index) => (
          <div
            key={pokemon.id}
            className="transform transition-all duration-300 hover:scale-[1.02]"
            style={{
              animationDelay: `${index * 0.1}s`,
              animation: "fadeInUp 0.6s ease-out forwards",
            }}
          >
            <PokemonCard pokemon={pokemon} />
          </div>
        ))}
      </div>

      {/* Mensaje motivacional cuando hay favoritos */}
      <div className="text-center py-8">
        <div className="inline-flex items-center gap-2 bg-white/40 backdrop-blur-xl border-2 border-white/60 px-6 py-3 rounded-full shadow-lg shadow-pink-200/30">
          {/* Glass accent on the left */}
          <div className="w-8 h-8 bg-red-100/50 backdrop-blur-lg border border-red-200/60 rounded-full flex items-center justify-center">
            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
          </div>
          <span className="text-sm text-gray-700 font-medium">
            ¡Gran colección! Sigue explorando para encontrar más favoritos
          </span>
          <div className="w-8 h-8 bg-yellow-100/50 backdrop-blur-lg border border-yellow-200/60 rounded-full flex items-center justify-center">
            <Sparkles className="w-4 h-4 text-yellow-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FavoritesPokemonsList;
