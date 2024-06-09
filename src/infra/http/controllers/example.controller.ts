import { Body, Controller, Get, Post } from '@nestjs/common';
import { PrismaService } from '../../database/prisma/prisma.service';
import { randomUUID } from 'node:crypto';
import { CreateNotificationBody } from '../dtos/create-notification-body';

@Controller('examples')
export class ExampleController {
  constructor(
    // private readonly mailService: MailService,
    private readonly prismaService: PrismaService,
  ) {}

  // @Get('sendmail')
  // sendMail(): string {
  //   return this.mailService.sendMail();
  // }

  @Get()
  getAll() {
    return this.prismaService.notification.findMany();
  }

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
