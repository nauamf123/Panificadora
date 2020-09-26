import { IsString } from 'class-validator';


export class UserDTO {

    id:number;

    
    @IsString({ message: 'Não é uma string válida'})
    nome: string;

    @IsString({ message: 'Não é uma string válida'})
    cnpj: string;

    @IsString({ message: 'Não é uma string válida'})
    ie: string;

    @IsString({ message: 'Não é uma string válida'})
    endereco: string;

    @IsString({ message: 'Não é uma string válida'})
    bairro: string;

    @IsString({ message: 'Não é uma string válida'})
    cidade: string;

    @IsString({ message: 'Não é uma string válida'})
    cep: string;


}

