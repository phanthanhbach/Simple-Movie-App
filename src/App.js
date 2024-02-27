import React, { useEffect, useState } from 'react';
import { searchMovies } from './API/APIcalls';
import MovieCard from './MovieCard';

import './App.css';
import SearchIcon from './search.svg'
//00002c1315abdda70d4477e8e2b88c82

const App = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');

  const searchMoviesFunction = async (title) => {
    const response = await fetch(searchMovies(title));
    const data = await response.json();

    setMovies(data.results);
    console.log(data.results);
  }

  useEffect(() => {
    searchMoviesFunction('The Matrix');
  }, []);

  return (
    <div className="app">
      <h1>Watching Lite</h1>

      <div className="search">
        <input placeholder="Search for movies" value={search} onChange={(item) => setSearch(item.target.value)} />
        <img
          src={SearchIcon}
          alt='Search'
          onClick={() => searchMoviesFunction(search)}
        />
      </div>

      {movies?.length > 0
        ? (
          <div className='container'>
            {movies.map((movie, index) => (
              <MovieCard key={index} movie={movie} />
            ))}
          </div>
        ) : (
          <div>
            <h2>No movies found</h2>
          </div>
        )
      }


    </div>
  );
}

export default App;
