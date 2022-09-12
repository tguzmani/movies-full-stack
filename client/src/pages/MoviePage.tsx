import { Box, Grid } from '@mui/material'
import { useStoreActions, useStoreState } from 'config/easy-peasy.store'
import useRead from 'hooks/useRead'
import useMovieById from 'modules/movies/hooks/useMovieById'
import MovieBackground from 'modules/movies/MovieBackground'
import MovieDescription from 'modules/movies/MovieDescription'
import MovieReviews from 'modules/movies/MovieReviews'
import React from 'react'
import { useParams } from 'react-router-dom'

const MoviePage = () => {
  const { movieId } = useParams()
  const { readMovies } = useStoreActions(actions => actions.movies)
  const { readReviewsByMovie } = useStoreActions(actions => actions.reviews)
  const { movies } = useStoreState(state => state.movies)

  useRead(readMovies)

  // @ts-ignore
  const movie = useMovieById(+movieId as number)

  React.useEffect(() => {
    readReviewsByMovie(movie?.id as number)
  }, [movies])

  return (
    <div>
      <MovieBackground movie={movie} />

      <Box sx={{ position: 'relative' }}>
        <Grid container>
          <Grid item xs={12} lg={7}>
            <MovieDescription movie={movie} />
          </Grid>
          <Grid item xs={12} lg={5}>
            <MovieReviews movie={movie} />
          </Grid>
        </Grid>
      </Box>
    </div>
  )
}

export default MoviePage
