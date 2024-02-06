import { Browser, Page, chromium, expect } from '@playwright/test'
import { AfterSuite, BeforeSuite, Step } from 'gauge-ts'

export default class Top {
  private browser: Browser
  private page: Page

  @BeforeSuite()
  public async beforeSuite() {
    this.browser = await chromium.launch()
    this.page = await this.browser.newPage()
  }

  @AfterSuite()
  public async afterSuite() {
    await this.page.close()
    await this.browser.close()
  }

  @Step('ウィンドウサイズを変更(width: <width>px, height: <height>px)')
  public async resizeWindow(width: string, height: string) {
    await this.page.setViewportSize({ width: +width, height: +height })
  }

  @Step('Topページを開く')
  public async openTodo() {
    await this.page.goto('localhost:4321/')
  }

  @Step('<text>という見出しが表示されていること')
  public async checkHeadingDisplay(text: string) {
    const target = this.page.getByRole('heading', { name: text })
    await expect(target).toBeVisible()
  }

  @Step('<tag>タグの<className>クラスが表示されていること')
  public async checkSelectorVisible(tag: string, className: string) {
    const target = this.page.locator(`${tag}.${className}`)
    await expect(target).toBeVisible()
  }

  @Step('<tag>タグの<className>クラスが表示されていないこと')
  public async checkSelectorHidden(tag: string, className: string) {
    const target = this.page.locator(`${tag}.${className}`)
    await expect(target).not.toBeVisible()
  }
}
