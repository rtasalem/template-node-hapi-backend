ARG PARENT_VERSION=24.15.0
ARG PORT=3000

# development
FROM node:${PARENT_VERSION} AS development
ARG PARENT_VERSION

WORKDIR /home/node 

ARG PORT
ENV PORT=${PORT}
EXPOSE ${PORT}

COPY --chown=node:node package*.json ./
RUN npm install
COPY --chown=node:node . .

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

HEALTHCHECK --timeout=3s \
  CMD node -e "fetch('http://127.0.0.1:' + (process.env.PORT || 3000) + '/health').then(r => process.exit(r.ok ? 0 : 1)).catch(() => process.exit(1))"

USER node

CMD ["node", "src"]
