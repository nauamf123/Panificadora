
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PedidoController } from './entidade/pedido/pedido.controller';
import { Pedido } from './entidade/pedido/pedido.entity';
import { PedidoService } from './entidade/pedido/produto.service';
import { ProdutoController } from './entidade/produto/produto.controller';
import { Produto } from './entidade/produto/produto.entity';
import { ProdutoService } from './entidade/produto/produto.service';
import { UserController } from './entidade/users/user.controller';
import { User } from './entidade/users/user.entity';
import { UserService } from './entidade/users/user.service';




@Module({
  imports: [

    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '127.0.0.1',
      port: 61623,
      username: 'nauam',
      password: '7887',
      database: 'panificadora',
      entities: [
        __dirname + "/../entities/*.entity{.ts,.js}"
     
      ],
      synchronize: true,
      logging: true
    }),
    TypeOrmModule.forFeature([
      User,
      Produto,
      Pedido
     
    ]),
   







  ],


  controllers: [AppController,
                UserController,
                PedidoController,
                ProdutoController
        
              ],
  providers: [AppService,
              UserService,
              PedidoService,
              ProdutoService
  

              
  ],
})
export class AppModule {}
