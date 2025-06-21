import { Route, Routes } from "react-router"

function App() {


  return (
    <Routes>
      <Route path="/" element={<div>Home</div>} />
      <Route path="/pokemons" element={<div>Pokemons</div>} />
      <Route path="/favorites" element={<div>Favorites Pokemons</div>} />
      <Route path="/pokemons/:id" element={<div>Pokemon</div>} />
    </Routes>
  )
}

export default App
