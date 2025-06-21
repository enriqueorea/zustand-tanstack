import { Link, useLocation, Outlet } from "react-router-dom";
import { Home } from "lucide-react";
import PokeballIcon from "./PokeballIcon";
import { pokeballGradients, pokeballEffects } from "../lib/pokeball-colors";

function Navigation() {
  const { pathname } = useLocation();

  const navItems = [
    { href: "/", label: "Home", icon: Home },
    {
      href: "/favorites",
      label: "Favorites",
      icon: () => <PokeballIcon isFavorite={true} size={16} />,
    },
    {
      href: "/pokemons",
      label: "Pokemons",
      icon: () => <PokeballIcon isFavorite={false} size={16} />,
    },
  ];

  return (
    <nav
      className="sticky top-0 z-50 backdrop-blur-md border-b border-red-200/30 shadow-lg"
      style={{
        background: pokeballGradients.navigation,
        boxShadow: pokeballEffects.cardShadow,
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-white to-red-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">P</span>
            </div>
            <span className="text-white font-bold text-xl">PokéDex</span>
          </Link>

          <div className="flex items-center space-x-1">
            {navItems.map((item) => {
              const IconComponent =
                typeof item.icon === "function" ? item.icon : item.icon;
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                    isActive
                      ? "bg-white/20 text-white backdrop-blur-sm"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {typeof item.icon === "function" ? (
                    <IconComponent />
                  ) : (
                    <IconComponent className="w-4 h-4" />
                  )}
                  <span className="hidden sm:inline">{item.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default function MainLayout() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="container mx-auto p-4">
        <Outlet />
      </main>
    </div>
  );
}
