import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  useFavoritesPokemonActions,
  useIsFavoritePokemon,
} from "@/features/favorites/store/favoritesPokemonStore";
import PokeballIcon from "@/components/PokeballIcon";
import type { Pokemon } from "../interface/pokemon";

const typeColors: { [key: string]: string } = {
  grass: "bg-green-500",
  poison: "bg-purple-500",
  fire: "bg-red-500",
  water: "bg-blue-500",
  flying: "bg-indigo-300",
  bug: "bg-lime-500",
  normal: "bg-gray-400",
  electric: "bg-yellow-500",
  psychic: "bg-pink-500",
  ice: "bg-cyan-300",
  dragon: "bg-purple-700",
  dark: "bg-gray-800",
  fairy: "bg-pink-300",
  fighting: "bg-red-700",
  ground: "bg-yellow-600",
  rock: "bg-yellow-800",
  steel: "bg-gray-500",
  ghost: "bg-purple-600",
};

const typeHoverColors: { [key: string]: string } = {
  grass: "hover:border-green-400/60 hover:shadow-green-500/20",
  poison: "hover:border-purple-400/60 hover:shadow-purple-500/20",
  fire: "hover:border-red-400/60 hover:shadow-red-500/20",
  water: "hover:border-blue-400/60 hover:shadow-blue-500/20",
  flying: "hover:border-indigo-300/60 hover:shadow-indigo-500/20",
  bug: "hover:border-lime-400/60 hover:shadow-lime-500/20",
  normal: "hover:border-gray-400/60 hover:shadow-gray-500/20",
  electric: "hover:border-yellow-400/60 hover:shadow-yellow-500/20",
  psychic: "hover:border-pink-400/60 hover:shadow-pink-500/20",
  ice: "hover:border-cyan-300/60 hover:shadow-cyan-500/20",
  dragon: "hover:border-purple-600/60 hover:shadow-purple-700/20",
  dark: "hover:border-gray-700/60 hover:shadow-gray-800/20",
  fairy: "hover:border-pink-300/60 hover:shadow-pink-500/20",
  fighting: "hover:border-red-600/60 hover:shadow-red-700/20",
  ground: "hover:border-yellow-500/60 hover:shadow-yellow-600/20",
  rock: "hover:border-yellow-700/60 hover:shadow-yellow-800/20",
  steel: "hover:border-gray-400/60 hover:shadow-gray-500/20",
  ghost: "hover:border-purple-500/60 hover:shadow-purple-600/20",
};

export function PokemonCard({ pokemon }: { pokemon?: Pokemon }) {
  const { addFavoritePokemon, removeFavoritePokemon } =
    useFavoritesPokemonActions();
  const isFavorite = useIsFavoritePokemon(pokemon!);

  if (!pokemon) return null;

  const primaryType = pokemon.types[0];
  const hoverClasses =
    typeHoverColors[primaryType] ||
    "hover:border-gray-400/60 hover:shadow-gray-500/20";

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (isFavorite) {
      removeFavoritePokemon(pokemon);
    } else {
      addFavoritePokemon(pokemon);
    }
  };

  return (
    <Link to={`/pokemon/${pokemon.name}`} className="w-full">
      <Card
        className={`group relative backdrop-blur-md bg-white/75 border border-white/30 rounded-2xl p-4 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer ${hoverClasses}`}
      >
        <button
          onClick={handleFavoriteClick}
          className="absolute cursor-pointer top-2 right-2 z-10 p-1 rounded-full hover:bg-black/10 transition-colors duration-200"
          aria-label={
            isFavorite ? "Quitar de favoritos" : "Agregar a favoritos"
          }
        >
          <PokeballIcon isFavorite={isFavorite} size={28} />
        </button>

        <CardHeader className="flex flex-col items-center justify-center p-0 border-0">
          <div className="relative w-40 h-40 mx-auto mb-3 flex items-center justify-center">
            <img
              src={pokemon.image}
              alt={pokemon.name}
              className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
            />
          </div>
          <CardTitle className="text-gray-800 font-bold text-xl capitalize tracking-wider text-center flex items-center justify-center min-h-[2rem]">
            {pokemon.name}
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0 mt-3 flex flex-wrap gap-2 justify-center">
          {pokemon.types.map((type) => (
            <Badge
              key={type}
              className={`text-white text-xs font-medium capitalize border-none ${
                typeColors[type] || "bg-gray-500"
              }`}
            >
              {type}
            </Badge>
          ))}
        </CardContent>
        <CardFooter className="p-0 mt-4 flex justify-center items-center text-gray-600 text-sm">
          <div className="text-center">
            <p className="font-bold">{pokemon.weight} KG</p>
            <p className="text-xs">Peso</p>
          </div>
          <div className="w-px h-8 bg-gray-300 mx-4"></div>
          <div className="text-center">
            <p className="font-bold">{pokemon.height} M</p>
            <p className="text-xs">Altura</p>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}

// Skeleton Card Component
export function PokemonCardSkeleton() {
  return (
    <Card className="relative backdrop-blur-md bg-white/75 border border-white/30 rounded-2xl p-4 shadow-lg">
      <CardHeader className="flex flex-col items-center justify-center p-0 border-0">
        <div className="relative w-40 h-40 mx-auto mb-3 flex items-center justify-center">
          <div className="w-full h-full bg-gray-200 rounded-lg animate-pulse"></div>
        </div>
        <CardTitle className="text-center flex items-center justify-center min-h-[2rem]">
          <div className="h-6 w-24 bg-gray-200 rounded animate-pulse"></div>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0 mt-3 flex flex-wrap gap-2 justify-center">
        <div className="h-5 w-16 bg-gray-200 rounded-full animate-pulse"></div>
        <div className="h-5 w-12 bg-gray-200 rounded-full animate-pulse"></div>
      </CardContent>
      <CardFooter className="p-0 mt-4 flex justify-center items-center">
        <div className="text-center">
          <div className="h-4 w-12 bg-gray-200 rounded animate-pulse mb-1"></div>
          <div className="h-3 w-8 bg-gray-200 rounded animate-pulse"></div>
        </div>
        <div className="w-px h-8 bg-gray-300 mx-4"></div>
        <div className="text-center">
          <div className="h-4 w-12 bg-gray-200 rounded animate-pulse mb-1"></div>
          <div className="h-3 w-8 bg-gray-200 rounded animate-pulse"></div>
        </div>
      </CardFooter>
    </Card>
  );
}
