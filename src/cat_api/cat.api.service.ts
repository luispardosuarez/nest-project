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
      const hasBreedsOutput = input.hasBreeds == true

      const catImageData: ICatImage[] =
        await this.catApiClient.get(hasBreedsOutput);

      if (catImageData) {
        console.log('catImageData', catImageData);

        if (hasBreedsOutput) {
          const breedsInfo = await this.catApiClient.getAllBreeds();
          console.log('breedsInfo', breedsInfo);

          const entidad = CatInfoAdapter.fromApi(
            catImageData,
            hasBreedsOutput,
            breedsInfo,
          );
          console.log('entidad con razas', entidad);
          return entidad;
        }

        const entidad = CatInfoAdapter.fromApi(catImageData, hasBreedsOutput);
        console.log('entidad sin razas', entidad);
        return entidad;
      } else {
        throw new Error('No se pudo obtener la imagen del gato');
      }
    } catch (error) {
      console.error('Error en la solicitud a la API de gatos:', error);
      return undefined;
    }
  }

  async getAllBreeds(): Promise<any> {
    return await this.catApiClient.getAllBreeds();
  }
}
