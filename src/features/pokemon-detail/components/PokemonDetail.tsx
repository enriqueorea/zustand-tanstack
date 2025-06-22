import type { PokeAPIPokemon } from "@/dto/pokeapi-response-pokemon.dto";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  useFavoritesPokemonActions,
  useIsFavoritePokemon,
} from "@/features/favorites/store/favoritesPokemonStore";
import PokeballIcon from "@/components/PokeballIcon";
import { typeGradients, typeColors } from "../constants/colors";

const PokemonDetail = ({ pokemon }: { pokemon: PokeAPIPokemon }) => {
  const navigate = useNavigate();
  const { addFavoritePokemon, removeFavoritePokemon } =
    useFavoritesPokemonActions();

  // Mapear pokemon de API a formato interno para favoritos
  const pokemonForFavorites = {
    id: pokemon.id,
    name: pokemon.name,
    image:
      pokemon.sprites.other?.["official-artwork"]?.front_default ||
      pokemon.sprites.front_default ||
      "",
    types: pokemon.types.map((t) => t.type.name),
    weight: pokemon.weight / 10, // API devuelve en hectogramos, convertir a kg
    height: pokemon.height / 10, // API devuelve en decímetros, convertir a metros
  };

  const isFavorite = useIsFavoritePokemon(pokemonForFavorites);

  const primaryType = pokemon.types[0]?.type.name || "normal";
  const gradient = typeGradients[primaryType] || typeGradients.normal;

  const handleFavoriteClick = () => {
    if (isFavorite) {
      removeFavoritePokemon(pokemonForFavorites);
    } else {
      addFavoritePokemon(pokemonForFavorites);
    }
  };

  return (
    <div className="relative">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full"></div>
        <div className="absolute top-32 right-16 w-16 h-16 bg-purple-200/20 backdrop-blur-xl border border-purple-300/30 rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-blue-200/15 backdrop-blur-xl border border-blue-300/25 rounded-full"></div>
      </div>

      {/* Header Section */}
      <div className="bg-white/20 backdrop-blur-xl border border-white/30 rounded-2xl p-6 mb-6 shadow-lg">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate(-1)}
              className="bg-white/20 backdrop-blur-lg border border-white/30 hover:bg-white/30"
            >
              <ArrowLeft className="w-4 h-4" />
            </Button>
            <div>
              <h1 className="text-3xl font-bold text-gray-800 capitalize">
                {pokemon.name}
              </h1>
              <p className="text-gray-600 font-medium">
                #{pokemon.id.toString().padStart(3, "0")}
              </p>
            </div>
          </div>

          <button
            onClick={handleFavoriteClick}
            className="bg-white/30 backdrop-blur-lg border border-white/40 rounded-full p-3 hover:bg-white/40 transition-all duration-200"
          >
            <PokeballIcon isFavorite={isFavorite} size={24} />
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white/15 backdrop-blur-xl border border-white/30 rounded-2xl overflow-hidden shadow-xl">
        {/* Pokemon Image Section */}
        <div
          className={`bg-gradient-to-br ${gradient} p-8 relative overflow-hidden`}
        >
          {/* Background decorations */}
          <div className="absolute top-4 right-4 w-32 h-32 bg-white/10 rounded-full"></div>
          <div className="absolute bottom-4 left-4 w-20 h-20 bg-white/5 rounded-full"></div>

          <div className="flex justify-center items-center min-h-[300px]">
            <img
              src={
                pokemon.sprites.other?.["official-artwork"]?.front_default ||
                pokemon.sprites.front_default
              }
              alt={pokemon.name}
              className="w-64 h-64 object-contain drop-shadow-2xl"
            />
          </div>
        </div>

        {/* Info Section */}
        <div className="p-6 space-y-6">
          {/* Types */}
          <div className="flex justify-center gap-3">
            {pokemon.types.map((type, index) => (
              <Badge
                key={`${type.type.name}-${index}`}
                className={`${
                  typeColors[type.type.name] || "bg-gray-500"
                } text-white border-none px-6 py-2 text-sm font-medium capitalize`}
              >
                {type.type.name}
              </Badge>
            ))}
          </div>

          {/* Basic Info */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-xl p-4 text-center">
              <p className="text-gray-600 text-sm mb-1">Altura</p>
              <p className="text-xl font-bold text-gray-800">
                {(pokemon.height / 10).toFixed(1)} m
              </p>
            </div>
            <div className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-xl p-4 text-center">
              <p className="text-gray-600 text-sm mb-1">Peso</p>
              <p className="text-xl font-bold text-gray-800">
                {(pokemon.weight / 10).toFixed(1)} kg
              </p>
            </div>
          </div>

          {/* Abilities */}
          <div className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-xl p-4">
            <h3 className="text-lg font-bold text-gray-800 mb-3">
              Habilidades
            </h3>
            <div className="flex flex-wrap gap-2">
              {pokemon.abilities.map((ability, index) => (
                <span
                  key={`${ability.ability?.name}-${index}`}
                  className={`bg-white/30 backdrop-blur-sm border border-white/40 px-3 py-1 rounded-full text-sm capitalize ${
                    ability.is_hidden
                      ? "text-purple-700 font-semibold"
                      : "text-gray-700"
                  }`}
                >
                  {ability.ability?.name.replace("-", " ")}
                  {ability.is_hidden && " (Oculta)"}
                </span>
              ))}
            </div>
          </div>

          {/* Base Stats */}
          <div className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-xl p-4">
            <h3 className="text-lg font-bold text-gray-800 mb-4">
              Estadísticas Base
            </h3>
            <div className="space-y-3">
              {pokemon.stats.map((stat, index) => {
                const statName = stat.stat.name
                  .replace("hp", "HP")
                  .replace("attack", "ATK")
                  .replace("defense", "DEF")
                  .replace("special-attack", "SP. ATK")
                  .replace("special-defense", "SP. DEF")
                  .replace("speed", "VEL");

                const percentage = Math.min((stat.base_stat / 200) * 100, 100);

                return (
                  <div
                    key={`${stat.stat.name}-${index}`}
                    className="flex items-center gap-4"
                  >
                    <div className="w-20 text-sm font-medium text-gray-700">
                      {statName}
                    </div>
                    <div className="flex-1">
                      <div className="bg-gray-200/50 rounded-full h-2 overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${gradient} transition-all duration-1000 ease-out`}
                          style={{ width: `${percentage}%` }}
                        />
                      </div>
                    </div>
                    <div className="w-12 text-sm font-bold text-gray-700 text-right">
                      {stat.base_stat}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetail;
