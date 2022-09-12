import { Inject, Injectable, HttpException } from '@nestjs/common';
import { MOVIE_REPOSITORY } from 'src/constants';
import { Repository } from 'typeorm';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesService {
  constructor(
    @Inject(MOVIE_REPOSITORY)
    private movieRepository: Repository<Movie>,
  ) {}

  async create(createMovieDto: CreateMovieDto) {
    return this.movieRepository.save(createMovieDto);
  }

  async findAll() {
    const movies = await this.movieRepository
      .createQueryBuilder('movie')
      .leftJoinAndSelect('movie.reviews', 'review')
      .select([
        'movie.*',
        'avg(review.rating) as rating',
        'count(review.rating) as "totalReviews"',
      ])
      .groupBy('movie.id')
      .getRawMany();

    return movies.map((movie) => ({
      ...movie,
      rating: movie.rating === null ? 0 : parseFloat(movie.rating),
      totalReviews: parseInt(movie.totalReviews),
    }));
  }

  async findById(id: number) {
    return this.movieRepository.findOneBy({ id });
  }

  async update(id: number, updateMovieDto: UpdateMovieDto) {
    return this.movieRepository.update({ id }, updateMovieDto);
  }

  async remove(id: number) {
    return this.movieRepository.delete({ id });
  }
}
