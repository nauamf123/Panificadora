import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { PedidoDTO } from "./pedido.dto";
import { PedidoService } from "./produto.service";











@Controller('pedidos')
export class PedidoController {
    constructor(private pedidoService: PedidoService){}
  
    @Get()
    showAllUsers(){
        return this.pedidoService.showAll();
    }

    @Post()
    createUser(@Body() data: PedidoDTO){
        return this.pedidoService.create(data);
    }

    @Get(':id')
    readUser(@Param('id') id: number){
        return this.pedidoService.read(id);
    }

    @Put(':id')
    updateUser(@Param('id') id: number, @Body() data: Partial<PedidoDTO>){
        return this.pedidoService.update(id, data);
    }

    @Delete(':id')
    destroyUser(@Param('id') id: number){
        return this.pedidoService.destroy(id);
    }

    

}