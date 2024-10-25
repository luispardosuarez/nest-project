import { CatBreed } from "../entities/catbreed";
import { ICatBreed } from "../interfaces/ICatBreed";

export class BreedInfoAdapter {
  static fromApi(
    iCatBreed: ICatBreed[],
    hasBreeds: boolean,
    breedsInfo?: any,
  ): CatBreed {
    const catBreed = new CatBreed(
      iCatBreed[0].id,
      iCatBreed[0].name,
      iCatBreed[0].origin,
      iCatBreed[0].description,
    );

    if (hasBreeds && breedsInfo) {
      catBreed.breeds = breedsInfo;
    } else if (hasBreeds && iCatBreed[0].breeds) {
      catBreed.breeds = iCatBreed[0].breeds;
    } else {
      catBreed.breeds = [];
    }

    return catBreed;
  }
}