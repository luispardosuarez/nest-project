import { Injectable, Logger } from '@nestjs/common';
import { CatInfoAdapter } from './adapters/cat.info.adapter';
import { ICatImage } from './interfaces/ICatImage';
import { BreedInfoAdapter } from './adapters/breed.info.adapter';
import { ICatBreed } from './interfaces/ICatBreed';
import { CatApiClient } from './cat.api.client';
import { CatImage } from 'src/cat_api/domain/entities/catimage';
import { CatBreed } from 'src/cat_api/domain/entities/catbreed';
import { InjectRepository } from '@nestjs/typeorm';
import { CatModel } from 'src/cat_api/domain/entities/catmodel.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CatApiService {
  constructor(private readonly catApiClient: CatApiClient,
  @InjectRepository(CatModel)
  private readonly catRepository: Repository<CatModel>
  ) {}

  async getImage(hasBreeds: boolean): Promise<CatImage> {
    const query: string = `images/search?size=med&mime_types=jpg&format=json&has_breeds=${hasBreeds}&order=RANDOM&page=0&limit=1`;
    try {
      const catImageData: ICatImage[] = await this.catApiClient.get(query);

      if (catImageData) {
        return CatInfoAdapter.fromApi(catImageData, hasBreeds);
      } else {
        throw new Error('No se pudo obtener la imagen del gato');
      }
    } catch (error) {
      Logger.error('Error en la solicitud a la API de gatos:', error);
      throw new Error('Error en la solicitud');
    }
  }

  async getBreed(breedId: string): Promise<CatBreed> {
    const query: string = `breeds/${breedId}`;
    try {
      const catBreedData: ICatBreed = await this.catApiClient.get(query);

      if (catBreedData) {
        const catBreed = BreedInfoAdapter.fromApi(catBreedData);

        const savedBreed = await this.catRepository.save({
          name: catBreed.name,
          origin: catBreed.origin,
          description: catBreed.description,
        });
        return catBreed;
      } else {
        throw new Error('No se pudo obtener la raza del gato');
      }
    } catch (error) {
      Logger.error('Error en la solicitud a la API de gatos:', error);
      throw new Error('Error en la solicitud a la API de gatos');
    }
  }

  async addCat(catData: Partial<CatModel>): Promise<CatModel> {
    const newCat = this.catRepository.create(catData);
    return await this.catRepository.save(newCat);
  }
}
