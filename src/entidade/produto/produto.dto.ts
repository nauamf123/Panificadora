

import { IsDate, IsInt, IsString } from 'class-validator';
import { Double } from 'typeorm';


export class ProdutoDTO {
   
    id:number;
   
    @IsString({ message: 'Não é uma string válida'})
    nome: string;

    @IsString({ message: 'Não é uma string válida'})
    descricao: string;

    @IsInt({ message: 'Não é um inteiro válido'})
    preco: Double;

    @IsInt({ message: 'Não é um inteiro válido'})
    estoque: number;

    @IsDate({message: 'Não é uma Data'})
    datavalidade: Date;

    @IsInt({ message: 'Não é um inteiro válido'})
    unidademedida:number;
    

}