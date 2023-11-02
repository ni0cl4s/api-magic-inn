import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import morgan from 'morgan';

const PORT: string | number = 3333 || process.env.PORT;
const HOST: string = process.env.HOST || 'localhost';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );
  app.use(morgan('common'));
  const swaggerConfig = new DocumentBuilder()
    .setTitle('Magic Inn')
    .setDescription('API for Magic Inn')
    .setVersion('1.0')
    .addBearerAuth()
    .setExternalDoc('Postman Collection', '/swagger-json')
    .build();
  const swaggerDocument = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('swagger', app, swaggerDocument);
  await app.listen(PORT, HOST);
}

bootstrap().then(() =>
  Logger.log(`🚀 API is running on: http://${HOST}:${PORT}`),
);
