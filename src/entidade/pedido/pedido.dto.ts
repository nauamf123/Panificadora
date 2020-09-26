import { IsDate, IsInt, IsString } from 'class-validator';
import { Double } from 'typeorm';


export class PedidoDTO {

    id:number;
    
    @IsDate({message: 'Não é uma Data'})
    data:Date;

    @IsDate({message: 'Não é uma Data'})
    dataentrega:Date;
  
    @IsString({ message: 'Não é uma string válida'})
    transportadora: string;

    @IsInt({ message: 'Não é um inteiro válido'})
    valortotal: Double;

    @IsInt({ message: 'Não é um inteiro válido'})
    valorproduto: Double;

    @IsInt({ message: 'Não é um inteiro válido'})
    valordesconto: Double;

    @IsString({ message: 'Não é uma string válida'})
    cliente: string;

    @IsString({ message: 'Não é uma string válida'})
    entrega: string;


    
}