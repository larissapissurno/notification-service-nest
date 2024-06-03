import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SMTPMailService } from './mail/smtp-mail.service';
import { MailService } from './mail/mail.service';
import { PostmarkMailService } from './mail/postmark-mail.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, {
    // that's needed to provide the MailService since it's an abstract class
    provide: MailService,
    useClass: PostmarkMailService,
  }],
})
export class AppModule {}
