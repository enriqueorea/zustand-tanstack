import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { pokeballGradients, pokeballEffects } from "@/lib/pokeball-colors";
import { Heart, Search, BookOpen, Zap, Shield, Database } from "lucide-react";

export default function HomePage() {
  const features = [
    {
      icon: <Search className="w-6 h-6" />,
      title: "Listado y Búsqueda",
      description: "Navegación paginada con búsqueda por nombre",
      path: "/pokemons",
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Sistema de Favoritos",
      description: "Persistencia local con Zustand",
      path: "/favorites",
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Detalles Completos",
      description: "Ficha detallada de cada Pokémon",
      path: "/pokemons",
    },
  ];

  const technologies = [
    { name: "React 18 + TypeScript", type: "Framework" },
    { name: "React Router v7", type: "Navegación" },
    { name: "Tailwind CSS", type: "Estilos" },
    { name: "Zustand + Persist", type: "Estado Global" },
    { name: "TanStack Query", type: "Data Fetching" },
    { name: "Axios", type: "HTTP Client" },
  ];

  return (
    <div
      className="relative min-h-screen"
      style={{
        background: pokeballGradients.background,
      }}
    >
      {/* Floating orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-20 left-10 w-32 h-32 rounded-full opacity-20 animate-pulse"
          style={{ background: pokeballGradients.navigation }}
        />
        <div
          className="absolute top-40 right-20 w-24 h-24 rounded-full opacity-15 animate-pulse"
          style={{ background: pokeballGradients.navigation }}
        />
        <div
          className="absolute bottom-32 left-1/4 w-40 h-40 rounded-full opacity-10 animate-pulse"
          style={{ background: pokeballGradients.navigation }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto py-12 space-y-12">
        {/* Hero Section */}
        <div className="text-center space-y-6">
          <h1 className="text-5xl font-bold text-white mb-4">
            PokéDex{" "}
            <span className="bg-gradient-to-r from-yellow-300 to-red-400 bg-clip-text text-transparent">
              Proof of Concept
            </span>
          </h1>

          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Una aplicación web moderna que demuestra las ventajas de adoptar
            tecnologías de vanguardia para el desarrollo frontend eficiente y
            escalable.
          </p>
        </div>

        {/* Purpose Card */}
        <Card
          className="backdrop-blur-lg border border-white/30 bg-white/10 p-8"
          style={{ boxShadow: pokeballEffects.cardShadow }}
        >
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-full bg-gradient-to-r from-blue-400 to-purple-500">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-white mb-4">
                Finalidad del Proyecto
              </h2>
              <div className="grid md:grid-cols-2 gap-6 text-white/90">
                <div>
                  <h3 className="font-semibold text-yellow-300 mb-2">
                    🔬 Validar Tecnologías
                  </h3>
                  <p className="text-sm">
                    Demostrar las ventajas de Tailwind, Zustand y TanStack Query
                    frente a soluciones "caseras".
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-green-300 mb-2">
                    ⚡ Mejorar Productividad
                  </h3>
                  <p className="text-sm">
                    Reducir código repetitivo y facilitar la escalabilidad del
                    desarrollo frontend.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-blue-300 mb-2">
                    🏗️ Base Modular
                  </h3>
                  <p className="text-sm">
                    Servir como plantilla para futuros módulos con rutas, stores
                    y hooks estandarizados.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-pink-300 mb-2">
                    💪 Generar Confianza
                  </h3>
                  <p className="text-sm">
                    Probar la ergonomía de estas librerías en un caso real y
                    demostrar un flujo de trabajo claro.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card
              key={feature.title}
              className="backdrop-blur-lg border border-white/30 bg-white/10 p-6 hover:bg-white/20 transition-all duration-300 group cursor-pointer"
              style={{
                boxShadow: pokeballEffects.cardShadow,
                animationDelay: `${index * 200}ms`,
              }}
            >
              <Link to={feature.path} className="block">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-full bg-gradient-to-r from-red-400 to-pink-500 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-white/80 text-sm">{feature.description}</p>
              </Link>
            </Card>
          ))}
        </div>

        {/* Technology Stack */}
        <Card
          className="backdrop-blur-lg border border-white/30 bg-white/10 p-8"
          style={{ boxShadow: pokeballEffects.cardShadow }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 rounded-full bg-gradient-to-r from-green-400 to-blue-500">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-white">Stack Tecnológico</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {technologies.map((tech) => (
              <div key={tech.name} className="text-center">
                <Badge className="mb-2 bg-white/20 text-white border-white/30 hover:bg-white/30 transition-colors">
                  {tech.type}
                </Badge>
                <p className="text-sm text-white/90 font-medium">{tech.name}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* Architecture Principles */}
        <Card
          className="backdrop-blur-lg border border-white/30 bg-white/10 p-8"
          style={{ boxShadow: pokeballEffects.cardShadow }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 rounded-full bg-gradient-to-r from-purple-400 to-indigo-500">
              <Database className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-white">
              Arquitectura Feature-Based
            </h2>
          </div>

          <div className="text-white/90 space-y-4">
            <p>
              El código está organizado por funcionalidades siguiendo principios{" "}
              <strong className="text-yellow-300">SOLID</strong>,
              <strong className="text-green-300"> DRY</strong> y{" "}
              <strong className="text-blue-300">KISS</strong>:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div>
                <h4 className="font-semibold text-red-300 mb-2">
                  📁 Estructura Modular
                </h4>
                <ul className="text-sm space-y-1 text-white/80">
                  <li>
                    • <code>features/</code> - Funcionalidades por módulo
                  </li>
                  <li>
                    • <code>core/</code> - Clientes API y providers globales
                  </li>
                  <li>
                    • <code>components/</code> - Componentes reutilizables
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-300 mb-2">
                  🔧 Ventajas Clave
                </h4>
                <ul className="text-sm space-y-1 text-white/80">
                  <li>• Caching automático con TanStack Query</li>
                  <li>• Persistencia sin esfuerzo con Zustand</li>
                  <li>• Estilos atómicos con Tailwind CSS</li>
                </ul>
              </div>
            </div>
          </div>
        </Card>

        {/* Call to Action */}
        <div className="text-center space-y-6">
          <h2 className="text-3xl font-bold text-white">
            ¡Explora las Funcionalidades!
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/pokemons">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0"
              >
                Ver Lista de Pokémon
              </Button>
            </Link>
            <Link to="/favorites">
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
              >
                Mis Favoritos
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
