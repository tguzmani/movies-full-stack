import { Stack } from '@mui/material'
import React from 'react'
import Movie from './domain/movie.entity'
import MovieItem from './MovieItem'

const Movies = ({ movies }: { movies: Movie[] }) => {
  return (
    <div className='horizontal-scroller'>
      <Stack direction='row' my={3} spacing={3}>
        {movies.map(movie => (
          <MovieItem movie={movie} />
        ))}
      </Stack>
    </div>
  )
}

export default Movies
