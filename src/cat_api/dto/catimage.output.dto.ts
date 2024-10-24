import { IsString, IsNumber, IsOptional } from 'class-validator';

export class CatImageOutputDto {
  @IsString()
  id: string;

  @IsString()
  url: string;

  @IsNumber()
  width: number;

  @IsNumber()
  height: number;

  @IsOptional()
  breeds?: string[];

  @IsOptional()
  name?: string;

  @IsOptional()
  origin?: string;

  @IsOptional()
  description?: string;
}
