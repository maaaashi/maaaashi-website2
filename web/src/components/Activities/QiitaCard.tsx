import type { FC } from 'react'

interface Props {
  title: string
}

export const QiitaCard: FC<Props> = ({ title }) => {
  return <img src='/qiita.png' alt={title} />
}
