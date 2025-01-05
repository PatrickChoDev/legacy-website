FROM node:lts as build
WORKDIR /app
RUN npm config set unsafe-perm true
COPY package.json .
RUN npm install --no-audit
COPY . .
RUN npm run build

FROM node:lts-alpine as production
WORKDIR /app
RUN apk --no-cache add ca-certificates
COPY --chown=node:node --from=build /app/package.json /app/package-lock.json ./
COPY --chown=node:node --from=build /app/build/ .
RUN npm install --only=production --no-audit
ENV NODE_ENV=PRODUCTION
USER node:node
CMD [ "node", "index.js"]
EXPOSE 3000
