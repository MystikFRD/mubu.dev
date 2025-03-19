# Basis-Image
FROM node:18-alpine

# Arbeitsverzeichnis im Container
WORKDIR /app

# Kopiere package.json und package-lock.json
COPY package*.json ./

# Installiere Abhängigkeiten
RUN npm install

# Kopiere den Rest des Projekts
COPY . .

# Baue die Next.js-Anwendung
RUN npm run build

# Expose Port 3000
EXPOSE 3000

# Starte die Anwendung
CMD ["npm", "start"]
