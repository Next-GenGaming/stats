FROM node:19-alpine

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