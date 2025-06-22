import { useState } from "react";
import { PokemonCard, PokemonCardSkeleton } from "./PokemonCard";
import { PokemonListPagination } from "./PokemonListPagination";
import { PokemonListSearchBar } from "./PokemonListSearchBar";
import { usePokemons } from "../hooks/usePokemons";

export function PokemonList() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const offset = (currentPage - 1) * itemsPerPage;

  const {
    pokemons,
    isLoading,
    error,
    isFetching,
    totalCount,
    hasNextPage,
    hasPreviousPage,
  } = usePokemons({
    limit: itemsPerPage,
    offset,
  });

  const totalPages = Math.ceil(totalCount / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    if (hasNextPage) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handleLimitChange = (newLimit: number) => {
    setItemsPerPage(newLimit);
    setCurrentPage(1); // Reset to first page when changing limit
  };

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="backdrop-blur-md bg-white/20 rounded-2xl p-8 border border-red-200/30 shadow-xl">
            <p className="text-red-600 text-center font-medium">
              Error: {error.message}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <PokemonListSearchBar />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mb-8">
        {isLoading
          ? Array.from({ length: itemsPerPage }).map((_, index) => (
              <PokemonCardSkeleton key={index} />
            ))
          : pokemons.map(
              (pokemon) =>
                pokemon && <PokemonCard key={pokemon?.id} pokemon={pokemon} />
            )}
      </div>

      {isFetching && !isLoading && (
        <div className="flex justify-center mb-4">
          <span className="text-gray-600">Cargando más pokémones...</span>
        </div>
      )}

      <div className="mt-8">
        <PokemonListPagination
          currentPage={currentPage}
          totalPages={totalPages}
          hasNextPage={hasNextPage}
          hasPreviousPage={hasPreviousPage}
          onPageChange={handlePageChange}
          onPreviousPage={handlePreviousPage}
          onNextPage={handleNextPage}
          limit={itemsPerPage}
          onLimitChange={handleLimitChange}
        />
      </div>
    </div>
  );
}
