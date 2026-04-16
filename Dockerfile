ARG PARENT_VERSION=24.15.0-alpine3.23
ARG PORT=3000

# development
FROM node:${PARENT_VERSION} AS development
ARG PARENT_VERSION

ARG PORT
ENV PORT=${PORT}
EXPOSE ${PORT}

COPY --chown=node:node package*.json ./
RUN npm install
COPY --chown=node:node ./src ./src

CMD ["npm", "run", "dev"]

# production
FROM node:${PARENT_VERSION} AS production
ARG PARENT_VERSION

COPY --from=development /home/node/package*.json ./
COPY --from=development /home/node/src ./src/

RUN npm ci --omit=dev

ARG PORT
ENV PORT=${PORT}
EXPOSE ${PORT}

CMD ["node", "src"]
