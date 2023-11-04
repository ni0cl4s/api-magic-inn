import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

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
  const swaggerConfig = new DocumentBuilder()
    .setTitle('Magic Inn')
    .setDescription(
      'The goal of this API is to enable the management of a magical inn located in a medieval-fantasy world. Users will be able to book rooms, order food, and enjoy an immersive experience in this fantastical universe.',
    )
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
