import { join } from 'path';
import { DATA_SOURCE } from 'src/constants';
import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: DATA_SOURCE,
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'gh1290yu',
        database: 'movies',
        entities: [
          join(__dirname, '..', '..', '**', 'entities', '*.entity.js'),
        ],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];
