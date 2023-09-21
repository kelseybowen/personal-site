FROM node:18-alpine

WORKDIR /personal-site/

COPY public/ /personal-site/public
COPY src/ /personal-site/src
COPY package.json /personal-site/

RUN npm install

CMD ["npm", "start"]

