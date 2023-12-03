import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import * as passport from 'passport';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(
    session({
      secret: 'keyword',
      resave: false,
      saveUninitialized: false,
    })
  );
  
  const config = new DocumentBuilder()
    .setTitle("Others")
    .setDescription("api docs")
    .setVersion("1.0")
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);

  app.use(passport.initialize());
  app.use(passport.session());
  await app.listen(3000);
}
bootstrap();
