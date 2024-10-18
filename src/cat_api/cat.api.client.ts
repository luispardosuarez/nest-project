import { Injectable, Logger } from '@nestjs/common';
import axios, { AxiosResponse } from 'axios';

@Injectable()
export class CatApiClient {
  private readonly apiKey =
    'live_A1HMFG7sSy2c00QFzwFXWWjnoPtDKO4TNXldfAK6dLV6KhfUhVoo2PCwo2z4FIFQ';
  private readonly baseUrl = 'https://api.thecatapi.com/v1/';

  public async get(hasBreeds: boolean): Promise<any> {
    const queryParams = `?size=med&mime_types=jpg&format=json&has_breeds=${hasBreeds}&order=RANDOM&page=0&limit=1`;
    return this.handleRequest('GET', `images/search${queryParams}`);
  }

  private async handleRequest(method: 'GET', url: string): Promise<any> {
    try {
      const response: AxiosResponse = await axios.request({
        method,
        url: `${this.baseUrl}${url}`,
        headers: { 'x-api-key': this.apiKey },
      });

      return response.data;
    } catch (error) {
      Logger.error('error cliente', error);
      throw new Error(error);
    }
  }
}
