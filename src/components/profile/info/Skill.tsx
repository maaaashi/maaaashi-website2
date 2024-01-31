import React from 'react'
import { BoxTitle } from '../BoxTitle'
import { BoxBody } from '../BoxBody'

export const Skill = () => {
  return (
    <div>
      <BoxTitle text={'スキル'} />
      <BoxBody>
        <ul>
          <li>TypeScript</li>
          <li>Next.js</li>
        </ul>
        <b>資格</b>
        <ul>
          <li>AWS Solution Architect Associate</li>
        </ul>
      </BoxBody>
    </div>
  )
}
