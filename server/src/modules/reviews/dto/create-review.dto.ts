import { IsNotEmpty, IsNumber, Max, Min } from 'class-validator';

export class CreateReviewDto {
  @IsNotEmpty()
  description: string;

  @IsNumber()
  @Max(5)
  @Min(0)
  rating: number;

  @IsNotEmpty()
  movieId: number;
}
