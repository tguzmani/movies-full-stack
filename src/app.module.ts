import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MoviesModule } from './modules/movies/movies.module';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { AuthController } from './modules/auth/auth.controller';
import globalConfig from './modules/app/config/global.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [globalConfig],
    }),
    MoviesModule,
    UsersModule,
    AuthModule,
  ],
  // controllers: [AuthController],
})
export class AppModule {}
