import type { ReactNode } from 'react'

export class Tab {
  constructor(
    public id: number,
    public title: string,
    public component: ReactNode,
  ) {}
}
