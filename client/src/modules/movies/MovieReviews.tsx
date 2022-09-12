import { Paper, Typography } from '@mui/material'
import { Box } from '@mui/system'
import useResponsive from 'hooks/useResponsive'
import Reviews from 'modules/reviews/Reviews'
import React from 'react'

const MovieReviews = () => {
  const matchMd = useResponsive('md')

  const height = matchMd ? '100vh' : '70vh'
  const titleVariant = matchMd ? 'h4' : 'h5'

  return (
    <Paper
      square
      sx={{
        minHeight: `calc(${height} - 64px)`,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
      }}
    >
      <Box p={3}>
        <Typography gutterBottom variant={titleVariant}>
          Reviews
        </Typography>

        <Reviews />
      </Box>
    </Paper>
  )
}

export default MovieReviews
