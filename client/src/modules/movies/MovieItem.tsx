import { Typography } from '@mui/material'
import useResponsive from 'hooks/useResponsive'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import Movie from './domain/movie.entity'

const cropLongString = (text: string) => {
  const MAX_LENGTH = 25

  if (text.length > MAX_LENGTH) return text.slice(0, MAX_LENGTH).concat('...')

  return text
}

const MovieItem = ({ movie }: { movie?: Movie }) => {
  const matchMd = useResponsive('md')

  const navigate = useNavigate()

  const movieHeight = matchMd ? '300px' : '220px'
  return (
    <div>
      <img
        onClick={() => navigate(`/movie/${movie?.id}`)}
        src={movie?.posterImage as string}
        alt={movie?.title}
        style={{ height: movieHeight, cursor: 'pointer' }}
      />

      <Typography align='center' variant='body2'>
        {cropLongString(movie?.title as string)}
      </Typography>
    </div>
  )
}

export default MovieItem
