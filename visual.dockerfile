# Dockerfile
FROM alpine:3.14

# Install latest Chromium package.
RUN apk add --no-cache \
      chromium \
      nss \
      freetype \
      freetype-dev \
      harfbuzz \
      ca-certificates \
      ttf-freefont \
      nodejs \
      yarn

# Tell Puppeteer to skip installing Chrome. We'll be using the installed package.
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true \
    PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium-browser

WORKDIR /app
ARG TALSTRAP_TOKEN
COPY package.json yarn.lock .npmrc ./
COPY packages/talstrap/package.json packages/talstrap/package.json
RUN yarn install --frozen-lockfile
COPY . .
# Remove .npmrc so that we don't need TOKENs to run yarn commands
RUN rm -rf .npmrc
