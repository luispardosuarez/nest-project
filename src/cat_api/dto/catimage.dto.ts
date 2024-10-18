import { IsString, IsNumber } from 'class-validator';

export class CatImageDto {
  @IsString()
  id: string;

  @IsString()
  url: string;

  @IsNumber()
  width: number;

  @IsNumber()
  height: number;
}
