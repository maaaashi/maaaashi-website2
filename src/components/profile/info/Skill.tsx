import React from 'react'
import { BoxTitle } from '../BoxTitle'
import { BoxBody } from '../BoxBody'

export const Skill = () => {
  return (
    <div>
      <BoxTitle text={'スキル'} />
      <BoxBody>
        <p>TypeScript, Next.js, React, VueJS, SvelteKit, Svelte, NestJS</p>
        <p>Ruby, RubyOnRails</p>
        <p>GraphQL</p>
        <p>AWS</p>
        <b>資格</b>
        <ul>
          <li>AWS Solution Architect Associate</li>
        </ul>
      </BoxBody>
    </div>
  )
}
