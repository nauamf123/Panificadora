import { Controller, Get, Post } from "@nestjs/common";
import { EmailService } from "./mailer.service";





@Controller('pedidos')
export class EmailController {
    constructor(private mailerService: EmailService){}

    @Post()
     postEmail(){
        return this.mailerService.pedido();
     }


     @Get()
     getEmail(){
        return this.mailerService.pedido();
     }

}