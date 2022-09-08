import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MoviesModule } from './modules/movies/movies.module';
import globalConfig from './modules/app/config/global.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [globalConfig],
    }),
    MoviesModule,
  ],
})
export class AppModule {}
