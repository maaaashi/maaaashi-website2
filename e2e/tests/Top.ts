import { Step } from 'gauge-ts'
import { goto } from 'taiko'

export default class Top {
  @Step('Topページを開く')
  public async openTodo() {
    await goto('localhost:4321/')
  }
}
