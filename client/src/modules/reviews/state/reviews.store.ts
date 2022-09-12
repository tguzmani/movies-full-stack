import { action, thunk } from 'easy-peasy'
import ReviewsRepository from './reviews.repository'
import MoviesStoreModel from './reviews.store.model'

const reviewsRepository = new ReviewsRepository()

const moviesStore: MoviesStoreModel = {
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
}

export default moviesStore
