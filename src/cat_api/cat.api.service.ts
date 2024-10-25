import { Injectable, Logger } from '@nestjs/common';
import { CatApiClient } from './cat.api.client';
import { CatInfoAdapter } from './adapters/cat.info.adapter';
import { ICatImage } from './interfaces/ICatImage';
import { CatImage } from './entities/catimage';
import { BreedInfoAdapter } from './adapters/breed.info.adapter';
import { CatBreed } from './entities/catbreed';
import { ICatBreed } from './interfaces/ICatBreed';

@Injectable()
export class CatApiService {
  constructor(private readonly catApiClient: CatApiClient) {}

  async getImage(hasBreeds: boolean): Promise<CatImage> {
    const query: string = `?size=med&mime_types=jpg&format=json&has_breeds=${!hasBreeds}&order=RANDOM&page=0&limit=1`;
    try {
      const catImageData: ICatImage[] = await this.catApiClient.get(query);

      if (catImageData) {
        const entidad = CatInfoAdapter.fromApi(catImageData, hasBreeds);
        return (entidad);
      } else {
        throw new Error('No se pudo obtener la imagen del gato');
      }
    } catch (error) {
      Logger.error('Error en la solicitud a la API de gatos:', error);
      throw new Error('Error en la solicitud a la API de gatos')
    }
  }

  async getBreed(breedId: string): Promise<CatBreed> {
    const query: string = `breads/${breedId}`;
    try {
      const catBreedData: ICatBreed[] = await this.catApiClient.get(query);

      if (catBreedData) {
        const entidad = BreedInfoAdapter.fromApi(catBreedData);
        return (entidad);
      } else {
        throw new Error('No se pudo obtener la raza del gato');
      }
    } catch (error) {
      Logger.error('Error en la solicitud a la API de gatos:', error);
      throw new Error('Error en la solicitud a la API de gatos')
    }
    }
  }