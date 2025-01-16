import { Module } from '@nestjs/common';
import { GatewayModule } from './gateway/gateway.module';
// import { ClientsModule, Transport } from '@nestjs/microservices';



@Module({
  imports: [
    // ClientsModule.register([{
    //   name: "CHARACTER_SERVICE",
    //   transport: Transport.REDIS,
    //   options: {
    //     host: 'localhost',  
    //     port: 6379,        
    //   },
    // }]),
    GatewayModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
