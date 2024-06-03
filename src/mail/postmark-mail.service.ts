import { Injectable } from "@nestjs/common";
import { MailService } from "./mail.service";

@Injectable()
export class PostmarkMailService implements MailService {

    sendMail() {
        console.log('PostmarkMail sendMail');
        return 'PostmarkMail sendMail';
    }
}