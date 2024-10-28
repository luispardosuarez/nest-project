import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios, { AxiosResponse } from 'axios';

@Injectable()
export class CatApiClient {
  private readonly apiKey: string;
  private readonly baseUrl: string;

  constructor(private configService: ConfigService) {
    this.apiKey = this.configService.get<string>('CAT_API_KEY');
    this.baseUrl = this.configService.get<string>('CAT_API_URL');
  }

  public async get(query: string): Promise<any> {
    return this.handleRequest('GET', query);
  }

  // public async getAllBreeds(): Promise<any> {
  //   return this.handleRequest('GET', 'breeds');
  // }

  private async handleRequest(method: string, url: string): Promise<any> {
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
