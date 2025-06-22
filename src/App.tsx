import { Route, Routes } from "react-router";
import MainLayout from "@/components/MainLayout";
import PokemonListPage from "./features/pokemons/pages/PokemonListPage";
import { FavoritesPokemonsPage } from "./features/favorites/pages/FavoritesPokemonsPage";
import PokemonDetailsPage from "./features/pokemon-detail/pages/PokemonDetailsPage";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/pokemons" element={<PokemonListPage />} />
        <Route path="/favorites" element={<FavoritesPokemonsPage />} />
        <Route path="/pokemon/:id" element={<PokemonDetailsPage />} />
      </Route>
    </Routes>
  );
}

export default App;
