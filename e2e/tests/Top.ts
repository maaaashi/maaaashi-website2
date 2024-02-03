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
  public checkCount(tag: string, className: string, number) {
    const target = $(`${tag}.${className}`)
    assert.equal(target.elements.length, +number)
  }

  @Step('<tag>タグの<className>クラスが表示されていないこと')
  public checkCountNone(tag: string, className: string) {
    const target = $(`${tag}.${className}`)
    assert.ok(!target.exists)
  }
}
