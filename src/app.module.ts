import { Module } from '@nestjs/common';
import { AppController } from './infra/app.controller';
import { HttpModule } from './infra/http.module';
import { MailService } from './mail/mail.service';
import { SMTPMailService } from './mail/smtp-mail.service';
import { PrismaService } from './infra/prisma.service';

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
