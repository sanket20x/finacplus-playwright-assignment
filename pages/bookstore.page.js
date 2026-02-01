class BookStorePage {
  constructor(page) {
    this.page = page
    this.bookStoreBtn = page.getByRole('button', { name: 'Book Store' }).first()
    this.searchInput = page.getByPlaceholder('Type to search').first()
    this.firstRow = page.locator('.rt-tr-group').first()
  }

  async openBookStoreIfNeeded() {
    if (await this.bookStoreBtn.isVisible()) {
      await this.bookStoreBtn.click()
    }
  }

  async searchBook(bookName) {
    await this.searchInput.fill(bookName)
  }

  async getResultTitle() {
    return await this.firstRow.locator('.rt-td').nth(1).innerText()
  }

  async getBookDetails() {
    return {
      title: await this.firstRow.locator('.rt-td').nth(1).innerText(),
      author: await this.firstRow.locator('.rt-td').nth(2).innerText(),
      publisher: await this.firstRow.locator('.rt-td').nth(3).innerText()
    }
  }
}

module.exports = { BookStorePage }
