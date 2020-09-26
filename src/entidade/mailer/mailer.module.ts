import { Module } from '@nestjs/common';
import { MailerModule } from '@nestjs-modules/mailer';
import { PugAdapter } from '@nestjs-modules/mailer/dist/adapters/pug.adapter';
import { EmailController } from './mailer.controller';
import { EmailService } from './mailer.service';
import { ScheduleModule } from '@nestjs/schedule/dist/schedule.module';

@Module({
  imports: [
    MailerModule.forRootAsync({
      useFactory: () => ({
        transport: 'smtp.mailtrap.io',
        defaults: {
          from:'"Vendedor" <17824ad0a5852c>',
        },
        template: {
          dir: __dirname + '/templates',
          adapter: new PugAdapter(),
          options: {
            strict: true,
          },
        },
      }),
    }),


    ScheduleModule.forRoot()
  
  ],




  controllers: [
      EmailController

  ],
providers: [
    EmailService
],



})



export class AppModule {


}