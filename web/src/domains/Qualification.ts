export class Qualification {
  constructor(
    public date: string,
    public topic: string,
    public imageUrl: string,
  ) {}

  static create(d: any) {
    return new Qualification(d.date, d.topic, d.imageUrl)
  }
}
