# Repository template: Node.js backend microservice utilising Hapi.js plugin ecosystem

This template is for Node.js backend microservices.

## Prerequisites

- Docker & Docker Compose
- Node.js & NPM (use NVM to install both)

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

## Low-level breakdown

The following are reasoning and arguments in favour of certain patterns and configurations used for this template.

- [`.npmrc`](/.npmrc): NPM settings. Removes need for developers to manually specify options when running an NPM command. [[1]](https://dev.to/rameshpvr/npmrc-the-tiny-file-of-node-59da)
- [`.nvmrc`](/.nvmrc): Specifies the version of Node.js and NPM developers should use for local development. Eliminates the 'it works on my machine' problem. [[2]](https://dev.to/kibumpng/consistency-and-efficiency-with-nvmrc-30mi)
