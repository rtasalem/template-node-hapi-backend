# Repository template: Node.js backend microservice utilising Hapi.js plugin ecosystem

This template is for Node.js backend microservices.

## Quality gate summary (example)

| Metric | Status |
| ------ | ------ |
| Build | ![Build](https://github.com/rtasalem/template-node-hapi-backend/actions/workflows/build.yaml/badge.svg) |
| Bugs | [![Bugs](https://sonarcloud.io/api/project_badges/measure?project=rtasalem:template-node-hapi-backend&metric=bugs)](https://sonarcloud.io/summary/new_code?id=rtasalem:template-node-hapi-backend) |
| Code smells | [![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=rtasalem:template-node-hapi-backend&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=rtasalem:template-node-hapi-backend) |
| Duplicated lines (%) | [![Duplicated Lines (%)](https://sonarcloud.io/api/project_badges/measure?project=rtasalem:template-node-hapi-backend&metric=duplicated_lines_density)](https://sonarcloud.io/summary/new_code?id=rtasalem:template-node-hapi-backend) |
| Coverage | [![Coverage](https://sonarcloud.io/api/project_badges/measure?project=rtasalem:template-node-hapi-backend&metric=coverage)](https://sonarcloud.io/summary/new_code?id=rtasalem:template-node-hapi-backend) |

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
