import { ICatImage } from '../interfaces/ICatImage';
import { CatImage } from '../entities/catimage';

export class CatInfoAdapter {
  static fromApi(iCatImage: ICatImage[], hasBreeds: boolean): CatImage {
    const catImage: CatImage = new CatImage(
      iCatImage[0].url,
      iCatImage[0].width,
      iCatImage[0].height,
    );

    if (hasBreeds) {
      catImage.id = iCatImage[0].breeds[0].id;
    }

    return catImage;
  }
}
