export class Experience {
  constructor(
    public date: string,
    public topic: string,
    public content: string,
  ) {}

  static create(d: any) {
    return new Experience(d.date, d.topic, d.content)
  }
}
