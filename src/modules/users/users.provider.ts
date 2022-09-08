import { User } from './entities/user.entity';
import { USER_REPOSITORY, DATA_SOURCE } from 'src/constants';
import { DataSource } from 'typeorm';

export const usersProvider = [
  {
    provide: USER_REPOSITORY,
    useFactory: (dataSource: DataSource) => dataSource.getRepository(User),
    inject: [DATA_SOURCE],
  },
];
