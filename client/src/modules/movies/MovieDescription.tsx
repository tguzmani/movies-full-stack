import { Box, Grid, Rating, Stack, Typography } from '@mui/material'
import useResponsive from 'hooks/useResponsive'
import React from 'react'
import Movie from './domain/movie.entity'
import MovieRating from './MovieRating'

const MovieDescription = ({ movie }: { movie?: Movie }) => {
  const matchMd = useResponsive('md')

  const titleSize = matchMd ? '200px' : '90px'
  return (
    <Box m={3}>
      <Grid container>
        <Grid item xs={12}>
          <img
            src={movie?.titleImage as string}
            alt={movie?.title}
            style={{ maxHeight: titleSize }}
          />
        </Grid>

        <Grid item xs={12}>
          <MovieRating movie={movie} />
          <Box sx={{ maxWidth: '60%' }} my={3}>
            <Typography variant='body1'>{movie?.description}</Typography>
          </Box>
          <Stack spacing={3} alignItems='center' direction='row'>
            <Typography variant='h6'>{movie?.genre}</Typography>
            <Typography variant='h6'>{movie?.duration}</Typography>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  )
}

export default MovieDescription
