import { Movie } from 'src/modules/movies/entities/movie.entity';
import { User } from 'src/modules/users/entities/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class Review {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  @Column()
  rating: number;

  @ManyToOne(() => User, (user) => user.reviews)
  user: User;

  @ManyToOne(() => Movie, (movie) => movie.reviews)
  movie: Movie;
}
