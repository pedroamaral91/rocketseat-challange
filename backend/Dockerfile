FROM node:12.7.0-alpine
ARG APP_PORT
WORKDIR /app
COPY package.json /app
COPY yarn.lock /app
RUN yarn
CMD ["yarn", "dev"]
EXPOSE $APP_PORT