import { Injectable } from '@nestjs/common';
import { CatApiClient } from './cat.api.client';

@Injectable()
export class CatApiService {
  constructor(private readonly catApiClient: CatApiClient) {}

  async getImage(): Promise<any> {
    try {
      const imageURL: string = (await this.catApiClient.get())?.url;
      if (imageURL) {
        return imageURL;
      } else {
        throw new Error('No se pudo obtener la imagen del gato');
      }
    } catch (error) {
      console.error('Error en la solicitud a la API de gatos:', error);
      return undefined;
    }
  }
}
