import { Before, Given, After } from 'cucumber'
import puppeteer from 'puppeteer'
import { expect } from 'chai'

let browser

Before(async function () {
  if (!this.browser) {
    this.browser = browser = await puppeteer.launch({ headless: true })
  }
  if (!this.page) {
    this.page = (await this.browser.pages())[0] || await this.browser.newPage()
  }
})

After(async () => {
  browser && await browser.close()
})

Given(`a web browser`, function () {
  expect(this).to.have.property(`browser`)
})
