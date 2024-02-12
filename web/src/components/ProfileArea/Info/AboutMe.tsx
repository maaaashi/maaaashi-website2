import { BoxTitle } from '../BoxTitle'
import { BoxBody } from '../BoxBody'
import type { FC } from 'react'

interface Props {
  aboutme: {
    text: string
  }
}

export const AboutMe: FC<Props> = ({aboutme}) => {
  return (
    <div>
      <BoxTitle text={'自己紹介'} />
      <BoxBody>
        <div dangerouslySetInnerHTML={{
          __html: aboutme.text
        }}/>
      </BoxBody>
    </div>
  )
}
