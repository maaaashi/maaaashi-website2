import { expect } from '@playwright/test'
import { Step } from 'gauge-ts'
import { page } from './page'

export default class Top {
  @Step('Topページを開く')
  public async openTodo() {
    await page.goto('localhost:4321/')
  }

  @Step('<text>という見出しが表示されていること')
  public async checkHeadingDisplay(text: string) {
    const target = page.getByRole('heading', { name: text })
    await expect(target).toBeVisible()
  }

  @Step('<text>というボタンが表示されていること')
  public async checkButtonDisplay(text: string) {
    const target = page.getByRole('button', { name: text })
    await expect(target).toBeVisible()
  }

  @Step('href<href>で、文字列<text>のリンクが表示されていること')
  public async checkLinkDisply(href: string, text: string) {
    const target = page.getByRole('link', { name: text })
    await expect(target).toHaveAttribute('href', href)
  }

  @Step('<name>というチェックボックスが表示されていること')
  public async checkCheckboxDisplay(name: string) {
    const target = page.getByRole('checkbox', { name })
    await expect(target).toBeVisible()
  }

  @Step('<name>というチェックボックスが表示されていないこと')
  public async checkCheckboxHidden(name: string) {
    const target = page.getByRole('checkbox', { name })
    await expect(target).not.toBeVisible()
  }

  @Step('<tag>タグの<className>クラスが表示されていること')
  public async checkSelectorVisible(tag: string, className: string) {
    const target = page.locator(`${tag}.${className}`)
    await expect(target).toBeVisible()
  }

  @Step('<tag>タグの<className>クラスが表示されていないこと')
  public async checkSelectorHidden(tag: string, className: string) {
    const target = page.locator(`${tag}.${className}`)
    await expect(target).not.toBeVisible()
  }
}
