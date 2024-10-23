import { Injectable } from '@nestjs/common';
import { CatApiService } from '../cat.api.service';
import { CatImageInputDTO } from '../dto/catimage.input.dto';

@Injectable()
export class GetCatInfo {
  constructor(private readonly catApiService: CatApiService) {}

  async call(input: CatImageInputDTO): Promise<any> {
    if (input.hasBreeds) {
      const breeds = await this.catApiService.getAllBreeds();
      return breeds.map((breed) => ({
        id: breed.id,
        name: breed.name,
        origin: breed.origin,
        description: breed.description,
      }));
    }

    return { message: 'No breed information requested' };
  }
}
