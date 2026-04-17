import { describe, beforeAll, afterAll, test, expect, vi } from 'vitest'
import Hapi from '@hapi/hapi'

describe('startServer', () => {
  const PROCESS_ENV = process.env
  let createServerSpy
  let hapiServerSpy
  let startServerImport
  let createServerImport
  let consoleInfoSpy
  let consoleErrorSpy

  beforeAll(async () => {
    process.env = { ...PROCESS_ENV }
    process.env.PORT = '3098'

    vi.resetModules()

    createServerImport = await import('../../src/server/create-server.js')
    startServerImport = await import('../../src/server/start-server.js')

    createServerSpy = vi.spyOn(createServerImport, 'createServer')
    hapiServerSpy = vi.spyOn(Hapi, 'server')
    consoleInfoSpy = vi.spyOn(console, 'info').mockImplementation(() => { })
    consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => { })
  })

  afterAll(() => {
    process.env = PROCESS_ENV
  })

  describe('when server starts', () => {
    let server

    afterEach(async () => {
      await server.stop({ timeout: 0 })
    })

    test('should start up server successfully', async () => {
      server = await startServerImport.startServer()

      expect(createServerSpy).toHaveBeenCalled()
      expect(hapiServerSpy).toHaveBeenCalled()
    })

    test('should log successful startup messages', async () => {
      server = await startServerImport.startServer()

      expect(consoleInfoSpy).toHaveBeenCalledWith('Server started successfully')
      expect(consoleInfoSpy).toHaveBeenCalledWith('Access the template-node-hapi-backend server on http://localhost:3098')
    })
  })

  describe('when server fails to start', () => {
    beforeAll(() => {
      createServerSpy.mockRejectedValue(new Error('Server failed to start'))
    })

    test('should log failed startup message', async () => {
      await startServerImport.startServer()

      expect(consoleInfoSpy).toHaveBeenCalledWith('Server failed to start')
      expect(consoleErrorSpy).toHaveBeenCalledWith(Error('Server failed to start'))
    })
  })
})
