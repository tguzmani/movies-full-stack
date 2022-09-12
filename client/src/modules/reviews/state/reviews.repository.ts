import AxiosRepository from '../../../common/axios.repository'
import Review from '../domain/review.entity'

export default class ReviewsRepository extends AxiosRepository {
  constructor() {
    super('Reviews')
  }

  async readReviews(): Promise<Review[]> {
    return await super.get('/')
  }

  async readReviewsByMovie(movieId: number): Promise<any> {
    return await super.get(`/by-movie/${movieId}`)
  }
}
