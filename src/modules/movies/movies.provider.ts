import { MOVIE_REPOSITORY, DATA_SOURCE } from 'src/constants';
import { DataSource } from 'typeorm';
import { Movie } from './entities/movie.entity';

export const moviesProvider = [
  {
    provide: MOVIE_REPOSITORY,
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Movie),
    inject: [DATA_SOURCE],
  },
];
