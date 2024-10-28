export class CatImage {
  constructor(
    public url: string,
    public width: number,
    public height: number,
  ) {}
  id?: string;
  breeds?: any[];
}
