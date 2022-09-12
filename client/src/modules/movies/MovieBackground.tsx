import { Paper } from '@mui/material'
import useResponsive from 'hooks/useResponsive'
import React from 'react'
import Movie from './domain/movie.entity'

const MovieBackground = ({ movie }: { movie?: Movie }) => {
  const matchMd = useResponsive('md')

  const height = matchMd ? '100vh' : '70vh'

  return (
    <Paper
      square
      sx={{
        position: 'absolute',
        backgroundImage: `url(${movie?.backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: `calc(${height} - 64px )`,
        width: '100%',
        filter: 'brightness(60%)',
      }}
    ></Paper>
  )
}

export default MovieBackground
