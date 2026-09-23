const {test,expect} = require('@playwright/test')
const dotenv = require('dotenv');
dotenv.config({ override: true });
const username = process.env.USERNAME
const password = process.env.PASSWORD

test('test', async ({ page }) => {
    await page.goto('https://thedouble.ai/auth/signin');
    await page.getByPlaceholder("name@domain.com").fill(username)
    await page.locator("//input[@id='password']").fill(password)
    await page.locator("//button[@type='submit']").click()
    await expect(page).toHaveURL(/home/);
    await page.getByRole('button', { name: 'User profile and usage indicator', exact: true }).click()
    const logoutButton = page.getByRole('button', { name: 'Log out', exact: true });
    await logoutButton.click();
    await expect(page).toHaveURL(/signin/);
})