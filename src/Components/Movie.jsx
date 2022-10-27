import React from 'react'

function Movie(props) {

  return (
    <>
        {props.movie.map((movie) =>  (
            <div key={movie.imdbID} className='movieBox'>
                <img src={movie.Poster} alt="movie" />
                <div className='movie-card'>
                    <h3 className='card-year'>{movie.Year}</h3>
                    <p className='card-title'>{movie.Title}</p>
                    <hr/>
                </div>
            </div>
        ))}
    </>
  )
}

export default Movie