FROM node:10.15.0-alpine

COPY mbwatch /bin
RUN npm i -g mountebank nodemon --production
EXPOSE 2525

ENTRYPOINT ["mbwatch"]
