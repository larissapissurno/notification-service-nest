import { Module } from '@nestjs/common';
import { AppController } from './infra/app.controller';
import { AppService } from './infra/app.service';
import { MailService } from './mail/mail.service';
import { PostmarkMailService } from './mail/postmark-mail.service';
import { PrismaService } from './infra/prisma.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    AppService, 
    PrismaService,
    {
      // that's needed to provide the MailService since it's an abstract class
      provide: MailService,
      useClass: PostmarkMailService,
    }
  ],
})
export class AppModule {}
