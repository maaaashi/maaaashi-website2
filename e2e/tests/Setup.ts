import { AfterSuite, BeforeSuite, Step } from 'gauge-ts'
import { closeBrowser, openBrowser, setViewPort } from 'taiko'

export default class Top {
  @BeforeSuite()
  public async beforeSuite() {
    const headless = process.env.HEADLESS === 'Y'
    await openBrowser({ headless })
  }

  @AfterSuite()
  public async afterSuite() {
    await closeBrowser()
  }

  @Step('ウィンドウサイズを変更(width: <width>px, height: <height>px)')
  public async resizeWindow(width: string, height: string) {
    await setViewPort({ width: +width, height: +height })
  }
}
