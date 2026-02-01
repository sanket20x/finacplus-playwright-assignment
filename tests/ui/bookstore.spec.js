const { test, expect } = require('@playwright/test')
const fs = require('fs')
const path = require('path')
const { LoginPage } = require('../../pages/login.page')
const { BookStorePage } = require('../../pages/bookstore.page')
const uiData = require('../../test-data/uiData')

test('Book Store UI Assignment', async ({ page }) => {

  const loginPage = new LoginPage(page)
  const bookStorePage = new BookStorePage(page)

  await page.goto(process.env.DEMOQA_BASEURL, { waitUntil: 'domcontentloaded' })

  await loginPage.navigateToBookStoreApp()

  await loginPage.login(process.env.DEMOQA_USERNAME, process.env.DEMOQA_PASSWORD)

  await expect(page.getByText(process.env.DEMOQA_USERNAME)).toBeVisible()
  await expect(page.getByRole('button', { name: 'Log out' })).toBeVisible()

  await bookStorePage.openBookStoreIfNeeded()

  await bookStorePage.searchBook(uiData.bookName)

  const resultTitle = await bookStorePage.getResultTitle()
  expect(resultTitle).toBe(uiData.bookName)

  const { title, author, publisher } = await bookStorePage.getBookDetails()
  expect(title).toBe(uiData.bookName)

  const outputDir = path.join(process.cwd(), 'output')
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir)
  }

  fs.writeFileSync(
    path.join(outputDir, 'bookDetails.txt'),
    `Title: ${title}\nAuthor: ${author}\nPublisher: ${publisher}`,
    'utf-8'
  )

  await loginPage.logout()
})
