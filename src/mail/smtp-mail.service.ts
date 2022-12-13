import { Injectable } from '@nestjs/common';
import { MailService } from './mail.service';

@Injectable()
export class SMTPMailService extends MailService {
  sendmail(): string {
    return 'SMTP running!';
  }
}
