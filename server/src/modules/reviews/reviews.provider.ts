import { DATA_SOURCE } from 'src/constants';
import { DataSource } from 'typeorm';
import { Review } from './entities/review.entity';
import reviewsConstants from './reviews.constants';

export const reviewsProvider = [
  {
    provide: reviewsConstants.REVIEW_REPOSITORY,
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Review),
    inject: [DATA_SOURCE],
  },
];
