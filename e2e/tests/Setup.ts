import { chromium } from '@playwright/test'
import { AfterSuite, BeforeSuite, Step } from 'gauge-ts'
import { browser, page, setPageBrowser } from './page'

export default class Setup {
  @BeforeSuite()
  public async beforeSuite() {
    const browser = await chromium.launch()
    const page = await browser.newPage()
    setPageBrowser(page, browser)
  }

  @AfterSuite()
  public async afterSuite() {
    await page.close()
    await browser.close()
  }

  @Step('ウィンドウサイズを変更(width: <width>px, height: <height>px)')
  public async resizeWindow(width: string, height: string) {
    await page.setViewportSize({ width: +width, height: +height })
  }
}
