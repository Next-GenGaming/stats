FROM node:19-alpine

LABEL Name="Rust Stats"
LABEL description="This is will provide a api to get data from the Player Ranks plugin and pull it into a webservice. Designed for Next-Gen Gaming"
LABEL version="1.1.8"
LABEL maintainer="whitlocktech"
LABEL maintainer_email="whitlocktech@gmail.com"

WORKDIR /app

COPY package*.json .
RUN npm install --omit-dev

COPY . .



VOLUME [ "/log" ]

RUN mkdir -p /app/log
RUN chown node /app/log
RUN touch audit.json
RUN chown node audit.json

USER node

CMD ["npm", "start"]

EXPOSE 5500