import { Rating, Typography } from '@mui/material'
import React from 'react'
import Movie from './domain/movie.entity'

const MovieRating = ({ movie }: { movie?: Movie }) => {
  if (movie?.rating === 0)
    return <Typography variant='body2'>No ratings</Typography>

  return <Rating value={movie?.rating} readOnly />
}

export default MovieRating
