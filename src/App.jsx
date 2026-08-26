import { useState, useEffect } from 'react'
import {Header} from "./components/Header"
import {MovieCard} from "./components/MovieCard"
import './App.css'

const FILMES_INICIAIS = [
  {id: 1, titulo: "Interstellar", genero: "Ficção científica", emoji: "🚀", favorito: false },
  {id: 2, titulo: "Batman", genero: "Super-herói", emoji: "🦇", favorito: false },
  {id: 3, titulo: "Detona Ralph", genero: "Animação", emoji: "🎮", favorito: false },
  {id: 4, titulo: "Titanic", genero: "Drama", emoji: "🚢", favorito: false }
]

function App(){
  return(
    <>
    <h1>Tiririca, pior que tá, não fica!</h1>
    </>
  )
}

export default App
