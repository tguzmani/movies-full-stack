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
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        entities: [
          join(__dirname, '..', '..', '**', 'entities', '*.entity.js'),
        ],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];
