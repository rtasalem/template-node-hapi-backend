import Hapi from '@hapi/hapi'
import Joi from 'joi'
import { config } from '../config/index.js'
import { router } from '../plugins/router.js'

export async function createServer() {
  const server = Hapi.server({
    host: config.get('server.host'),
    port: config.get('server.port'),
    routes: {
      validate: {
        options: {
          abortEarly: false
        }
      }
    },
    router: {
      stripTrailingSlash: true
    }
  })

  server.validator(Joi)

  await server.register([
    router
  ])

  return server
}
