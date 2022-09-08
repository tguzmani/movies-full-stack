import { Inject, Injectable } from '@nestjs/common';
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

  async createMovie(createMovieDto: CreateMovieDto) {
    return this.movieRepository.save(createMovieDto);
  }

  async readMovies() {
    return this.movieRepository.find();
  }

  async readMovie(id: number) {
    return this.movieRepository.findOneBy({ id });
  }

  async updateMovie(id: number, updateMovieDto: UpdateMovieDto) {
    return this.movieRepository.update({ id }, updateMovieDto);
  }

  async deleteMovie(id: number) {
    return this.movieRepository.delete({ id });
  }
}
