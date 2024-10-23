import { ICatImage } from '../interfaces/ICatImage';
import { CatImage } from '../entities/catimage';

export class CatInfoAdapter {
  static fromApi(
    iCatImage: ICatImage[],
    hasBreeds: boolean,
    breedsInfo?: any,
  ): CatImage {
    const catImage = new CatImage(
      iCatImage[0].id,
      iCatImage[0].url,
      iCatImage[0].width,
      iCatImage[0].height,
    );

    if (hasBreeds && breedsInfo) {
      catImage.breeds = breedsInfo;
    } else if (hasBreeds && iCatImage[0].breeds) {
      catImage.breeds = iCatImage[0].breeds;
    } else {
      catImage.breeds = [];
    }

    return catImage;
  }
}
