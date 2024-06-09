import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { MailService } from 'src/mail/mail.service';
import { PostmarkMailService } from 'src/mail/postmark-mail.service';
import { NotificationsRepository } from 'src/application/repositories/notifications-repository';
import { PrismaNotificationsRepository } from './prisma/repositories/prisma-notifications.repository';

@Module({
  providers: [
    PrismaService,
    {
      // that's needed to provide the MailService since it's an abstract class
      provide: MailService,
      useClass: PostmarkMailService,
    },
    {
      provide: NotificationsRepository,
      useClass: PrismaNotificationsRepository,
    },
  ],
  exports: [NotificationsRepository],
})
export class DatabaseModule {}
