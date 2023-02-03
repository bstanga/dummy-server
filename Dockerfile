FROM node:18.0-slim
COPY ./app/ .
RUN yarn install
CMD [ "yarn", "start" ]