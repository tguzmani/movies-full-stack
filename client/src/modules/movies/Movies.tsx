import { Stack, Typography } from '@mui/material'
import React from 'react'
import Movie from './domain/movie.entity'
import MovieItem from './MovieItem'

const Movies = ({ movies }: { movies: Movie[] }) => {
  if (movies.length === 0)
    return (
      <Typography my={3} variant='body2'>
        No movies...
      </Typography>
    )
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
