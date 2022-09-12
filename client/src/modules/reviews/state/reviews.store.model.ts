import { Action, Thunk } from 'easy-peasy'
import Review from '../domain/review.entity'

interface ReviewsStoreModel {
  currentMovieReviews: Review[]
  loading: boolean

  setCurrentMovieReviews: Action<ReviewsStoreModel, Review[]>
  setLoading: Action<ReviewsStoreModel, boolean>

  readReviewsByMovie: Thunk<ReviewsStoreModel, number>
  createReview: Thunk<ReviewsStoreModel, Review>
}

export default ReviewsStoreModel
