import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export function PokemonListSearchBar() {
  return (
    <div className="relative w-full max-w-md mx-auto">
      <Search className="absolute left-2.5 top-2.5 h-4 w-4 pointer-events-none opacity-50 text-black" />
      <Input
        type="search"
        placeholder="Search Pokemon..."
        className="w-full rounded-2xl border border-white/30 bg-white/60 py-4 pl-10 pr-4 text-gray-800 placeholder:text-gray-500 backdrop-blur-md shadow-lg transition-all duration-300 focus:border-red-300 focus:ring-2 focus:ring-red-400/50"
      />
    </div>
  );
}
