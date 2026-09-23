class LoginPage {
  constructor(page) {
    this.page = page;
    this.emailInput = page.getByPlaceholder('name@domain.com');
    this.passwordInput = page.locator("#password");
    this.submitButton = page.locator("button[type='submit']");
    this.userMenuButton = page.getByRole('button', { name: 'User profile and usage indicator', exact: true });
    this.logoutButton = page.getByRole('button', { name: 'Log out', exact: true });
  }

  async goto() {
    await this.page.goto('https://thedouble.ai/auth/signin');
  }

  async login(username, password) {
    await this.goto();
    await this.emailInput.fill(username);
    await this.passwordInput.fill(password);
    await this.submitButton.click();
  }

  async logout() {
    await this.userMenuButton.click();
    await this.logoutButton.click();
  }
}

module.exports = { LoginPage };
