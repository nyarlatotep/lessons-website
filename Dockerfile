
FROM node

ENV START="npm run start"
ENV BUILD="npm run build"
ENV TEST="npm run test"

EXPOSE 80:3000
EXPOSE 443:8080

COPY . /app
WORKDIR /app

RUN npm install && npm install -g npm@8.13.2
RUN npm run build && npm install -g serve
RUN cd ./build
 
ENTRYPOINT npx serve -s build

