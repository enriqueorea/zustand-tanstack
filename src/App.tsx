import { Route, Routes } from "react-router";
import MainLayout from "@/components/MainLayout";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/pokemons" element={<div>Pokemons</div>} />
        <Route path="/favorites" element={<div>Favorites Pokemons</div>} />
        <Route path="/pokemons/:id" element={<div>Pokemon</div>} />
      </Route>
    </Routes>
  );
}

export default App;
