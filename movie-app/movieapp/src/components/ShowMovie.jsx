import React, { useEffect } from 'react'
import { useState } from 'react'


const API_URL = 'http://www.omdbapi.com/?apikey=4a98c271'

const ShowMovie = () => {
  
  const [moviedata, setMovieData] = useState([]);

  const serachMovies = async (title) => {
    const movies = await (await fetch(`${API_URL}&s="${title}"`)).json()

    setMovieData(movies.Search)
  }


  useEffect(() => {
    serachMovies('superman');
  }, [])


  return (
    <div>
      <h1>Search Movies & Series</h1>
      <input 
        placeholder='Search Movies and Series'
        onChange={(e) => serachMovies(e.target.value)}
      />

      <div>
        {
            moviedata && moviedata.map((movie) => {
                return (
                    <div>
                        <img src={movie.Poster} />
                        <h2>{movie.Title}</h2>
                        <h4>{movie.Year}</h4>
                    </div>
                )
            })
        }
      </div>
    </div>
  )
}

export default ShowMovie
