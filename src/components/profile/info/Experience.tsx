import React from 'react'
import { BoxTitle } from '../BoxTitle'
import { BoxBody } from '../BoxBody'
import { ProfileItem } from '../ProfileItem'

export const Experience = () => {
  return (
    <div>
      <BoxTitle text={'経歴'} />
      <BoxBody>
        <div className='flex gap-2'>
          <dt className='text-end w-20'>
            <b>2020年4月</b>
          </dt>
          <dd>木村情報技術株式会社 入社</dd>
        </div>
        <div className='flex gap-2'>
          <dt className='text-end w-20'>
            <b>2023年11月</b>
          </dt>
          <dd>木村情報技術株式会社 退社</dd>
        </div>
        <div className='flex gap-2'>
          <dt className='text-end w-20'>
            <b>2023年12月</b>
          </dt>
          <dd>株式会社ユーザベース 入社</dd>
        </div>
      </BoxBody>
    </div>
  )
}
