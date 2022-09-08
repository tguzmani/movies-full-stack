import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Movie {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  title: string;

  @Column()
  year: number;

  @Column('text', { nullable: true })
  description: string;

  @Column({ nullable: true })
  imageURL: string;

  @Column('int', { default: 0 })
  rating: number;
}
