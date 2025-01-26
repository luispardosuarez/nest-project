export class CatBreed {
  constructor(
    public id: string,
    public name: string,
    public origin: string,
    public description: string,
  ) {}
  breeds?: any[];
}
