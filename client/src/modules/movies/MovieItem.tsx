import useResponsive from 'hooks/useResponsive'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import Movie from './domain/movie.entity'

const MovieItem = ({ movie }: { movie?: Movie }) => {
  const matchMd = useResponsive('md')

  const navigate = useNavigate()

  const movieHeight = matchMd ? '300px' : '180px'
  return (
    <div>
      <img
        onClick={() => navigate(`/movie/${movie?.id}`)}
        src={movie?.posterImage as string}
        alt={movie?.title}
        style={{ height: movieHeight, cursor: 'pointer' }}
      />
    </div>
  )
}

export default MovieItem
