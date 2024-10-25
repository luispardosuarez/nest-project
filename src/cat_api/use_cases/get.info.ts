import { Injectable } from '@nestjs/common';
import { CatApiService } from '../cat.api.service';
import { CatImageOutputDto } from '../dto/catimage.output.dto';
import { CatImage } from '../entities/catimage';
import { CatInfoAdapter } from '../adapters/cat.info.adapter';
import { CatImageInputDTO } from '../dto/catimage.input.dto';

@Injectable()
export class GetCatInfo {
  constructor(private readonly catApiService: CatApiService) { }

  async call(input: CatImageInputDTO): Promise<CatImageOutputDto | null> {
    const hasBreeds: boolean = String(input.hasBreeds) === 'true' ? true : false;

    const image: CatImage = await this.catApiService.getImage(hasBreeds);
  
    if (hasBreeds) {
      const breedsInfo = await this.catApiService.getBreed(image.id);
      
      const breedsMaped = this.mapBreeds(image);
      return this.mapOutput(image, breedsInfo);
    }

    return this.mapOutput(image);
  }

  private mapBreeds(image: CatImage) {
    return image.breeds.map(breed => ({
      id: breed.id,
      name: breed.name,
      origin: breed.origin,
      description: breed.description,
    }));
  }

  private mapOutput(image: CatImage, breedsInfo?): CatImageOutputDto {
    return {
      id: image.id,
      url: image.url,
      width: image.width,
      height: image.height,
      breeds: breedsInfo,
    };
  }
}