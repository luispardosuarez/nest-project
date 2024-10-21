import { ICatImage } from '../interfaces/ICatImage';
import { CatImage } from '../entities/catimage';

export class CatInfoAdapter {
  static fromApi(iCatImage: ICatImage[]): CatImage {
    const catImage = new CatImage(
      iCatImage[0].id,
      iCatImage[0].url,
      iCatImage[0].width,
      iCatImage[0].height,
    );

    // if (hasBreeds) catImage.breeds.push(iCatImage[0].breeds)

    return catImage;
  }
}
