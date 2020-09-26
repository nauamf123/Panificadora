import { BaseEntity, Column, Entity, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Pedido } from "../pedido/pedido.entity";




@Entity("user")
export class User  extends BaseEntity {

    @PrimaryColumn({name: 'id' , type: 'int' , length: '80' })
    id:number;


    @Column({name: 'nome' , type: 'varchar' , length: '80'})
    nome: string;

    @Column({name: 'cnpj' , type:'varchar' , length:'80'})
    cnpj: string;

    @Column({name: 'ie' ,  type: 'varchar' , length: '80'})
    ie: string;

    @Column({name: 'endereco' , type: 'varchar' , length:'80'})
    endereco: string;

    @Column({name: 'bairro' , type:'varchar' , length: '80'})
    bairro: string;

    @Column({name: 'cidade' , type:'varchar' , length: '80'})
    cidade: string;

    @Column({name: 'cep' , type:'varchar' , length: '80'})
    cep: string;
    

    @ManyToOne(type => Pedido, pedido => pedido.save)
    pedido: Pedido;
    

}
