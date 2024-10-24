import { Injectable } from '@nestjs/common';
import { CatApiService } from '../cat.api.service';
import { CatImageInputDTO } from '../dto/catimage.input.dto';
import { CatImageOutputDto } from '../dto/catimage.output.dto';
import { CatImage } from '../entities/catimage';

@Injectable()
export class GetCatInfo {
  constructor(private readonly catApiService: CatApiService) {}


  async call(input: CatImageInputDTO): Promise<CatImageOutputDto | null> {
    const image: CatImage = await this.catApiService.getImage(input);

    if (input.hasBreeds) {
      const breedsInfo = this.mapBreeds(image);
      return this.mapOutput(image, breedsInfo);
    }

    return this.mapOutput(image, []);
  }

  private mapBreeds(image: CatImage) {
    return image.breeds.slice(0, 1).map(breed => ({
      id: breed.id,
      name: breed.name,
      origin: breed.origin,
      description: breed.description,
    }));
  }

  private mapOutput(image: CatImage, breedsInfo: any[]): CatImageOutputDto {
    return {
      id: image.id,      
      url: image.url,   
      width: image.width,
      height: image.height,
      breeds: breedsInfo, 
    };
  }
}