import { useStoreState } from 'config/easy-peasy.store'
import React from 'react'
import Movie from './domain/review.entity'
import ReviewItem from './ReviewItem'

const Reviews = () => {
  const { currentMovieReviews: reviews } = useStoreState(state => state.reviews)

  return (
    <div>
      {reviews.map(review => (
        <ReviewItem review={review} />
      ))}
    </div>
  )
}

export default Reviews
