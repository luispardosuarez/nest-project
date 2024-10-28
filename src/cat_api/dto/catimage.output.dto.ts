import { ApiProperty } from '@nestjs/swagger';
export class CatImageOutputDto {
  @ApiProperty()
  id?: string;

  @ApiProperty()
  url: string;

  @ApiProperty()
  width: number;

  @ApiProperty()
  height: number;

  @ApiProperty()
  breeds?: string[];

  @ApiProperty()
  name?: string;

  @ApiProperty()
  origin?: string;

  @ApiProperty()
  description?: string;
}
