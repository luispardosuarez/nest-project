import { Injectable } from '@nestjs/common';
import { CatApiClient } from './cat.api.client';
import { CatInfoAdapter } from './adapters/cat.info.adapter';
import { ICatImage } from './interfaces/ICatImage';
import { CatImageInputDTO } from './dto/catimage.input.dto';

@Injectable()
export class CatApiService {
  constructor(private readonly catApiClient: CatApiClient) {}

  async getImage(input: CatImageInputDTO): Promise<any> {
    try {
      const hasBreedsQuery = !!input.hasBreeds;

      const catImageData: ICatImage[] =
        await this.catApiClient.get(hasBreedsQuery);

      if (catImageData) {
        console.log('catImageData', catImageData);
        const entidad = CatInfoAdapter.fromApi(catImageData, hasBreedsQuery);
        console.log('entidad', entidad);
        return entidad;
      } else {
        throw new Error('No se pudo obtener la imagen del gato');
      }
    } catch (error) {
      console.error('Error en la solicitud a la API de gatos:', error);
      return undefined;
    }
  }
}
