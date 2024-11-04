import { Inject, Injectable, Logger } from '@nestjs/common';
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
import { Cache } from '@nestjs/cache-manager';

@Injectable()
export class CatApiService {
  private readonly logger = new Logger(CatApiService.name);

  constructor(
    private readonly catApiClient: CatApiClient,
    @InjectRepository(CatModel)
    private readonly catRepository: Repository<CatModel>,
    @Inject(Cache) private cacheManager: Cache,
  ) {}

  async getImage(hasBreeds: boolean): Promise<CatImage> {
    const query: string = `images/search?size=med&mime_types=jpg&format=json&has_breeds=${hasBreeds}&order=RANDOM&page=0&limit=1`;
    this.logger.log(`Fetching image with hasBreeds=${hasBreeds}`);
    try {
      const catImageData: ICatImage[] = await this.catApiClient.get(query);

      if (catImageData) {
        this.logger.log('Image fetched successfully');
        return CatInfoAdapter.fromApi(catImageData, hasBreeds);
      } else {
        this.logger.warn('No image data found');
        throw new Error('Failed to retrieve cat image');
      }
    } catch (error) {
      this.logger.error('Error fetching image from the cat API', error.stack);
      throw new Error('Request error');
    }
  }

  async getBreed(breedId: string): Promise<CatBreed> {
    const cacheKey = `breed-${breedId}`;
    this.logger.log(`Checking cache for breed with ID=${breedId}`);

    const cachedBreed = await this.cacheManager.get<CatBreed>(cacheKey);
    if (cachedBreed) {
      this.logger.log(`Breed found in cache for ID=${breedId}`);
      return cachedBreed;
    }

    this.logger.log(`Fetching breed data for ID=${breedId}`);
    try {
      const catBreedData: ICatBreed = await this.catApiClient.get(`breeds/${breedId}`);
      const catBreed = BreedInfoAdapter.fromApi(catBreedData);

      this.logger.log(`Saving breed data to cache and database for ID=${breedId}`);
      await this.catRepository.save({
        name: catBreed.name,
        origin: catBreed.origin,
        description: catBreed.description,
      });

      await this.cacheManager.set(cacheKey, catBreed);
      return catBreed;
    } catch (error) {
      this.logger.error(`Error fetching breed data for ID=${breedId}`, error.stack);
      throw new Error('Error fetching breed data from the API');
    }
  }

  async addCat(catData: Partial<CatModel>): Promise<CatModel> {
    this.logger.log('Creating a new cat entry in the database');
    const newCat = this.catRepository.create(catData);
    const savedCat = await this.catRepository.save(newCat);
    this.logger.log(`New cat entry created with ID=${savedCat.id}`);
    return savedCat;
  }

  async updateCat(id: string, catData: Partial<CatModel>): Promise<CatModel> {
    this.logger.log(`Updating cat entry with ID=${id}`);
    await this.catRepository.update(id, catData);
    await this.deleteBreedCache(id);
    const updatedCat = await this.catRepository.findOneBy({ id: Number(id) });
    if (updatedCat) {
      this.logger.log(`Cat entry updated in database with ID=${id}`);
    } else {
      this.logger.warn(`No cat entry found to update with ID=${id}`);
    }
    return updatedCat;
  }

  async deleteCat(id: string): Promise<void> {
    this.logger.log(`Deleting cat entry with ID=${id}`);
    await this.catRepository.delete(id);
    await this.deleteBreedCache(id);
    this.logger.log(`Cat entry and cache deleted with ID=${id}`);
  }

  async deleteBreedCache(breedId: string): Promise<void> {
    const cacheKey = `breed-${breedId}`;
    this.logger.log(`Deleting breed cache for ID=${breedId}`);
    await this.cacheManager.del(cacheKey);
  }

  async clearAllCache(): Promise<void> {
    this.logger.log('Clearing all cache');
    await this.cacheManager.reset();
  }
}
