export class CatImage {
  breeds: any[];
  constructor(
    public identidad: string,
    public link: string,
    public ancho: number,
    public altura: number,
  ) {
    this.breeds = [];
  }
}
