import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ProdutoDTO } from "./produto.dto";
import { Produto } from "./produto.entity";








@Injectable()
export class ProdutoService {
   
    constructor(@InjectRepository(Produto) private produtoRepository:
    Repository<Produto>){}

    async showAll(){
        return await this.produtoRepository.find();

    
    
}

    async create(data){
        const user = await this.produtoRepository.create(data);
        await this.produtoRepository.save(user);
        return user;
    }

    
    async read(id: number) {
        return await this.produtoRepository.findOne({where: {id} });
    }

    async update(id: number, data: Partial<ProdutoDTO>){
        await this.produtoRepository.update({ id }, data);
        return await this.produtoRepository.findOne({id});
    }

    async destroy(id: number) {
        await this.produtoRepository.delete({id});
        return {deleted: true};
    }

   


}