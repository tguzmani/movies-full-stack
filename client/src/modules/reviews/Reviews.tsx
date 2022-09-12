import { Typography } from '@mui/material'
import { useStoreState } from 'config/easy-peasy.store'
import React from 'react'
import Movie from './domain/review.entity'
import ReviewItem from './ReviewItem'

const Reviews = () => {
  const { loading, currentMovieReviews: reviews } = useStoreState(
    state => state.reviews
  )

  if (!loading && reviews.length === 0)
    return (
      <Typography variant='h6'>
        No reviews yet. Be the first one to comment!
      </Typography>
    )

  return (
    <div>
      {reviews.map(review => (
        <ReviewItem review={review} />
      ))}
    </div>
  )
}

export default Reviews
