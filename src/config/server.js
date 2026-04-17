import environments from '../constants/environments.js'

export const serverConfig = {
  server: {
    serviceName: {
      doc: 'Service name',
      format: String,
      default: 'template-node-hapi-backend'
    },
    host: {
      doc: 'IP address to bind',
      format: 'ipaddress',
      default: '0.0.0.0'
    },
    port: {
      doc: 'Port to bind',
      format: 'port',
      default: 3000,
      env: 'PORT'
    },
    env: {
      doc: 'Application environment',
      format: [
        environments.DEVELOPMENT,
        environments.TEST,
        environments.PRODUCTION
      ],
      default: environments.DEVELOPMENT,
      env: 'NODE_ENV'
    }
  }
}
