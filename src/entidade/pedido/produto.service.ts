
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { PedidoDTO } from "./pedido.dto";
import { Pedido } from "./pedido.entity";








@Injectable()
export class PedidoService {
   
    constructor(@InjectRepository(Pedido) private pedidoRepository:
    Repository<Pedido>){}



    async showAll(){
        return await this.pedidoRepository.find();

    
    
}

    async create(data){
        const user = await this.pedidoRepository.create(data);
        await this.pedidoRepository.save(user);
        return user;
    }

    
    async read(id: number) {
        return await this.pedidoRepository.findOne({where: {id} });
    }

    async update(id: number, data: Partial<PedidoDTO>){
        await this.pedidoRepository.update({ id }, data);
        return await this.pedidoRepository.findOne({id});
    }

    async destroy(id: number) {
        await this.pedidoRepository.delete({id});
        return {deleted: true};
    }

 
    
   


}