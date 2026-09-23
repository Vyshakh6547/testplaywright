const {test,expect} = require('@playwright/test')

test('test', async ({ page }) => {
    await page.goto('https://thedouble.ai/auth/signin');
    await page.getByPlaceholder("name@domain.com").fill("username")
    await page.locator("//input[@id='password']").fill("password")
    await page.locator("//button[@type='submit']").click()
    await expect(page).toHaveURL(/home/);
    await page.getByLabel("User profile and usage indicator").nth(1).click()
    const logoutButton = await page.locator('button:has-text("Logout")');
    await logoutButton.click();
    await expect(page).toHaveURL(/signin/);
})