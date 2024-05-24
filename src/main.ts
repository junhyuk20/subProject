import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule); // 제네릭으로 express를 주어야 웹어플 만들 수 있다.
  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname,'..','views'))
  app.setViewEngine('hbs')

  await app.listen(3000);

  
}
bootstrap();
