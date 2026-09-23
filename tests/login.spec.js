const { test, expect } = require('@playwright/test');
const dotenv = require('dotenv');
const { LoginPage } = require('../pages/LoginPage');

dotenv.config({ override: true });
const username = process.env.USERNAME;
const password = process.env.PASSWORD;

test('user can sign in and sign out', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.login(username, password);
    await expect(page).toHaveURL(/home/);

    await loginPage.logout();
    await expect(page).toHaveURL(/signin/);
});