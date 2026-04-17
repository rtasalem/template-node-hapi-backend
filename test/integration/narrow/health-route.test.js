import { vi, describe, beforeEach, afterEach, test, expect } from 'vitest'
import { createServer } from '../../../src/server/create-server.js'

describe('health route', () => {
  let server

  beforeEach(async () => {
    server = await createServer()
    await server.initialize()
  })

  afterEach(async () => {
    await server.stop()
  })

  test('GET /health returns 200', async () => {
    const options = {
      method: 'GET',
      url: '/health'
    }

    const response = await server.inject(options)

    expect(response.statusCode).toBe(200)
  })

  test('GET /health returns success', async () => {
    const options = {
      method: 'GET',
      url: '/health'
    }

    const response = await server.inject(options)
    const message = JSON.parse(response.payload).message

    expect(message).toBe('success')
  })
})
