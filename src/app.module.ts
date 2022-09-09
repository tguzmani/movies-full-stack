import { Module } from '@nestjs/common';
import { MoviesModule } from './modules/movies/movies.module';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [AuthModule, MoviesModule, UsersModule],
})
export class AppModule {}
