import AxiosRepository from '../../../common/axios.repository'
import Movie from '../domain/movie.entity'

export default class MoviesRepository extends AxiosRepository {
  constructor() {
    super('movies')
  }

  async readMovies(): Promise<Movie[]> {
    return await super.get('/')
  }

  async createMovie(movie: any) {
    return await super.post('/', movie)
  }

  async updateMovie(movie: any) {
    return await super.put(`/${movie.id}`, movie)
  }
}
