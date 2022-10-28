import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';
import Movie from './Components/Movie';
import Header from './Components/Header';
import SearchBox from './Components/Search';

function App() {
  const [movie, setMovie] = useState([
    {
      Title: "The Shawshank Redemption",
      Year: "1994",
      imdbID: "tt0111161",
      Type: "movie",
      Poster: "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
    },
    {
      Title: "Fight Club",
      Year: "1999",
      imdbID: "tt0137523",
      Type: "movie",
      Poster: "https://m.media-amazon.com/images/M/MV5BNDIzNDU0YzEtYzE5Ni00ZjlkLTk5ZjgtNjM3NWE4YzA3Nzk3XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg"
    },
    {
      Title: "Guardians of the Galaxy",
      Year: "2014",
      imdbID: "tt2015381",
      Type: "movie",
      Poster: "https://m.media-amazon.com/images/M/MV5BZTkwZjU3MTctMGExMi00YjU5LTgwMDMtOWNkZDRlZjQ4NmZhXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_SX300.jpg"
    },
    {
        Title: "Guardians of the Galaxy Vol. 2",
        Year: "2017",
        imdbID: "tt3896198",
        Type: "movie",
        Poster: "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg"
    },
    {
      Title: "Life of Pi",
      Year: "2012",
      imdbID: "tt0454876",
      Type: "movie",
      Poster: "https://m.media-amazon.com/images/M/MV5BNTg2OTY2ODg5OF5BMl5BanBnXkFtZTcwODM5MTYxOA@@._V1_SX300.jpg"
    },
    {
      Title: "Knives Out",
      Year: "2019",
      imdbID: "tt8946378",
      Type: "movie",
      Poster: "https://m.media-amazon.com/images/M/MV5BMGUwZjliMTAtNzAxZi00MWNiLWE2NzgtZGUxMGQxZjhhNDRiXkEyXkFqcGdeQXVyNjU1NzU3MzE@._V1_SX300.jpg"
  },
    {
      Title: "Everything Everywhere All at Once",
      Year: "2022",
      imdbID: "tt6710474",
      Type: "movie",
      Poster: "https://m.media-amazon.com/images/M/MV5BYTdiOTIyZTQtNmQ1OS00NjZlLWIyMTgtYzk5Y2M3ZDVmMDk1XkEyXkFqcGdeQXVyMTAzMDg4NzU0._V1_SX300.jpg"
    },
  ])
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
