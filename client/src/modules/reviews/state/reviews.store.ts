import { action, thunk } from 'easy-peasy'
import Review from '../domain/review.entity'
import ReviewsRepository from './reviews.repository'
import ReviewsStoreModel from './reviews.store.model'

const reviewsRepository = new ReviewsRepository()

const reviewsStore: ReviewsStoreModel = {
  currentMovieReviews: [],
  loading: false,

  // Actions
  setCurrentMovieReviews: action((state, reviews) => {
    state.currentMovieReviews = reviews
    state.loading = false
  }),

  setLoading: action((state, loading) => {
    state.loading = loading
  }),

  // Thunks
  readReviewsByMovie: thunk(async (actions, movieId) => {
    actions.setLoading(true)

    const reviews = await reviewsRepository.readReviewsByMovie(movieId)

    actions.setCurrentMovieReviews(reviews)

    actions.setLoading(false)
  }),

  createReview: thunk(async (actions, review: Review) => {
    actions.setLoading(true)

    await reviewsRepository.createReview(review)

    actions.setLoading(false)

    actions.readReviewsByMovie(review?.movieId as number)
  }),
}

export default reviewsStore
