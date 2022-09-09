import { IsInt, IsNotEmpty, Min, Max, IsNumber } from 'class-validator';

export class CreateMovieDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  releaseDate: Date;

  @IsInt()
  @Max(5)
  @Min(0)
  rating: number;

  @IsNumber()
  @Min(0)
  durationMinutes: number;

  @IsNotEmpty()
  genre: string;
}
