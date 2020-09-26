import { BaseEntity, Column, Double, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { Produto } from "../produto/produto.entity";
import { User } from "../users/user.entity";




Entity()
export class Pedido extends BaseEntity {




    @PrimaryColumn({name: 'id' , type: 'int' , length: '80' })
    id:number;

    @Column({name: 'data' , type: 'date' , length: '80' })
    data:Date;

    @Column({name: 'dataentrega' , type: 'date' , length: '80' })
    dataentrega:Date;

    @Column({name: 'transportadora' , type: 'varchar' , length: '80' })
    transportadora: string;

    @Column({name: 'valortotal' , type: 'decimal' , length: '80' })
    valortotal: Double;

    @Column({name: 'valorproduto' , type: 'decimal' , length: '80' })
    valorproduto: Double;

    @Column({name: 'valordesconto' , type: 'decimal' , length: '80' })
    valordesconto: Double;

    @Column({name: 'cliente' , type: 'varchar' , length: '80' })
    cliente: string;

    @Column({name: 'entrega' , type: 'varchar' , length: '80' })
    entrega: string;


    
    @OneToMany(type => User, user => user.save, { cascade: true, eager: true })
    user: User[];

    @OneToMany(type => Produto, produto => produto.save, { cascade: true, eager: true })
    produto: Produto[];






}