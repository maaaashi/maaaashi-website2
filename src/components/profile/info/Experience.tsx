import React from 'react'
import { BoxTitle } from '../BoxTitle'
import { BoxBody } from '../BoxBody'
import { ProfileItem } from '../ProfileItem'

export const Experience = () => {
  return (
    <div>
      <BoxTitle text={'経歴'} />
      <BoxBody>
        <div className='flex flex-col'>
          <dt className='text-end w-fit self-start'>
            <b>2020年03月</b>
          </dt>
          <dd className='self-end'>千葉大学工学部建築学科 卒業</dd>
        </div>
        <div className='flex flex-col'>
          <dt className='text-end w-fit self-start'>
            <b>2020年04月</b>
          </dt>
          <dd className='self-end'>木村情報技術株式会社 入社</dd>
        </div>
        <div className='flex flex-col'>
          <dt className='text-end w-fit self-start'>
            <b>2023年11月</b>
          </dt>
          <dd className='self-end'>木村情報技術株式会社 退社</dd>
        </div>
        <div className='flex flex-col'>
          <dt className='text-end w-fit self-start'>
            <b>2023年12月</b>
          </dt>
          <dd className='self-end'>株式会社ユーザベース 入社</dd>
        </div>
      </BoxBody>
    </div>
  )
}
