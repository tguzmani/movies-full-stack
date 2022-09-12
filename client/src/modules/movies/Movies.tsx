import { Stack } from '@mui/material'
import React from 'react'
import Movie from './domain/movie.entity'
import MovieItem from './MovieItem'

const Movies = ({ movies }: { movies: Movie[] }) => {
  return (
    <Stack direction='row'>
      {movies.map(movie => (
        <MovieItem movie={movie} />
      ))}
    </Stack>
  )
}

export default Movies
