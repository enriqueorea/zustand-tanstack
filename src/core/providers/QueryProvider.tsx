import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      networkMode: "always", // Significa que se va a hacer una nueva petición cuando la red esté disponible
      refetchOnWindowFocus: false, // Significa que no se va a refetch cuando se vuelva a enfocar la ventana
      retry: false, // Significa que no se va a reintentar la petición si falla
      staleTime: 1000 * 60 * 5, // 5 minutes
    },
    mutations: {
      retry: false, // Significa que no se va a reintentar la mutación si falla
      networkMode: "always", // Significa que se va a hacer una nueva mutación cuando la red esté disponible
    },
  },
});

export const QueryProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
