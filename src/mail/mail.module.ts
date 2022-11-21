import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { Module } from '@nestjs/common';
import { MailService } from './service/mail.service';
import { join } from 'path';

@Module({
  imports: [
    MailerModule.forRoot({
      // transport: 'smtps://user@example.com:topsecret@smtp.example.com',
      // or
      transport: {
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        ignoreTLS: false,
        auth: {
          user: 'usatii.andrei062000@gmail.com',
          pass: 'zplxmspnmhjeaazh',
        },
      },
      defaults: {
        from: '"No Reply" <adlipeeters@gmail.com>',
      },
      template: {
        dir: join(__dirname, 'templates'),
        // dir: process.cwd() + '/dist/src/mail/templates/',
        adapter: new HandlebarsAdapter(), // or new PugAdapter() or new EjsAdapter()
        options: {
          strict: true,
        },
      },
    }),
  ],
  providers: [MailService],
  exports: [MailService], // 👈 export for DI
})
export class MailModule {}
