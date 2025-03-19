FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

# Hier ist die Änderung - verwende --legacy-peer-deps
RUN npm install --legacy-peer-deps

COPY --from=builder /app/package*.json ./
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
