import { config } from '../config/index.js'
import { createServer } from './create-server.js'

export async function startServer () {
  let server
  const serviceName = config.get('server.serviceName')
  const port = config.get('server.port')

  try {
    server = await createServer()
    await server.start()

    console.info('Server started successfully')
    console.info(`Access the ${serviceName} server on http://localhost:${port}`)
  } catch (err) {
    console.info('Server failed to start')
    console.error(err)
  }

  return server
}
