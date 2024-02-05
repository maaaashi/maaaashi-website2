import { Step } from 'gauge-ts'
import { $, below, goto, text } from 'taiko'
import assert = require('assert')

export default class Top {
  @Step('Topページを開く')
  public async openTodo() {
    await goto('localhost:4321/')
  }

  @Step('<text>という文字があること')
  public async checkDisplay(innerText: string) {
    const target = text(innerText)
    const actual = await target.exists()
    assert.ok(actual)
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
