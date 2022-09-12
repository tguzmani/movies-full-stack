import { Avatar, Grid, Rating, Typography, useTheme } from '@mui/material'
import useResponsive from 'hooks/useResponsive'
import React from 'react'
import Review from './domain/review.entity'

const ReviewItem = ({ review }: { review?: Review }) => {
  const theme = useTheme()

  const matchMd = useResponsive('md')

  return (
    <Grid container spacing={2} mb={5}>
      <Grid item xs={matchMd ? 1 : 2}>
        <Avatar sx={{ bgcolor: theme.palette.primary.main }}>
          {review?.user?.firstName?.charAt(0)}
        </Avatar>
      </Grid>

      <Grid item xs={matchMd ? 11 : 10}>
        <Typography gutterBottom variant='h6'>
          {review?.user?.firstName} {review?.user?.lastName}{' '}
        </Typography>
        <Typography mb={2} gutterBottom variant='body1'>
          {review?.description}
        </Typography>

        <Rating value={review?.rating} readOnly />
      </Grid>
    </Grid>
  )
}

export default ReviewItem
