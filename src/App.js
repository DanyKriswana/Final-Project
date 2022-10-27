import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState, useEffect } from 'react';
import Movie from './Components/Movie';
import Header from './Components/Header';
import SearchBox from './Components/Search';

function App() {
  const [movie, setMovie] = useState([])
  const [searchTitle, setSearchTitle] = useState('')

  const getMovieRequest = async (searchTitle) => {
    const url = `http://www.omdbapi.com/?s=${searchTitle}&apikey=67a0a390`

    const response = await fetch(url)
    const responseJson = await response.json()

    if(responseJson.Search) {
      setMovie(responseJson.Search)
    }
}

  useEffect(() => {
    getMovieRequest(searchTitle);
  }, [searchTitle])

  return (
    <div className='App'>
      <Header heading='HOME' />
      <SearchBox searchTitle={searchTitle} setSearch={setSearchTitle} />
      <div className='content'>
        <Movie movie = {movie}  />
      </div>
    </div>
  );
}

export default App;
