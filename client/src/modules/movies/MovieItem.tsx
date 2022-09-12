import useResponsive from 'hooks/useResponsive'
import React from 'react'
import Movie from './domain/movie.entity'

const MovieItem = ({ movie }: { movie: Movie }) => {
  const matchMd = useResponsive('md')

  const movieHeight = matchMd ? '300px' : '180px'
  return (
    <div>
      <img
        src={movie.posterImage as string}
        alt={movie.title}
        style={{ height: movieHeight }}
      />
    </div>
  )
}

export default MovieItem
