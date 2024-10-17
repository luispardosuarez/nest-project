import { ICatImage } from '../interfaces/ICatImage';
import { CatImage } from '../entities/catimage';

export class CatInfoAdapter {
  static fromApi(catImage: ICatImage): CatImage {
    return new CatImage(
      catImage.id,
      catImage.url,
      catImage.width,
      catImage.height,
      catImage.mime_type,
    );
  }
}
