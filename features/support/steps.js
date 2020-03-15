import { When, Then, Given, Before } from 'cucumber'
import { expect } from 'chai'
import Promise from 'bluebird'

const APP_URL = process.env.APP_URL || 'http://localhost:3000'

function expectBrowser () {
  expect(this).to.have.property('browser')
  expect(this).to.have.property('page')
}

Before(expectBrowser)

Given(/the application/, async function () {
  if (this.page.url() !== APP_URL) {
    await this.page.goto(APP_URL)
  }
})

When(/enters "([^"]+)" in the ([a-z\s]+) field$/, async function (value, field) {
  field = `.${ field.replace(/\W/g, ' .') }`
  await this.page.focus(`${ field } input`)
  await this.page.keyboard.type(value)
  await Promise.delay(100) // element-ui dropdown
  await this.page.keyboard.press('ArrowDown');
  await this.page.keyboard.press('Enter')
})

Then(/able to enter an? ([a-z\s]+)$/, async function (selector) {
  selector = `.${ selector.replace(/\W/g, ' .') }`
  await this.page.waitForSelector(`${ selector } input`)
})

Then(/"([^"]+)" must appear in the output field/, async function (expectedOutput) {
  const text = await this.page.$eval('.output-container .output', el => el.textContent)
  expect(text).to.eql(expectedOutput)
})
