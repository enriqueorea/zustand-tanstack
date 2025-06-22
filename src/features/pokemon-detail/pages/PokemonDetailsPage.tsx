import PokemonDetail from "../components/PokemonDetail";
import { useParams, Link } from "react-router-dom";
import { usePokemon } from "../hooks/usePokemon";
import { ArrowLeft, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const PokemonDetailsPage = () => {
  const { id } = useParams();
  const { data: pokemon, isLoading, error } = usePokemon(id!);

  if (isLoading) {
    return (
      <div className="relative min-h-[60vh]">
        {/* Decorative background */}
        <div className="absolute inset-0 pointer-events-none -z-10">
          <div className="absolute top-10 right-10 w-20 h-20 bg-purple-200/20 backdrop-blur-xl border border-purple-300/30 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 left-10 w-16 h-16 bg-blue-200/20 backdrop-blur-xl border border-blue-300/30 rounded-full animate-pulse"></div>
        </div>

        <div className="flex flex-col items-center justify-center py-20">
          <div className="bg-white/20 backdrop-blur-xl border border-white/30 rounded-3xl p-12 shadow-xl">
            <div className="flex flex-col items-center gap-6">
              {/* Loading spinner */}
              <div className="w-16 h-16 border-4 border-purple-200/30 border-t-purple-500 rounded-full animate-spin"></div>

              <div className="text-center">
                <h2 className="text-xl font-bold text-gray-800 mb-2">
                  Cargando Pokémon...
                </h2>
                <p className="text-gray-600">Obteniendo datos de la Pokédex</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="relative min-h-[60vh]">
        {/* Decorative background */}
        <div className="absolute inset-0 pointer-events-none -z-10">
          <div className="absolute top-10 right-10 w-20 h-20 bg-red-200/20 backdrop-blur-xl border border-red-300/30 rounded-full"></div>
          <div className="absolute bottom-20 left-10 w-16 h-16 bg-orange-200/20 backdrop-blur-xl border border-orange-300/30 rounded-full"></div>
        </div>

        <div className="flex flex-col items-center justify-center py-20">
          <div className="bg-white/20 backdrop-blur-xl border border-white/30 rounded-3xl p-12 shadow-xl max-w-md text-center">
            <div className="flex flex-col items-center gap-6">
              {/* Error icon */}
              <div className="w-16 h-16 bg-red-100/50 backdrop-blur-lg border border-red-200/60 rounded-full flex items-center justify-center">
                <AlertCircle className="w-8 h-8 text-red-500" />
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-2">
                  ¡Pokémon no encontrado!
                </h2>
                <p className="text-gray-600 mb-6">
                  No pudimos cargar la información de este Pokémon. Verifica que
                  el ID o nombre sea correcto.
                </p>

                <Link to="/">
                  <Button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white rounded-full px-6 py-2">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Volver al inicio
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!pokemon) return null;

  return <PokemonDetail pokemon={pokemon} />;
};

export default PokemonDetailsPage;
