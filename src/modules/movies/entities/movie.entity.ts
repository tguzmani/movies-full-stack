import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

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

  @Column('int', { default: 0 })
  rating: number;

  @Column('int', { default: 0 })
  durationMinutes: number;

  @Column()
  genre: string;
}
