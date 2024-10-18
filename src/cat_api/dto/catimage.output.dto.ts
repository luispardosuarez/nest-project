import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber } from 'class-validator';

export class CatImageOutputDto {
  @IsString()
  @ApiProperty({ name: 'id' })
  id: string;

  @IsString()
  url: string;

  @IsNumber()
  width: number;

  @IsNumber()
  height: number;
}
