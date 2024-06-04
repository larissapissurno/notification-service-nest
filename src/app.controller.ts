import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { MailService } from './mail/mail.service';
import { PrismaService } from './prisma.service';
import { randomUUID } from 'node:crypto';

@Controller('notifications')
export class AppController {
  constructor(
    // private readonly appService: AppService,
    // private readonly mailService: MailService,
    private readonly prismaService: PrismaService,
  ) {}

  // @Get('hello')
  // getHello(): string {
  //   return this.appService.getHello();
  // }

  // @Get('sendmail')
  // sendMail(): string {
  //   return this.mailService.sendMail();
  // }

  @Get()
  getAll() {
    return this.prismaService.notification.findMany(); 
  }

  @Post()
  async create(@Body() body: { content: string, category: string, recipientId: string }) {
    await this.prismaService.notification.create({
      data: {
        id: randomUUID(),
        ...body
      },
    });
  }
}
