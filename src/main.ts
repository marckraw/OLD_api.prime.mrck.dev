import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe, VersioningType } from '@nestjs/common';
import * as morgan from 'morgan'
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";

const corsWhitelist = ['http://localhost:3000', 'https://prime.mrck.dev', 'https://mrck.dev'];
const corsOptions = {
  origin: corsWhitelist,
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(morgan('combined'))
  app.enableCors(corsOptions);
  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: '1',
  });
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // strip out, stuff that are not defined in our DTO
    }),
  );

  const config = new DocumentBuilder()
    .setTitle('prime.mrck.dev example')
    .setDescription('The prime.mrck.dev API description')
    .setVersion('0.1')
    .addTag('prime.mrck.dev')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3333);
}
bootstrap();
