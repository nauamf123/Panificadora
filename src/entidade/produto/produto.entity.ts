import { BaseEntity, Column, Double, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { Pedido } from "../pedido/pedido.entity";




@Entity()
export class Produto extends BaseEntity{
    
    @PrimaryColumn({name: 'id' , type: 'int' , length: '80' })
    id:number;
    
    @Column({name: 'nome' , type:'varchar' , length: '80'})
    nome: string;

    @Column({name: 'descricao' , type: 'varchar' , length: '80'})
    descricao: string;

    @Column({name: 'preco', type: 'decimal' , length:80 })
    preco: Double;

    @Column({name: 'estoque' , type:'bigint' , length: '80'})
    estoque: number;

    @Column({name: 'datavalidade' , type: 'date' , length: '80' })
    datavalidade: Date;

    @Column({name: 'unidademedida' , type: 'int' , length: '80'})
    unidademedida:number;

    @ManyToOne(type => Pedido, pedido => pedido.save)
    pedido: Pedido;
    

    

}