class LoginPage {
  constructor(page) {
    this.page = page
    this.bookStoreCard = page.getByText('Book Store Application')
    this.loginBtn = page.getByRole('button', { name: 'Login' })
    this.usernameInput = page.getByPlaceholder('UserName')
    this.passwordInput = page.getByPlaceholder('Password')
    this.logoutBtn = page.getByRole('button', { name: 'Log out' })
  }

  async navigateToBookStoreApp() {
    await this.bookStoreCard.scrollIntoViewIfNeeded()
    await this.bookStoreCard.click()
  }

  async login(username, password) {
    await this.loginBtn.click()
    await this.usernameInput.fill(username)
    await this.passwordInput.fill(password)
    await this.loginBtn.click()
  }

  async validateLogin(username) {
    await this.page.getByText(username).waitFor()
    await this.logoutBtn.waitFor()
  }

  async logout() {
    await this.logoutBtn.click()
  }
}

module.exports = { LoginPage }
