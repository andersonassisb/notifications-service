import { Injectable } from '@nestjs/common';
import { MailService } from './mail.service';

@Injectable()
export class PostmarkMailService extends MailService {
  sendmail(): string {
    return 'Postmark running!';
  }
}
