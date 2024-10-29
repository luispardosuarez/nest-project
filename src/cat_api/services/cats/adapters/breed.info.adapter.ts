import { CatBreed } from "src/cat_api/domain/entities/catbreed";
import { ICatBreed } from "../interfaces/ICatBreed";


export class BreedInfoAdapter {
  static fromApi(iCatBreed: ICatBreed): CatBreed {
    const catBreed = new CatBreed(
      iCatBreed.id,
      iCatBreed.name,
      iCatBreed.origin,
      iCatBreed.description,
    );

    return catBreed;
  }
}
