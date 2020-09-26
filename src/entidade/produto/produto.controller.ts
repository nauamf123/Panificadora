import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ProdutoDTO } from "./produto.dto";
import { ProdutoService } from "./produto.service";










@Controller('produtos')
export class ProdutoController {
    constructor(private produtoService: ProdutoService){}
  
    @Get()
    showAllUsers(){
        return this.produtoService.showAll();
    }

    @Post()
    createUser(@Body() data: ProdutoDTO){
        return this.produtoService.create(data);
    }

    @Get(':id')
    readUser(@Param('id') id: number){
        return this.produtoService.read(id);
    }

    @Put(':id')
    updateUser(@Param('id') id: number, @Body() data: Partial<ProdutoDTO>){
        return this.produtoService.update(id, data);
    }

    @Delete(':id')
    destroyUser(@Param('id') id: number){
        return this.produtoService.destroy(id);
    }

}