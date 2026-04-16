import process from 'node:process'
import { startServer } from './server/start-server.js'

await startServer()

process.on('unhandledRejection', (err) => {
  console.info('Unhandled rejection')
  console.error(err)
  process.exitCode = 1
})
