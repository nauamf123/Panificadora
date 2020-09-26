import { Body, Controller, Param } from "@nestjs/common";
import { Delete, Get, Post, Put } from "@nestjs/common/decorators/http/request-mapping.decorator";
import { UserDTO } from "./user.dto";
import { UserService } from "./user.service";



@Controller('users')
export class UserController {
    constructor(private userService: UserService){}
  
    @Get()
    showAllUsers(){
        return this.userService.showAll();
    }

    @Post()
    createUser(@Body() data: UserDTO){
        return this.userService.create(data);
    }

    @Get(':id')
    readUser(@Param('id') id: number){
        return this.userService.read(id);
    }

    @Put(':id')
    updateUser(@Param('id') id: number, @Body() data: Partial<UserDTO>){
        return this.userService.update(id, data);
    }

    @Delete(':id')
    destroyUser(@Param('id') id: number){
        return this.userService.destroy(id);
    }

}