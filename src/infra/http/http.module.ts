import { Module } from '@nestjs/common';
import { NotificationsController } from './controllers/notifications.controller';
import { ExampleController } from './controllers/example.controller';

@Module({
  controllers: [ExampleController, NotificationsController],
})
export class HttpModule {}
