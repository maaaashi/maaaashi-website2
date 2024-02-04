import { Step } from 'gauge-ts'
import { $, goto } from 'taiko'
import assert = require('assert')

export default class Top {
  @Step('Topページを開く')
  public async openTodo() {
    await goto('localhost:4321/')
  }

  @Step('<tag>タグの中に<text>という文字があること')
  public checkDisplay(tag: string, text: string) {
    const target = $(`${tag}:contains(${text})`)
    assert.ok(target.exists)
  }

  @Step('<tag>タグの<className>クラスが<number>つ表示されていること')
  public async checkCount(tag: string, className: string, number: string) {
    const target = $(`${tag}.${className}`)
    const actual = (await target.elements()).length
    assert.strictEqual(actual, +number)
  }

  @Step('<tag>タグの<className>クラスが表示されていないこと')
  public async checkCountNone(tag: string, className: string) {
    const target = $(`${tag}.${className}`)
    const actual = await target.isVisible()
    assert.ok(!actual)
  }
}
