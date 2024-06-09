import { Body, Controller, Post } from '@nestjs/common';
import { PrismaService } from '../../database/prisma/prisma.service';
import { randomUUID } from 'node:crypto';
import { CreateNotificationBody } from '../dtos/create-notification-body';

@Controller('notifications')
export class NotificationsController {
  constructor(private readonly prismaService: PrismaService) {}

  @Post()
  async create(@Body() body: CreateNotificationBody) {
    await this.prismaService.notification.create({
      data: {
        id: randomUUID(),
        ...body,
      },
    });
  }
}
