FROM node:17-alpine

ARG CREATED_DATE=not-set
ARG SOURCE_COMMIT=not-set

EXPOSE 3333

LABEL app.hyzone.image.authors=marckraw@icloud.com
LABEL app.hyzone.image.created=$CREATED_DATE
LABEL app.hyzone.image.source=$SOURCE_COMMIT
LABEL app.hyzone.image.version=0.0.1
LABEL app.hyzone.image.name=hyzone-node-app
LABEL app.hyzone.image.description="HyZone Node App"
LABEL app.hyzone.image.type=node

ADD . /app
RUN cd /app && yarn && yarn build
CMD ["yarn", "start:prod"]
