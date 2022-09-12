import User from 'modules/auth/domain/user.entity'
import Movie from 'modules/movies/domain/movie.entity'

interface Review {
  id?: number
  description: string
  rating: number
  user?: Partial<User>
  movie?: Partial<Movie>
  movieId?: number
}

export default Review
