export class CatImage {
  breeds?: string[];

  constructor(
    public identidad: string,
    public link: string,
    public ancho: number,
    public altura: number,
  ) {}
}
