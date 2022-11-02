FROM node:18.0-slim
COPY . .
RUN yarn install
CMD [ "yarn", "start" ]