FROM node:17-alpine

ARG CREATED_DATE=not-set
ARG SOURCE_COMMIT=not-set

EXPOSE 3333

LABEL dev.mrck.prime.image.authors=marckraw@icloud.com
LABEL dev.mrck.prime.image.created=$CREATED_DATE
LABEL dev.mrck.prime.image.source=$SOURCE_COMMIT
LABEL dev.mrck.prime.image.version=0.0.1
LABEL dev.mrck.prime.image.name=prime-mrck-dev-node-app
LABEL dev.mrck.prime.image.description="prime.mrck.dev Node App"
LABEL dev.mrck.prime.image.type=node

ADD . /app
RUN cd /app && yarn && yarn build
CMD ["yarn", "start:prod"]
