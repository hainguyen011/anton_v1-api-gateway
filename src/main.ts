import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { notifications } from "./common/notifications";
import { colors } from './common/colors';
import * as dotenv from 'dotenv';


dotenv.config();
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000, () => {
    console.log(colors.cyan, notifications.greeting);
    console.log(colors.yellow, notifications.speed);
    console.log(notifications.engines);
    console.log(colors.green, notifications.success + (process.env.PORT || 3000));
  });
}
bootstrap();
