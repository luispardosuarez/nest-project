import { Injectable } from '@nestjs/common';
import { CatApiService } from '../cat.api.service';
import { CatImageOutputDto } from '../dto/catimage.output.dto';
import { CatImage } from '../entities/catimage';
import { CatImageInputDTO } from '../dto/catimage.input.dto';

@Injectable()
export class GetCatInfo {
  constructor(private readonly catApiService: CatApiService) { }

  async call(input: CatImageInputDTO): Promise<CatImageOutputDto | null> {
    const hasBreeds: boolean = String(input.hasBreeds) === 'true' ? true : false;

    const image: CatImage = await this.catApiService.getImage(hasBreeds);
  
    if (hasBreeds) {
    const breedsInfo = await this.catApiService.getBreed(image.id);
      
    return this.mapOutput(image, [breedsInfo]);
    }

    return this.mapOutput(image);
  }

  private mapOutput(image: CatImage, breedsInfo?: any[]): CatImageOutputDto {
    return {
      id: image.id,
      url: image.url,
      width: image.width,
      height: image.height,
      breeds: breedsInfo,
    };
  }
}
