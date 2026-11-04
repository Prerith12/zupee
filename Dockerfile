# Multi-stage Docker build for Zupee E-Commerce on Google Cloud Run
# -------------------------------------------------------------
# Stage 1: Build the React Frontend
FROM node:20-alpine AS client-builder
WORKDIR /app/client
COPY client/package*.json ./
RUN npm ci --prefer-offline || npm install
COPY client/ ./
RUN npm run build

# Stage 2: Production Server
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=8080

# Copy server package definitions & install production dependencies
COPY server/package*.json ./server/
WORKDIR /app/server
RUN npm ci --omit=dev || npm install --omit=dev

# Copy server source code
COPY server/ ./

# Copy built frontend from Stage 1 into the location server.js expects (../client/dist)
COPY --from=client-builder /app/client/dist /app/client/dist

# Expose standard Cloud Run port
EXPOSE 8080

CMD ["node", "server.js"]

