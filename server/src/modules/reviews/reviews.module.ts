import { AuthModule } from './../auth/auth.module';
import { UsersModule } from './../users/users.module';
import { DatabaseModule } from 'src/modules/app/config/database.module';
import { Module } from '@nestjs/common';
import { ReviewsService } from './reviews.service';
import { ReviewsController } from './reviews.controller';
import { reviewsProvider } from './reviews.provider';
import { MoviesModule } from '../movies/movies.module';

@Module({
  imports: [DatabaseModule, UsersModule, MoviesModule, AuthModule],
  controllers: [ReviewsController],
  providers: [...reviewsProvider, ReviewsService],
})
export class ReviewsModule {}
