FROM node:14

RUN npm completion >> ~/.bashrc

# https://github.com/zloirock/core-js#postinstall-message
ENV DISABLE_OPENCOLLECTIVE=true
ENV NODE_ENV=development

# set working directory
WORKDIR /app

EXPOSE 3000

# Symlink npm files and install node_modules one level upwards to avoid complicated volume mounting
# See: https://stackoverflow.com/questions/30043872/docker-compose-node-modules-not-present-in-a-volume-after-npm-install-succeeds#comment74908936_32785014
COPY package.json yarn.lock ./code/
RUN ln -s /app/code/package.json package.json \
    && ln -s /app/code/yarn.lock yarn.lock
ENV NODE_PATH=/app/node_modules
ENV PATH="/app/node_modules/.bin:${PATH}"

WORKDIR /app/code
COPY . .

RUN yarn install --production=false --frozen-lockfile
CMD ["yarn", "start"]
