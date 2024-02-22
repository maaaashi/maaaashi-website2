export class TechnicalPortfolio {
  constructor(
    public name: string,
    public title: string,
    public description: string,
    public imageUrl: string,
    public url: string,
  ) {}

  static create(d: any) {
    return new TechnicalPortfolio(
      d.name,
      d.title,
      d.descriptoin,
      d.imageUrl,
      d.url,
    )
  }
}
