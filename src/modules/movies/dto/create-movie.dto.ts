import { IsInt, IsNotEmpty, Min, Max, IsNumber } from 'class-validator';

export class CreateMovieDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  releaseDate: Date;

  @IsNumber()
  @Min(0)
  duration: number;

  @IsNotEmpty()
  genre: string;
}
