import { Injectable } from "@nestjs/common";
import { MailService } from "./mail.service";

@Injectable()
export class SMTPMailService implements MailService {

  sendMail(): string {
    console.log('SMTPMail sendMail');
    return 'SMTPMail sendMail';
  }
}