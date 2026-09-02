import { useState, useEffect, useCallback } from "react";
import { Header } from "./components/Header";
import { MovieCard } from "./components/MovieCard";
import "./App.css";
import Formulario from "./components/Formulario";
import Listagem from "./components/Listagem";

const FILMES_INICIAIS = [
  { id: 1, titulo: "Interstellar", genero: "Ficção Científica", emoji: "🚀", favorito: false },
  { id: 2, titulo: "The Batman", genero: "Ação / Policial", emoji: "🦇", favorito: false },
  { id: 3, titulo: "Spider-Man", genero: "Animação / Ação", emoji: "🕷️", favorito: false },
  { id: 4, titulo: "Stranger Things", genero: "Série / Terror", emoji: "👾", favorito: false },
];

export function App() {
  const [tema, setTema] = useState("dark");
  const [filmes, setFilmes] = useState(FILMES_INICIAIS);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", tema);
  }, [tema]);

  const toggleTema = () => {
    setTema((temaAtual) => (temaAtual === "light" ? "dark" : "light"));
  };

  const toggleFavorito = (id) => {
    setFilmes((filmesAtuais) =>
      filmesAtuais.map((filme) =>
        filme.id === id ? { ...filme, favorito: !filme.favorito } : filme
      )
    );
  };

  const totalFavoritos = filmes.filter((f) => f.favorito).length;

  return (
    <div>
      <Header tema={tema} toggleTema={toggleTema} />

      <main className="container">
        <div className="sub-header">
          <h2>Catálogo de Destaques</h2>
          <p>Favoritos selecionados: <strong>{totalFavoritos}</strong></p>
        </div>

        <div className="movies-grid">
          {filmes.map((filme) => (
            <MovieCard
              key={filme.id}
              filme={filme}
              onToggleFavorito={toggleFavorito}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;