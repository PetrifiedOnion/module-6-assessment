
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})
test('Clicking the Draw button displays the div with id="choices"', async () => {
    const choices = await driver.findElement(By.id('choices'))
    const displayed1 = await choices.isDisplayed()
    expect(displayed1).toBe(true)
})
test('Clicking the "Add to Duo" button displays the div with id="player-duo"', async () => {
    const playerDuo = await driver.findElement(By.id('player-duo'))
    const displayed2 = await playerDuo.isDisplayed()
    expect(displayed2).toBe(true)
})