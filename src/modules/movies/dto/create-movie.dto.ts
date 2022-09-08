import { IsInt, IsNotEmpty, Min, Max } from 'class-validator';

export class CreateMovieDto {
  @IsNotEmpty()
  title: string;

  @IsInt()
  @Min(1888)
  year: number;

  @IsInt()
  @Min(0)
  @Max(5)
  rating: number;
}
