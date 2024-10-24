export class CatImage {
  constructor(
    public identidad: string,
    public link: string,
    public ancho: number,
    public altura: number,
  ) {
  }
  breeds?: any[];
}
