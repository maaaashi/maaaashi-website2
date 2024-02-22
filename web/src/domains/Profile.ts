export class Profile {
  constructor(
    public name: string,
    public age: number,
    public job: string,
    public email: string,
  ) {}

  static create(d: any) {
    return new Profile(d.name, +d.age, d.job, d.email)
  }
}
