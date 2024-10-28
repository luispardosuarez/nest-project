import { IsBoolean, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';

export class CatImageInputDTO {
  @ApiProperty({
    description: 'Only return images with breed data.',
    required: false,
    default: true,
  })
  
  @IsOptional()
  @IsBoolean()
  @Transform(({ value }) => value === 'true' || value === true)
  hasBreeds?: boolean;
}
