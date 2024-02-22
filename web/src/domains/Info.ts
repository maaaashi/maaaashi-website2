export class Info {
  constructor(
    public aboutme: AboutMe,
    public experience: Experience[],
    public skills: Skill[],
    public qualifications: Qualification[],
  ) {}

  static create(d: any) {
    return new Info(
      AboutMe.create(d.aboutme),
      d.experience.map((e: any) => Experience.create(e)),
      d.skills.map((s: any) => Skill.create(s)),
      d.qualifications.map((q: any) => Qualification.create(q)),
    )
  }
}

export class AboutMe {
  constructor(public text: string) {}

  static create(d: any) {
    return new AboutMe(d.text)
  }
}

export class Experience {
  constructor(
    public date: string,
    public topic: string,
  ) {}

  static create(d: any) {
    return new Experience(d.date, d.topic)
  }
}

export class Skill {
  constructor(
    public category: string,
    public items: string[],
  ) {}

  static create(d: any) {
    return new Skill(d.category, d.items)
  }
}

export class Qualification {
  constructor(
    public date: string,
    public topic: string,
  ) {}

  static create(d: any) {
    return new Qualification(d.date, d.topic)
  }
}
