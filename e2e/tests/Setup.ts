import { AfterSuite, BeforeSuite, Step } from 'gauge-ts'
import { closeBrowser, goto, openBrowser } from 'taiko'

export default class Top {
  @BeforeSuite()
  public async beforeSuite() {
    await openBrowser({ headless: false })
  }

  @AfterSuite()
  public async afterSuite() {
    await closeBrowser()
  }
}
