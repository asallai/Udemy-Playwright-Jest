const { chromium } = require("playwright")
const expect = require("expect")
const { afterAll, beforeEach, afterEach, it } = require("@jest/globals")

let browser
let page

beforeAll(async () => {
    browser = await chromium.launch()
})

afterAll(async () => {
    await browser.close()
})

beforeEach(async () => {
    page = await browser.newPage()
})

afterEach(async () => {
    await page.close()
})

it("Jest with Playwright demo", async () => {
    await page.goto("https://www.example.com/")
    expect(await page.title()).toBe("Example Domain")
})