import { BoxTitle } from '../BoxTitle'
import { BoxBody } from '../BoxBody'

export const AboutMe = () => {
  return (
    <div>
      <BoxTitle text={'自己紹介'} />
      <BoxBody>
        <p>こんにちは！大岡正志と申します。</p>
        <p>現在、株式会社ユーザベースでWebエンジニアをしています。</p>
        <p>
          フロントエンド、バックエンド、インフラなど、幅広く開発を行っています。
        </p>
      </BoxBody>
    </div>
  )
}
