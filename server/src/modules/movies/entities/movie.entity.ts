import { Review } from 'src/modules/reviews/entities/review.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Movie {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  title: string;

  @Column()
  releaseDate: Date;

  @Column('text', { nullable: true })
  description: string;

  @Column({ nullable: true })
  posterImage: string;

  @Column({ nullable: true })
  backgroundImage: string;

  @Column({ nullable: true })
  titleImage: string;

  @Column('int', { default: 0 })
  duration: number;

  @Column()
  genre: string;

  @OneToMany(() => Review, (review) => review.movie)
  reviews: Review[];
}
