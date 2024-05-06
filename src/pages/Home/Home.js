import {useEffect, useState} from "react"
import api from "../../services/api"
import {Link} from 'react-router-dom'

import './Home.css'

export default function Home() {

  const [movie, setMovie] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {

    async function loadMovies(){
      const response = await api.get("movie/now_playing", {
        params: {
          api_key:'d73735a13aae1e701a922f594bad9160',
          language: "pt-BR",
          page:1,
        }
      })

      setMovie(response.data.results.slice(0,10))
      setLoading(false);
    }
    
    loadMovies()
  },[])

  if(loading) {
    return (
      <div className="">
        <h2>Carregando filmes..</h2>
      </div>
    )
  }

  return (
    <div className="container">
      <div className="list-movie">
        {movie.map((filme) => {
          return (
            <article key={filme.id}>
                <strong >{filme.title}</strong>
                <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title}/>
                 <Link to={`/filme/${filme.id}`}>Acessar</Link>
            </article>
          )
        })}
      </div>
    </div>
  )
}