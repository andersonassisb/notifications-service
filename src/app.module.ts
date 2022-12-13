import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { HttpModule } from './http.module';
import { MailService } from './mail/mail.service';
import { SMTPMailService } from './mail/smtp-mail.service';
import { PrismaService } from './prisma.service';

@Module({
  imports: [HttpModule],
  controllers: [AppController],
  providers: [
    PrismaService,
    {
      provide: MailService,
      useClass: SMTPMailService,
    },
  ],
})
// eslint-disable-next-line prettier/prettier
export class AppModule { }
