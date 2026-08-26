export function MovieCard({filme, onToggleFavorito}){
    return(
        <div className="movie-card">
            <div className="poster-box"> {filme.emoji} </div>
            <div>
                <h3 className="movie-title"> {filme.titulo} </h3>
                <p className="movie-genero"> {filme.genero} </p>
            </div>
            <button className={`btn-favorite ${filme.favorito ? "favorited": ""}`}
            onClick={() => onToggleFavorito(filme.id)}
        >
            {filme.favorito ? "❤️ Favoritado": "💔 Favoritar"}

            </button>
        </div>
    )
}