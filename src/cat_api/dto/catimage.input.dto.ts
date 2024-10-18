import { IsBoolean, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CatImageInputDTO {
  @ApiProperty({
    description: 'Only return images with breed data.',
    required: false,
    default: true,
  })
  @IsOptional()
  @IsBoolean()
  hasBreeds?: boolean;
}
