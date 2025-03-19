# Build-Stage
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install --legacy-peer-deps
COPY . .
RUN npm run build

# Production-Stage
FROM node:18-alpine
WORKDIR /app
ENV NODE_ENV production

# Kopiere nur die benötigten Dateien
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules

# Start der Anwendung
EXPOSE 3000
CMD ["npm", "start"]
