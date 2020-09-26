import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { UserDTO } from "./user.dto";
import { User } from "./user.entity";



@Injectable()
export class UserService {
   
    constructor(@InjectRepository(User) private userRepository:
    Repository<User>){}

    async showAll(){
        return await this.userRepository.find();    
}

    async create(data){
        const user = await this.userRepository.create(data);
        await this.userRepository.save(user);
        return user;
    }

    
    async read(id: number) {
        return await this.userRepository.findOne({where: {id} });
    }

    async update(id: number, data: Partial<UserDTO>){
        await this.userRepository.update({ id }, data);
        return await this.userRepository.findOne({id});
    }

    async destroy(id: number) {
        await this.userRepository.delete({id});
        return {deleted: true};
    }


   


}