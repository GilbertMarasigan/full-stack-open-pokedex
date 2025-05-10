const { test, describe, expect } = require('@playwright/test')

const URL_HOME = 'http://127.0.0.1:8080';

describe('Pokedex', () => {
  test('front page can be opened', async ({ page }) => {
    await page.goto(URL_HOME)
    await expect(page.getByText('ivysaur')).toBeVisible()
    await expect(page.getByText('Pokémon and Pokémon character names are trademarks of Nintendo.')).toBeVisible()
  })

  test('pokemon can be navigated to', async ({ page }) => {

    await page.goto(URL_HOME);

    await page.click('text=ivysaur');

    await expect(page).toHaveURL(/ivysaur/);
  })
})