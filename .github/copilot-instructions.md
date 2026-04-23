# Copilot Instructions

## Commands

```bash
# Install dependencies
npm install

# Lint
npm run lint
npm run lint:fix

# Run all tests with coverage (inside Docker — recommended)
npm run docker:test

# Run tests in watch mode (inside Docker — for TDD)
npm run docker:test:watch

# Run tests directly (without Docker)
npm test

# Run a single test file
npx vitest run test/unit/router-plugin.test.js
npx vitest run test/integration/narrow/health-route.test.js
```

## Architecture

This is a Hapi.js microservice using ESM (`"type": "module"`). All imports must use explicit `.js` extensions.

**Startup flow:** `src/index.js` → `startServer()` → `createServer()` → registers plugins → server starts.

**Config** is managed via `convict` in `src/config/`. Config keys are accessed as `config.get('server.port')`. Environment variables map to config keys (e.g. `PORT` → `server.port`, `NODE_ENV` → `server.env`). Valid `NODE_ENV` values are `development`, `test`, `production` (defined in `src/constants/environments.js`).

**Adding a new route:**
1. Create a route object in `src/routes/<name>.js` — a plain object with `method`, `path`, `options`, and `handler`.
2. Register it in `src/plugins/router.js` by importing and concatenating it into the `[].concat(...)` array.

**Plugin pattern:** Hapi plugins are objects shaped as `{ plugin: { name, register } }`. The `register` function receives `(server, options)`.

## Test Conventions

Tests live in `test/unit/` and `test/integration/narrow/`. Vitest is used with `globals: true`.

**Integration tests** use `server.initialize()` (not `server.start()`) in `beforeEach` and `server.stop()` in `afterEach`. Requests are made via `server.inject(options)`.

```js
import { createServer } from '../../../src/server/create-server.js'

beforeEach(async () => {
  server = await createServer()
  await server.initialize()
})
afterEach(async () => { await server.stop() })
```

**Unit tests** use `vi.mock()` for module mocking. When mocking ES modules, call `vi.resetModules()` in `beforeAll` and use dynamic `await import(...)` after setting up mocks. Use `http2.constants` (e.g. `HTTP_STATUS_OK`) for HTTP status assertions.

## Code Style

Linting is enforced by [neostandard](https://github.com/neostandard/neostandard) (configured in `eslint.config.js`). No semicolons, 2-space indent, single quotes.
