import { Paper, Typography } from '@mui/material'
import { Box } from '@mui/system'
import useResponsive from 'hooks/useResponsive'
import useUserHasReviewInMovie from 'modules/reviews/hooks/useUserHasReviewInMovie'
import ManageReview from 'modules/reviews/ManageReview'
import Reviews from 'modules/reviews/Reviews'
import React from 'react'
import Movie from './domain/movie.entity'

const MovieReviews = ({ movie }: { movie?: Movie }) => {
  const matchMd = useResponsive('md')

  const height = matchMd ? '100vh' : '70vh'
  const titleVariant = matchMd ? 'h4' : 'h5'

  const userHasReviewInMovie = useUserHasReviewInMovie(movie?.id)

  return (
    <Paper
      square
      sx={{
        minHeight: `calc(${height} - 64px)`,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
      }}
    >
      <Box p={3}>
        <Typography mb={3} gutterBottom variant={titleVariant}>
          Reviews
        </Typography>

        {!userHasReviewInMovie && <ManageReview movie={movie} />}

        <Reviews />
      </Box>
    </Paper>
  )
}

export default MovieReviews
