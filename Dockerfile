FROM node:9.11.1-alpine

# File Author / Maintainer
MAINTAINER Junyuan Zheng

ENV NPM_CONFIG_LOGLEVEL warn

# Provides cached layer for node_modules
RUN mkdir -p /app

WORKDIR /app

# Copy package.json to container
ADD ./package.json /app/package.json
ADD ./yarn.lock /app/yarn.lock

# Install all the thing
RUN yarn install --production

# Copy files to container
ADD ./static /app/static
ADD ./components /app/components
ADD ./pages /app/pages
ADD ./index.js /app/index.js
ADD ./next.config.js /app/next.config.js
ADD ./.babelrc /app/.babelrc
ADD ./server.js /app/server.js
ADD ./localhost.crt /app/localhost.crt
ADD ./localhost.key /app/localhost.key

# Run script to generate production build
RUN yarn run build