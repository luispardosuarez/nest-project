import { ICatImage } from '../interfaces/ICatImage';
import { CatImage } from '../entities/catimage';

export class CatInfoAdapter {
  static fromApi(catImage: ICatImage[]): CatImage {
    return new CatImage(
      catImage[0].id,
      catImage[0].url,
      catImage[0].width,
      catImage[0].height,
    );
  }
}
