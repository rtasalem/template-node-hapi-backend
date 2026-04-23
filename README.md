# Repository template: Node.js backend microservice utilising Hapi.js plugin ecosystem

This template is for Node.js backend microservices.

## Prerequisites

- Docker & Docker Compose
- Node.js & NPM (recommended to use NVM to install both)

## Local development

### Dependencies

Install application dependencies:
```
npm install
```

### Development

The service is configured to run inside a Docker container and it is recommended to use Docker Compose for local development.

Build the service:
```
docker compose build
```

Start the service:
```
docker compose up # use -d argument for detached mode
```

Stop the service: 
```
docker compose down # use -v to delete volumes
```

### Testing

Integration and unit tests are configured to run inside a Docker container and it is recommended to use Docker Compose for local testing.

Run the test container and generate a coverage report:
```
npm run docker:test
```

Run the test container in watch mode to support TDD (test driven development):
```
npm run docker:test:watch
```

### Linting

The service uses [neostandard](https://github.com/neostandard/neostandard) as the chosen linter.

Run the linter:
```
npm run lint
```

Auto-fix any existing linting issues where possible:
```
npm run lint:fix
```
