import { DatabaseModule } from 'src/modules/app/config/database.module';
import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { usersProvider } from './users.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [UsersController],
  providers: [...usersProvider, UsersService],
  exports: [UsersService],
})
export class UsersModule {}
