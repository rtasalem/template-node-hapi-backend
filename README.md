# Repository template: Node.js backend microservice utilising Hapi.js plugin ecosystem

This template is for Node.js backend microservices.

## Quality gate summary (example)

| Metric | Status |
| ------ | ------ |
| Build | ![Build](https://github.com/rtasalem/template-node-hapi-backend/actions/workflows/build.yaml/badge.svg) |
| Bugs | [![Bugs](https://sonarcloud.io/api/project_badges/measure?project=rtasalem_template-node-hapi-backend&metric=bugs)](https://sonarcloud.io/summary/new_code?id=rtasalem_template-node-hapi-backend) |
| Code smells | [![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=rtasalem_template-node-hapi-backend&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=rtasalem_template-node-hapi-backend) |
| Duplicated lines (%) | [![Duplicated Lines (%)](https://sonarcloud.io/api/project_badges/measure?project=rtasalem_template-node-hapi-backend&metric=duplicated_lines_density)](https://sonarcloud.io/summary/new_code?id=rtasalem_template-node-hapi-backend) |
| Coverage | [![Coverage](https://sonarcloud.io/api/project_badges/measure?project=rtasalem_template-node-hapi-backend&metric=coverage)](https://sonarcloud.io/summary/new_code?id=rtasalem_template-node-hapi-backend) |

## Prerequisites

- Docker & Docker Compose
- Node.js & NPM (recommended to use NVM to install both)

## What's included

- Containerised development environment using Docker and Docker Compose.
- Hapi.js server.
- [pre-commit](https://pre-commit.com/) hooks:
  - [detect-secrets](https://github.com/Yelp/detect-secrets)
  - ESLint with neostandard (custom hook)
- Vitest
- [SonarQube Cloud](https://www.sonarsource.com/products/sonarqube/cloud/?utm_source=google&utm_medium=cpc&utm_campaign=SQ-EMEA-North-UKI-Brand-Beinc&utm_content=sonarqube-cloud-core&utm_term=sonarqube+cloud&s_campaign=SQ-EMEA-North-UKI-Brand-Beinc&s_content=sonarqube-cloud-core&s_term=sonarqube+cloud&s_category=Paid&s_source=Paid+Search&s_origin=Google&cq_src=google_ads&cq_cmp=23600038942&cq_con=197298340047&cq_term=sonarqube+cloud&cq_med=&cq_plac=&cq_net=g&cq_pos=&cq_plt=gp&gad_source=1&gad_campaignid=23600038942&gclid=Cj0KCQjw2MbPBhCSARIsAP3jP9zjXQPGwIses--V_MGi8xWCL7J3Be-1DnDvPB4dlcF2uuXdlbMTtjQaAiM5EALw_wcB) code scanning on PR commits.
- [Trivy](https://trivy.dev/) vulnerability scanning on PR commits.
- [GitHub Dependency Review](https://github.com/marketplace/actions/dependency-review) on PR commits.

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
