import { CatBreed } from "../entities/catbreed";
import { ICatBreed } from "../interfaces/ICatBreed";

export class BreedInfoAdapter {
  static fromApi(
    iCatBreed: ICatBreed[],
  
    breedsInfo?: any,
  ): CatBreed {
    const catBreed = new CatBreed(
      iCatBreed[0].id,
      iCatBreed[0].name,
      iCatBreed[0].origin,
      iCatBreed[0].description,
    );

      return catBreed;
    }
  }

