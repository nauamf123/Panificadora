import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { Cron } from '@nestjs/schedule/dist/decorators/cron.decorator';
import { CronExpression } from '@nestjs/schedule/dist/enums/cron-expression.enum';


@Injectable()
export class EmailService {
  constructor(private readonly mailerService: MailerService) {}
  


  @Cron(CronExpression.EVERY_6_HOURS)
  public pedido(): void {
    this
      .mailerService
      .sendMail({
        to: 'nauamffgt123@gmail.com', 
        from: 'smtp.mailtrap.io', 
        subject: 'Produto Pedido', 
        text: 'Seu produto foi envidado com sucesso', 
      })
      .then(() => {})
      .catch(() => {});
  }


}



  

