FROM node:lts-alpine
ENV NODE_ENV=production
ENV port=5000
ENV HOST_DB=127.0.0.1
ENV USER_DB=docker
ENV PASSWORT_DB=f00HiSqRJ&J8jzNe
ENV DATABASE_DB=askaustria
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --production --silent && mv node_modules ../
COPY . .
EXPOSE 5000
RUN chown -R node /usr/src/app
USER node
CMD ["node", "index.js"]
