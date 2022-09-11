import React from 'react'
import Movie from './domain/movie.entity'

const Movies = ({ movies }: { movies: Movie[] }) => {
  return <div>{JSON.stringify(movies)}</div>
}

export default Movies
