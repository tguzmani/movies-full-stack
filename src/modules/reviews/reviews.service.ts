import { MoviesService } from './../movies/movies.service';
import { Repository } from 'typeorm';
import { Inject, Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
import reviewsConstants from './reviews.constants';
import { Review } from './entities/review.entity';
import { UsersService } from '../users/users.service';
import { User } from '../users/entities/user.entity';
import { Movie } from '../movies/entities/movie.entity';

@Injectable()
export class ReviewsService {
  constructor(
    @Inject(reviewsConstants.REVIEW_REPOSITORY)
    private reviewsRepository: Repository<Review>,
    private usersService: UsersService,
    private moviesService: MoviesService,
  ) {}

  async create(createReviewDto: CreateReviewDto, userId: number) {
    const user = await this.usersService.findById(userId);
    const movie = await this.moviesService.findById(createReviewDto.movieId);

    if (await this.isReviewAlreadyInMovieByUser(user, movie))
      throw new HttpException(
        'You already have a review for this movie',
        HttpStatus.BAD_REQUEST,
      );

    const review = { ...createReviewDto, user, movie };

    await this.reviewsRepository.save(review);
  }

  async isReviewAlreadyInMovieByUser(user: User, movie: Movie) {
    const review = await this.reviewsRepository
      .createQueryBuilder('review')
      .innerJoinAndSelect('review.movie', 'movie')
      .innerJoinAndSelect('review.user', 'user')
      .where('review.user.id = :userId', { userId: user.id })
      .andWhere('review.movie.id = :movieId', { movieId: movie.id })
      .getOne();

    return review !== null;
  }

  findAll() {
    return this.reviewsRepository.find();
  }

  findOne(id: number) {
    return this.reviewsRepository.findOne({ where: { id } });
  }

  update(id: number, updateReviewDto: UpdateReviewDto) {
    return this.reviewsRepository.update({ id }, updateReviewDto);
  }

  remove(id: number) {
    return this.reviewsRepository.delete({ id });
  }
}
