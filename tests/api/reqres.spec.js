const { test, expect } = require('@playwright/test')
const apiData = require('../../test-data/apiData')

test('Reqres API Assignment', async ({ request }) => {

  const headers = {
    'User-Agent': 'qa-playwright-tests',
    'x-api-key': process.env.REQRES_API_KEY
  }

  const createResponse = await request.post(
    `${process.env.REQRES_BASE_URL}${apiData.endpoints.users}`,
    {
      headers,
      data: apiData.createUser
    }
  )

  expect(createResponse.status()).toBe(201)

  const createBody = await createResponse.json()
  expect(createBody.id).toBeDefined()

  const getResponse = await request.get(
    `${process.env.REQRES_BASE_URL}${apiData.endpoints.users}/${apiData.existingUserId}`,
    { headers }
  )

  expect(getResponse.status()).toBe(200)

  const getBody = await getResponse.json()
  expect(getBody.data).toBeDefined()

  const updateResponse = await request.put(
    `${process.env.REQRES_BASE_URL}${apiData.endpoints.users}/${apiData.existingUserId}`,
    {
      headers,
      data: apiData.updateUser
    }
  )

  expect(updateResponse.status()).toBe(200)

  const updateBody = await updateResponse.json()
  expect(updateBody.name).toBe(apiData.updateUser.name)
})
