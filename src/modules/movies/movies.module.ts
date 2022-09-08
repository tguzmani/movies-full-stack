import { Module } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { MoviesController } from './movies.controller';
import { DatabaseModule } from 'src/modules/app/config/database.module';
import { moviesProvider } from './movies.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [MoviesController],
  providers: [...moviesProvider, MoviesService],
})
export class MoviesModule {}
