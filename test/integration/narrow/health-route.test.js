import { describe, beforeEach, afterEach, test, expect } from 'vitest'
import http2 from 'node:http2'
import { createServer } from '../../../src/server/create-server.js'

const { constants: httpConstants } = http2

describe('health route', () => {
  let server

  const options = {
    method: 'GET',
    url: '/health'
  }

  beforeEach(async () => {
    server = await createServer()
    await server.initialize()
  })

  afterEach(async () => {
    await server.stop()
  })

  test('GET /health returns 200', async () => {
    const response = await server.inject(options)

    expect(response.statusCode).toBe(httpConstants.HTTP_STATUS_OK)
  })

  test('GET /health returns success message', async () => {
    const response = await server.inject(options)
    const { message } = JSON.parse(response.payload)

    expect(message).toBe('success')
  })
})
