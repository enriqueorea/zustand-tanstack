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
    { name: "React 18 + TypeScript", type: "Framework", asset: "react.svg" },
    { name: "React Router v7", type: "Navegación", asset: "react-router.png" },
    { name: "Tailwind CSS", type: "Estilos", asset: "tailwind.ico" },
    { name: "Zustand + Persist", type: "Estado Global", asset: "zustand.ico" },
    {
      name: "TanStack Query",
      type: "Data Fetching",
      asset: "react-query.ico",
    },
    { name: "Axios", type: "HTTP Client", asset: "axios.ico" },
  ];

  return (
    <div
      className="relative"
      style={{
        background: pokeballGradients.background,
        minHeight: "calc(100vh - 64px)", // Resta la altura del nav
      }}
    >
      {/* Floating orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-20 left-10 w-32 h-32 rounded-full opacity-10 animate-pulse"
          style={{ background: pokeballGradients.navigation }}
        />
        <div
          className="absolute top-40 right-20 w-24 h-24 rounded-full opacity-8 animate-pulse"
          style={{ background: pokeballGradients.navigation }}
        />
        <div
          className="absolute bottom-32 left-1/4 w-40 h-40 rounded-full opacity-6 animate-pulse"
          style={{ background: pokeballGradients.navigation }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto py-12 space-y-12">
        {/* Hero Section */}
        <div className="text-center space-y-6">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            PokéDex{" "}
            <span className="bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">
              Proof of Concept
            </span>
          </h1>

          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Una aplicación web moderna que demuestra las ventajas de adoptar
            tecnologías de vanguardia para el desarrollo frontend eficiente y
            escalable.
          </p>
        </div>

        {/* Purpose Card */}
        <Card
          className="backdrop-blur-lg border border-gray-300/40 bg-white/70 p-8"
          style={{ boxShadow: pokeballEffects.cardShadow }}
        >
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Finalidad del Proyecto
              </h2>
              <div className="grid md:grid-cols-2 gap-6 text-gray-700">
                <div>
                  <h3 className="font-semibold text-yellow-600 mb-2">
                    🔬 Validar Tecnologías
                  </h3>
                  <p className="text-sm">
                    Demostrar las ventajas de Tailwind, Zustand y TanStack Query
                    frente a soluciones "caseras".
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-green-600 mb-2">
                    ⚡ Mejorar Productividad
                  </h3>
                  <p className="text-sm">
                    Reducir código repetitivo y facilitar la escalabilidad del
                    desarrollo frontend.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-blue-600 mb-2">
                    🏗️ Base Modular
                  </h3>
                  <p className="text-sm">
                    Servir como plantilla para futuros módulos con rutas, stores
                    y hooks estandarizados.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-pink-600 mb-2">
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
              className="backdrop-blur-lg border border-gray-300/40 bg-white/70 p-6 hover:bg-white/80 transition-all duration-300 group cursor-pointer"
              style={{
                boxShadow: pokeballEffects.cardShadow,
                animationDelay: `${index * 200}ms`,
              }}
            >
              <Link to={feature.path} className="block">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-full bg-gradient-to-r from-red-500 to-pink-600 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-gray-700 text-sm">{feature.description}</p>
              </Link>
            </Card>
          ))}
        </div>

        {/* Technology Stack */}
        <Card
          className="backdrop-blur-lg border border-gray-300/40 bg-white/70 p-8"
          style={{ boxShadow: pokeballEffects.cardShadow }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 rounded-full bg-gradient-to-r from-green-500 to-blue-600">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">
              Stack Tecnológico
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {technologies.map((tech) => (
              <div key={tech.name} className="text-center">
                <img
                  src={`/src/assets/${tech.asset}`}
                  alt={tech.name}
                  className="w-16 h-16 mx-auto mb-2"
                />
                <Badge className="mb-2 bg-gray-200/70 text-gray-800 border-gray-300/50 hover:bg-gray-300/70 transition-colors">
                  {tech.type}
                </Badge>
                <p className="text-sm text-gray-700 font-medium">{tech.name}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* Architecture Principles */}
        <Card
          className="backdrop-blur-lg border border-gray-300/40 bg-white/70 p-8"
          style={{ boxShadow: pokeballEffects.cardShadow }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 rounded-full bg-gradient-to-r from-purple-500 to-indigo-600">
              <Database className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">
              Arquitectura Feature-Based
            </h2>
          </div>

          <div className="text-gray-700 space-y-4">
            <p>
              El código está organizado por funcionalidades siguiendo principios{" "}
              <strong className="text-yellow-600">SOLID</strong>,
              <strong className="text-green-600"> DRY</strong> y{" "}
              <strong className="text-blue-600">KISS</strong>:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div>
                <h4 className="font-semibold text-red-600 mb-2">
                  📁 Estructura Modular
                </h4>
                <ul className="text-sm space-y-1 text-gray-600">
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
                <h4 className="font-semibold text-blue-600 mb-2">
                  🔧 Ventajas Clave
                </h4>
                <ul className="text-sm space-y-1 text-gray-600">
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
          <h2 className="text-3xl font-bold text-gray-800">
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
                className="border-gray-400 text-gray-700 hover:bg-gray-200/50 backdrop-blur-sm"
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
