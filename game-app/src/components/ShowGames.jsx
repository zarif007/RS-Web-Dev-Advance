import React, { useState } from 'react'
import { useEffect } from 'react';

const ShowGames = () => {
  
  const [allGames, setAllGames] = useState([]);
  const getGames = async (gameName) => {
    const games = await (await fetch(`https://api.rawg.io/api/games?search=${gameName}&key=29b8564f44d7476c88ad2aedb1eaac91`)).json()
    console.log(games.results);
    setAllGames(games.results);
  }
  useEffect(() => {
    getGames('');
  }, [])
  return (
    <div>
      <input onChange={(e) => getGames(e.target.value)} placeholder="Search Game" />
      {
        allGames.map(game => {
          return (
            <div>
              <img src={game.background_image} style={{ width: '400px' }} />
              <h1>Name: {game.name}</h1>
              <h3>Rating: {game.rating}</h3>
            </div>
          )
        })
      }
    </div>
  )
}

export default ShowGames
