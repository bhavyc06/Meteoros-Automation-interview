# Dockerfile at repo root
FROM node:18-alpine

WORKDIR /app
COPY package*.json ./
RUN npm install --omit=dev

# copy source, build React, prune dev deps
COPY . .
RUN npm run build && npm prune --omit=dev

ENV PORT=5000
ENV NODE_ENV=production
EXPOSE 5000
CMD ["node", "server/src/server.js"]
