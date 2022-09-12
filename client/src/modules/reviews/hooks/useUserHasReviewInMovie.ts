import { useStoreState } from 'config/easy-peasy.store'
import Review from '../domain/review.entity'

const useUserHasReviewInMovie = (movieId?: number) => {
  const { currentMovieReviews } = useStoreState(state => state.reviews)
  const { user } = useStoreState(state => state.auth)

  const review = currentMovieReviews.find(
    (review: Review) =>
      review?.user?.id === user?.id && review?.movie?.id === movieId
  )

  console.log(review)

  return review !== undefined
}

export default useUserHasReviewInMovie
